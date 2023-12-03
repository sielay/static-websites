import "./globals.css";
import "ui/styles.css"
import type { Metadata } from "next";
import {  Questrial } from "next/font/google";

const questrial = Questrial({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Becoming Developer",
  description:
    "Becoming Developer :: Should You Become a Software Developer? — a question that warrants careful consideration. Have you explored alternative professions within IT? Do you know where to begin and the requisites for the job? Understanding the pros and cons is crucial in making an informed decision.",
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
