import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Milanesa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased bg-primary h-screen flex flex-col`}
      >
        <div className="max-w-3xl mx-auto w-full md:px-0 px-6">
          <Header className="mt-16" />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
