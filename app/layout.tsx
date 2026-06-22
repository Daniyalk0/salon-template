import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LuxuryNavbar from "./components/Navbar";
import LuxuryFooter from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumière",
  description: "A destination for modern beauty, offering premium hair, skin, and grooming services in a sophisticated and welcoming environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="en" className="bg-[#0A0A0A]">
      <body className="bg-[#0A0A0A] text-stone-200 antialiased flex flex-col min-h-screen"> 
        {/* 2. Add bg to body, and make it a flex column that spans the screen */}
        
        <LuxuryNavbar />
        
        {/* 3. Add flex-grow to main so it pushes the footer to the bottom! */}
        <main className="flex-grow">
          {children}
        </main>
        
        <LuxuryFooter />
      </body>
    </html>
  );
}
