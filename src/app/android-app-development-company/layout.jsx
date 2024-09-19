
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
  title: "Leading Android App Development Company - BitsWits",
  description: "BitsWits is a premier Android app development company that makes user-friendly and premium android apps for all types of businesses.",
  //===== OG Tags =====
  openGraph: {
    title: "Leading Android App Development Company - BitsWits",
    description: "BitsWits is a premier Android app development company that makes user-friendly and premium android apps for all types of businesses.",
    url: '/android-app-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/android-app-development-company' },
  // Other
  other: {
    "DC.title": "Leading Android App Development Company - BitsWits",
    "geo.region": "US",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487, -95.4618603 ",
    //==========
    "DC.title": "Leading Android App Development Company - BitsWits",
    "geo.region": "US-TX",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487, -95.4618603",
    //==========
    "DC.title": "Leading Android App Development Company - BitsWits",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487; -95.4618603"
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
