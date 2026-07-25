import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

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
import { ThemeProvider } from "@/components/global/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} antialiased overflow-x-hidden`} suppressHydrationWarning>
      <head>
        <style>{`
          .goog-te-banner-frame { display: none !important; }
          .goog-te-banner-frame.skiptranslate { display: none !important; }
          .goog-te-combo { display: none !important; }
          .goog-logo-link { display: none !important; }
          .goog-te-gadget { color: transparent !important; font-size: 0 !important; }
          .goog-te-gadget img { display: none !important; }
          body { top: 0 !important; position: static !important; }
          html { height: auto !important; }
          /* New Google Translate widget classes */
          .VIpgJd-ZVi9od-aZ2wEe-wOHMyf { display: none !important; }
          .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; }
          #goog-gt-tt { display: none !important; }
        `}</style>
      </head>
      <body className="bg-offwhite text-ink font-sans min-h-screen flex flex-col overflow-x-hidden">
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: false,
                includedLanguages: 'en,hi,mr,gu,bn,ta,te'
              }, 'google_translate_element');
            }
          `}
        </Script>
        <div style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
          <div id="google_translate_element"></div>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
          <ChatBubble />
        </ThemeProvider>
      </body>
    </html>
  );
}
