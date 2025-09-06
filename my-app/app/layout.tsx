import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "500",
})

export const metadata: Metadata = {
  title: "Construction Landing Page",
  description: "A Construction company landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
