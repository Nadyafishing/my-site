import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nadyachernaya.ru"),

  title: {
    default: "Надя Черная",
    template: "%s | Надя Черная",
  },

  description:
    "Рыбалка на Черном море и горных реках Кавказа.",

  openGraph: {
    title: "Надя Черная",
    description:
      "Рыбалка на Черном море и горных реках Кавказа.",
    siteName: "Надя Черная",

    locale: "ru_RU",
    type: "website",

    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.variable} ${playfair.variable}`}><Navbar />{children}<Footer /></body>
    </html>
  );
}
