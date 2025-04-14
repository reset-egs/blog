// src/app/layout.tsx
import type { Metadata } from "next";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ctrl+alt+reset",
    default: "ctrl+alt+reset",
  },
  description: "Personal website and blog of Szymon Zwara",
  metadataBase: new URL("https://www.ctrlaltreset.dev"),
  openGraph: {
    title: "ctrl+alt+reset",
    description: "Personal website and blog of Szymon Zwara",
    url: "https://www.ctrlaltreset.dev",
    siteName: "ctrl+alt+reset",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ctrl+alt+reset",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`antialiased ${spaceGrotesk.className} flex flex-col min-h-screen`}
      >
        <AppBar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
