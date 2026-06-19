import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  title: "TIMAMY DIGITAL — Build • Automate • Scale",
  description:
    "TIMAMY DIGITAL helps entrepreneurs, creators, freelancers and small businesses build systems, automate operations and scale revenue using AI.",
  keywords: [
    "AI automation",
    "digital systems",
    "business automation",
    "Notion systems",
    "n8n workflows",
    "AI agents",
    "digital products",
    "entrepreneur tools",
    "scale business",
    "TIMAMY DIGITAL",
  ],
  authors: [{ name: "TIMAMY DIGITAL" }],
  creator: "TIMAMY DIGITAL",
  openGraph: {
    title: "TIMAMY DIGITAL — Build • Automate • Scale",
    description:
      "Helping entrepreneurs and creators leverage AI, automation and digital systems to grow faster and work smarter.",
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
    title: "TIMAMY DIGITAL — Build • Automate • Scale",
    description:
      "Helping entrepreneurs and creators leverage AI, automation and digital systems to grow faster and work smarter.",
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
