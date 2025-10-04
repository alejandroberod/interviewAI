import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntervAI",
  description: "Web powered by AI that helps to prepare an interview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${urbanist.className} antialiased`}
      >
        {children}
        <Toaster richColors/>
      </body>
    </html>
  );
}
