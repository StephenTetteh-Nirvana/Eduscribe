import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

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
      className={`${nunito.className} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
