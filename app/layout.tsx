import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SushiMan",
  description: "A Next.js 14 based app, build to practice front-end concepts",
};

type RootLayoutProp = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProp) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
