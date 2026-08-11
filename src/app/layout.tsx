import type { Metadata } from "next";
import localFont from "next/font/local";
import ScrollToTop from "@/components/myui/ScrollToTop";
import Footer from "@/components/myui/Footer";
import TypingSpeedWidget from "@/components/myui/TypingSpeedWidget";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Mahad Munir",
    template: "Mahad Munir | %s"
  },
  description: "Mahad Munir Portfolio Website!",
  icons:{
    icon: "./favicon.ico"

  },
  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex-1">
          {children}
        </div>
        <ScrollToTop />
        <TypingSpeedWidget />
        <Footer />
      </body>
    </html>
  );
}
