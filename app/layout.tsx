import type { Metadata } from "next";
import { Nunito, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Eduscribe",
  description: "Empowering learners,writers and researchers to connect on the same platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", nunito.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
