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
  title: "Top Mobile App Development Services | BitsWits",
  description: "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
  //===== OG Tags =====
  openGraph: {
    title: "Top Mobile App Development Services | BitsWits",
    description: "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
    url: '/lp/mobile-application-development-services',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-application-development-services' },

  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
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
