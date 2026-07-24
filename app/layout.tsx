import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indianeers Media | Skilling India's Future",
  description: "Government of India-affiliated vocational skill development company active since 2012.",
};

import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { ChatBubble } from "@/components/global/chat-bubble";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} antialiased overflow-x-hidden`}>
      <body className="bg-offwhite text-ink font-sans min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <ChatBubble />
      </body>
    </html>
  );
}
