"use client"
import { useState } from "react";
import Script from "next/script";
//=======
import Banner from "@/src/app/services1/banner";
import Achieved from "@/src/app/services1/achieved";
import Cuttingedge from "@/src/app/services1/cuttingedge";
import AppIdea from "@/src/app/services1/appidea";
import WhyChoose from "@/src/app/services1/whychoose";
import Technologies from "@/src/app/services1/technologies";
import Risks from "@/src/app/services1/risks";
import Process from "@/src/app/services1/process";
import Testimonial from "@/src/app/services1/testimonial";
import Offers from "@/src/app/services1/offers";
import Fueling from "@/src/app/services1/fueling";
import CtaEstimated from "@/src/app/services1/cat";
import TechStack from "@/src/app/services1/techstack";
import Industries from "@/src/app/services1/industries";
import IdeaCta from "@/src/app/services1/ideacta";
import Faqs from "@/src/app/services1/faqs";
import Blogs from "@/src/app/services1/blogs";
import Location from "@/src/app/services1/location";
import CaseStudySection from "@/src/app/services1/casestudy";
import PopUp from "../services1/popup";
// Location Images
import Dubai from "media/locations/Dubai.webp"
import Chicago from "media/locations/Chicago.webp"
import Houston from "media/locations/Houston.webp"
import LosAngeles from "media/locations/LosAngeles.webp"
import Miami from "media/locations/Miami.webp"
import NewYork from "media/locations/NewYork.webp"
import SanFrancisco from "media/locations/SanFrancisco.webp"
import Toronto from "media/locations/Toronto.webp"
import Dallas from "media/locations/Dallas.webp"
import Qatar from "media/locations/Qatar.webp"
import Bahrain from "media/locations/Bahrain.webp"
import Pierre from "media/locations/Pierre.webp"
import Sharjah from "media/locations/Sharjah.webp"
// Awards
import IMG01 from "media/awards/1.webp"
import IMG02 from "media/awards/2.webp"
import IMG03 from "media/awards/3.webp"
import IMG04 from "media/awards/4.webp"
import IMG05 from "media/awards/5.webp"
import IMG06 from "media/awards/6.webp"
import IMG07 from "media/awards/7.webp"


const OPTIONS = { align: 'start', loop: "true" }

const LOC = [
  {
    state: "Houston",
    add: "2800 Post Oak Blvd STE 4100, Houston, TX 77056, United States",
    phone: "+1 833 500 6007",
    email: "info@bitswits.co",
    img: Houston.src,
    off: "Head Office"
  },
  {
    state: "Chicago",
    add: "141 W Jackson Blvd STE 300 A, Chicago, IL 60604, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: Chicago.src,
    off: "Head Office"
  },
  {
    state: "Dubai",
    add: "Offaaaaaa 1402, JBC 3 Cluster Y, Jumeirah Lake Towers Dubai UAE",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Dubai.src,
    off: "Head Office"
  },
  {
    state: "Los Angeles",
    add: "1425 Flower St, Los Angeles, CA 90015, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: LosAngeles.src,
    off: "Head Office"
  },
  {
    state: "Miami",
    add: "601 Brickell Key Dr #700, Miami, FL 33131, United States",
    phone: "+1 302 216 8231",
    email: "info@bitswits.co",
    img: Miami.src,
    off: "Head Office"
  },
  {
    state: "New York",
    add: "26 Broadway Suite 934, New York, NY 10004, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: NewYork.src,
    off: "Head Office"
  },
  {
    state: "San Francisco",
    add: "488 Folsom St, San Francisco, CA 94105, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: SanFrancisco.src,
    off: "Head Office"
  },
  {
    state: "Toronto",
    add: "512 Wellington St W, Toronto, ON M5V 1E3, Canada",
    phone: "+1 302 216 8231",
    email: "info@bitswits.co",
    img: Toronto.src,
    off: "Head Office"
  },
  {
    state: "Dallas",
    add: "1341 W Mockingbird Ln, Dallas, TX 75247, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: Dallas.src,
    off: "Head Office"
  },
  {
    state: "Qatar",
    add: "51 Al Miqdad St, Doha, Qatar",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Qatar.src,
    off: "Head Office"
  },
  {
    state: "Bahrain",
    add: "2139 Hoora Ave, Manama 973, Bahrain",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Bahrain.src,
    off: "Head Office"
  },
  {
    state: "Pierre",
    add: "124 W Dakota Ave, Pierre, SD 57501, United States",
    phone: "+1 312 379 5987",
    email: "info@bitswits.co",
    img: Pierre.src,
    off: "Head Office"
  },
  {
    state: "Sharjah",
    add: "office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Sharjah.src,
    off: "Head Office"
  },
]

