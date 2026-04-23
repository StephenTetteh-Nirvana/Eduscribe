import type { Metadata } from "next";
import { Nunito, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

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
      className={`antialiased ${nunito.className}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
