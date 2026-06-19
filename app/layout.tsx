import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  title: "TIMAMY DIGITAL — Construire • Automatiser • Scaler",
  description:
    "TIMAMY DIGITAL aide les entrepreneurs, créateurs, freelances et petites entreprises à construire des systèmes, automatiser leurs opérations et scaler leurs revenus grâce à l'IA.",
  keywords: [
    "automatisation IA",
    "systèmes digitaux",
    "automatisation business",
    "systèmes Notion",
    "workflows n8n",
    "agents IA",
    "produits digitaux",
    "outils entrepreneur",
    "scaler business",
    "TIMAMY DIGITAL",
  ],
  authors: [{ name: "TIMAMY DIGITAL" }],
  creator: "TIMAMY DIGITAL",
  openGraph: {
    title: "TIMAMY DIGITAL — Construire • Automatiser • Scaler",
    description:
      "Aider les entrepreneurs et créateurs à exploiter l'IA, l'automatisation et les systèmes digitaux pour croître plus vite et travailler plus intelligemment.",
    url: "https://timamydigital.com",
    siteName: "TIMAMY DIGITAL",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TIMAMY DIGITAL — Build • Automate • Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIMAMY DIGITAL — Construire • Automatiser • Scaler",
    description:
      "Aider les entrepreneurs et créateurs à exploiter l'IA, l'automatisation et les systèmes digitaux pour croître plus vite et travailler plus intelligemment.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://timamydigital.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0F172A] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
