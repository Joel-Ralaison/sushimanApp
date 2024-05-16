import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "800", "900"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "800", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SushiMan",
  description: "A Next.js 14 based app, build to practice front-end concepts",
  keywords: "sushi delivery, React.Js, Next.Js, Tailwindcss, Typescript",
  icons: "./favicon.ico",
};

type RootLayoutProp = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <html lang="en">
      <body className={`${playFair.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
