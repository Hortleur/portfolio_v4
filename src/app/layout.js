import { Staatliches } from "next/font/google";
import "./globals.css";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Kevin Brun Portfolio",
  description: "Portfolio développeur web Kevin Brun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-screen w-screen overflow-hidden">
      <body className={staatliches.className}>
        {children}
      </body>
    </html>
  );
}
