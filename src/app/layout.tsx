import "./globals.css";
import { Inter } from "next/font/google";

import text from "domain/texts/HomePage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: text.metadata.title,
  description: text.metadata.description,
  keywords: text.metadata.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
