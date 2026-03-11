import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://aabhushan.in'),
  title: "Aabhushan Boutique | Elegant Ethnic Wear for Every Occasion",
  description:
    "Discover exquisite Indian ethnic wear at Aabhushan Boutique — bridal lehengas, designer sarees, party wear, and custom stitching in Mumbai. Book your bridal consultation today.",
  keywords: [
    "Indian boutique",
    "bridal lehenga",
    "designer sarees",
    "ethnic wear",
    "custom stitching",
    "bridal collection",
    "Mumbai boutique",
    "Indian fashion",
  ],
  authors: [{ name: "Aabhushan Boutique" }],
  creator: "Aabhushan Boutique",
  openGraph: {
    title: "Aabhushan Boutique | Elegant Ethnic Wear",
    description:
      "Exquisite bridal lehengas, designer sarees & custom ethnic wear. Visit us in Mumbai or enquire via WhatsApp.",
    url: "https://aabhushan.in",
    siteName: "Aabhushan Boutique",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aabhushan Boutique — Elegant Ethnic Wear",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aabhushan Boutique | Elegant Ethnic Wear",
    description: "Bridal lehengas, designer sarees & custom ethnic wear — Mumbai.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-cream text-dark antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
