
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
  title: "Leading iOS App Development Company - BitsWits",
  description: "BitsWits is a leading iOS app development company offering cutting-edge iOS app development services to ambitious startups and SMEs across industries.",
  //===== OG Tags =====
  openGraph: {
    title: "Leading iOS App Development Company - BitsWits",
    description: "BitsWits is a leading iOS app development company offering cutting-edge iOS app development services to ambitious startups and SMEs across industries.",
    url: '/ios-app-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/ios-app-development-company' },

  // Other
  other: {
    "DC.title": " Leading iOS App Development Company - BitsWits",
    "geo.region": "US",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487, -95.4618603",
    //==========
    "DC.title": " Leading iOS App Development Company - BitsWits",
    "geo.region": "US-TX",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487, -95.4618603",
    //==========
    "DC.title": " Leading iOS App Development Company - BitsWits",
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