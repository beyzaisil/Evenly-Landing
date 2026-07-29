import type { Metadata } from "next";
import { Inter,Geist_Mono  } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {SiteHeader} from "@/components/layout/site_header"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evenly | Etkinlik Yönetim Platformu",
  description: "Etkinliklerinizi tek panelden yönetin. Katılımcı takibi, kontenjan yönetimi, yerleşim planı ve daha fazlası Evenly ile tek platformda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={cn("h-full", "antialiased", geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader/>
        {children}
        </body>
    </html>
  );
}
