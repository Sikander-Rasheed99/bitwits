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
  title: "Cross-Platform App Development Services | BitsWits",
  description: "Expert cross-platform app development services for seamless, high-performing apps on iOS, Android, and web. Boost engagement with cost-effective solutions.",
  //===== OG Tags =====
  openGraph: {
    title: "Cross-Platform App Development Services | BitsWits",
    description: "Expert cross-platform app development services for seamless, high-performing apps on iOS, Android, and web. Boost engagement with cost-effective solutions.",
    url: '/cross-platform-app-development-services',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/cross-platform-app-development-services' },
  // Other
  other: {
    "DC.title": "Cross-Platform App Development Services | BitsWits",
    "geo.region": "US",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": " 29.7372487, -95.4618603",
    //==========
    "DC.title": "Cross-Platform App Development Services | BitsWits",
    "geo.region": "US-TX",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487, -95.4618603",
    //==========
    "DC.title": "Cross-Platform App Development Services | BitsWits",
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