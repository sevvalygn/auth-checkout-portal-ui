import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acme",
  description: "Stajyer projesi: Tailwind ve Next ile landing sayfası.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`dark ${libreBaskerville.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
