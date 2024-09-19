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
  title: "Flutter App Development Company - BitsWits",
  description: "BitsWits is a leading Flutter app development company, creating high-quality, cross-platform apps that offer exceptional performance and user experience!",
  //===== OG Tags =====
  openGraph: {
    title: "Flutter App Development Company - BitsWits",
    description: "BitsWits is a leading Flutter app development company, creating high-quality, cross-platform apps that offer exceptional performance and user experience!",
    url: '/flutter-app-development',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/flutter-app-development' },
  // Other
  other: {
    "DC.title": "Flutter App Development Company - BitsWits",
    "geo.region": "US",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487, -95.4618603",
    //==========
    "DC.title": "Flutter App Development Company - BitsWits",
    "geo.region": "US-TX",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487, -95.4618603",
    //==========
    "DC.title": "Flutter App Development Company - BitsWits",
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