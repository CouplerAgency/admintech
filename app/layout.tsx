import type { Metadata } from "next";
import { Fragment_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-primary",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AdminTech Norway – Norwegian Industry Association",
  description:
    "Homepage for AdminTech: Norway’s association for administrative technology. Uniting the industry, promoting innovation, and simplifying business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${interTight.variable} ${fragmentMono.variable}`}>
      <body>
        <div className="page">
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
