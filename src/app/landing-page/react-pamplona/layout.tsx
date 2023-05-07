import "app/globals.css";
import { Inter } from "next/font/google";

import metadataTexts from "domain/texts/LandingPages/ReactPamplona/reactPamplona.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aitor Ibarra - React developer Pamplona",
  description: metadataTexts.experience,
  keywords: metadataTexts.skills,
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
