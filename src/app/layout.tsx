// src/app/layout.tsx
import type {Metadata} from "next";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import {Space_Grotesk} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
    title: "ctrl+alt+reset",
    description: "A neo-brutalist blog",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <body className={`antialiased ${spaceGrotesk.className} flex flex-col min-h-screen`}>
        <AppBar/>
        <div className="flex-grow">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}