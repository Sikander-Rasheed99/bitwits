import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Blockchain Game Development Company | BitsWits",
  description: "Partner with BitsWits, a leading blockchain game development company, to invest in top-tier blockchain games and acquire exceptional products!",
  //===== OG Tags =====
  openGraph: {
    title: "Blockchain Game Development Company | BitsWits",
    description: "Partner with BitsWits, a leading blockchain game development company, to invest in top-tier blockchain games and acquire exceptional products!",
    url: '/blockchain-game-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/blockchain-game-development-company' },
  // Other
  other: {
    "DC.title": "Blockchain Game Development Company | BitsWits",
    "geo.region": "US",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": " 29.7372487, -95.4618603",
    //==========
    "DC.title": "Blockchain Game Development Company | BitsWits",
    "geo.region": "US-TX",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": " 29.7372487, -95.4618603",
    //==========
    "DC.title": "Blockchain Game Development Company | BitsWits",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": " 29.7372487, -95.4618603"
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}