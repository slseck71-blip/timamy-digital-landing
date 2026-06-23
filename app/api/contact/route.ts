import { Resend } from "resend";
import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

async function saveToNotion(data: ContactPayload, token: string, dbId: string) {
  await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: dbId },
      properties: {
        Nom: { title: [{ text: { content: data.name } }] },
        Email: { email: data.email },
        Entreprise: { rich_text: [{ text: { content: data.company ?? "" } }] },
        Message: { rich_text: [{ text: { content: data.message } }] },
        Statut: { select: { name: "Nouveau" } },
        Source: { select: { name: "Landing Page" } },
      },
    }),
  });
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    const tasks: Promise<unknown>[] = [];

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      tasks.push(
        resend.emails.send({
          from: "TIMAMY DIGITAL <contacts@timamydigital.com>",
          to: ["contacts@timamydigital.com"],
          replyTo: email,
          subject: `Nouveau lead — ${name}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0F172A;color:#fff;padding:32px;border-radius:12px;">
              <h2 style="color:#7B35E8;margin-top:0;">Nouveau lead via timamydigital.com</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#94a3b8;width:120px;">Nom</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#00D4FF;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Entreprise</td><td style="padding:8px 0;">${body.company || "—"}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;vertical-align:top;">Message</td><td style="padding:8px 0;line-height:1.6;">${message.replace(/\n/g, "<br>")}</td></tr>
              </table>
              <hr style="border-color:#1E293B;margin:24px 0;">
              <p style="color:#475569;font-size:12px;margin:0;">Reçu le ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Dakar" })} — Répondre directement à cet email contacte le lead.</p>
            </div>
          `,
        })
      );
    }

    const notionToken = process.env.NOTION_TOKEN;
    const notionDbId = process.env.NOTION_LEADS_DB_ID;
    if (notionToken && notionDbId) {
      tasks.push(saveToNotion(body, notionToken, notionDbId));
    }

    await Promise.all(tasks);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }
}