const Awards = [
  {
    title: "Horizon Interactive Gold Award",
    year: "2024",
    img: IMG01.src
  }, {
    title: "Top Rated App Development Companies in US",
    year: "2024",
    img: IMG02.src
  },
  {
    title: "Top App Performers Award",
    year: "2023",
    img: IMG05.src
  },
  {
    title: "Top Mobile App Development Company",
    year: "2023",
    img: IMG06.src
  },
  {
    title: "Dot COMM Platinum Award",
    year: "2023",
    img: IMG07.src
  },
  {
    title: "Clutch Global Company Award",
    year: "2022",
    img: IMG03.src
  },
  {
    title: "High User Satisfaction Award",
    year: "2022",
    img: IMG04.src
  }

]


export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Banner setModalShow={setModalShow} />
      <Achieved slides={Awards} options={OPTIONS} />
      <Cuttingedge setModalShow={setModalShow} />
      <CaseStudySection setModalShow={setModalShow} />
      <AppIdea />
      <WhyChoose setModalShow={setModalShow} />
      <Process setModalShow={setModalShow} />
      <Technologies setModalShow={setModalShow} />
      <Testimonial />
      <Risks setModalShow={setModalShow} />
      <Offers setModalShow={setModalShow} />
      <Fueling setModalShow={setModalShow} />
      <CtaEstimated setModalShow={setModalShow} />
      <TechStack />
      <Industries setModalShow={setModalShow} />
      <IdeaCta />
      <Faqs />
      {/* <Blogs /> */}
      <Location slides={LOC} options={OPTIONS} />
      <PopUp show={modalShow} onHide={() => setModalShow(false)} />
      {/* ===========Schemas========== */}
      <Script type="application/ld+json">
        {
          `
          {
          "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.bitswits.co/"  
              },{
                      "@type": "ListItem",
                    "position": 2,
                    "name": "Mobile Application Development Services",
                    "item": "https://www.bitswits.co/mobile-application-development-services"  
              }]
          }`}
      </Script>
      <Script type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": " Top Mobile App Development Services | BitsWits ",
          "url": " https://www.bitswits.co/mobile-application-development-services",
          "potentialAction": {
            "@type": "SearchAction",
          "target": "{search_term_string}",
          "query-input": "required name=search_term_string"
          }
        }`}
      </Script>
      <Script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": " Top Mobile App Development Services | BitsWits ",
            "alternateName": "BitsWits",
            "url": " https://www.bitswits.co/mobile-application-development-services ",
            "logo": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 833 500-6007",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ]
          }
        `}
      </Script>
      <Script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": " Top Mobile App Development Services | BitsWits ",
            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75 ",
            "@id": "",
            "url": "https://www.bitswits.co/mobile-application-development-services ",
            "telephone": "833 500-6007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2800 Post Oak Blvd STE 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": " 77056",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7372487,
              "longitude": -95.4618603
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ] 
          }
        `}
      </Script>
      <Script type="application/ld+json">
        {`{
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": " Top Mobile App Development Services | BitsWits ",
            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "description": " BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results! ",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "974"
            }
          }
        `}
      </Script>
    </>
  );
}
