import "./globals.css";
import "ui/styles.css"
import type { Metadata } from "next";
import {  Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Sielski",
  description:
    "Place for my future website",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  );
}
