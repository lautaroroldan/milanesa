import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://milanesa.app'),
  title: {
    default: "Milanesa - Música y Partituras",
    template: "%s | Milanesa"
  },
  description: "Milanesa: Un sitio web dedicado a compartir música y partituras. Descubre canciones, aprende teoría musical y explora nuestro catálogo de partituras interactivas.",
  keywords: ["música", "partituras", "teoría musical", "canciones", "milanesa", "música online", "aprender música"],
  authors: [{ name: "Milanesa" }],
  creator: "Milanesa",
  publisher: "Milanesa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Milanesa",
    title: "Milanesa - Música y Partituras",
    description: "Un sitio web dedicado a compartir música y partituras. Descubre canciones, aprende teoría musical y explora nuestro catálogo de partituras interactivas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milanesa - Música y Partituras",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milanesa - Música y Partituras",
    description: "Un sitio web dedicado a compartir música y partituras. Descubre canciones, aprende teoría musical y explora nuestro catálogo de partituras interactivas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased bg-background min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground`}
      >
        <div className="max-w-3xl mx-auto w-full md:px-0 px-6">
          <Header className="mt-16" />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
