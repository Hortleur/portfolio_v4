import { Staatliches } from "next/font/google";
import "./globals.css";
import MobileNav from "@/app/components/MobileNav";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Kevin Brun Portfolio",
  description: "Portfolio développeur web Kevin Brun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="">
      <body className={`${staatliches.className} h-screen w-screen overflow-x-hidden overflow-y-scroll relative`}>
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
