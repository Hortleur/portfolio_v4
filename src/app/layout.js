import { Staatliches, Exo_2 } from "next/font/google";
import "./globals.css";
import MobileNav from "@/app/components/MobileNav";
import Script from "next/script";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400", display: 'swap', variable: '--font-staatliches' })
const exo = Exo_2({subsets: ["latin"], display: 'swap', variable: '--font-exo'})

export const metadata = {
  title: "Kevin Brun Portfolio",
  description: "Portfolio de Kevin Brun: développeur web passionné par la tech, l’apprentissage continu, la cybersécurité et la diversité des métiers du numérique.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="">
      <body className={`${staatliches.variable} ${exo.variable} h-screen w-screen overflow-x-hidden overflow-y-scroll relative`}>
        {children}
        <MobileNav />
        <Script
            src="http://umami.server.kevinb.run/umami.js"
            strategy="afterInteractive" // Charge après le premier rendu interactif
            async
            defer
            data-website-id="dd41e451-db31-4a11-80b4-8624fc92a26e"
        />
      </body>
    </html>
  );
}
