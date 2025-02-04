import Blogs from "@/src/app/services/blogs";
import Faqs from "@/src/app/services/faqs";
import Fueling from "@/src/app/services/fueling";
import IdeaCta from "@/src/app/services/ideacta";

import Offers from "@/src/app/services/offers";
import Process from "@/src/app/services/process";
import TechStack from "@/src/app/services/techstack";
import Testimonial from "@/src/app/services/testimonial";
import WhyChoose from "@/src/app/services/whychoose";
import Activity from "@/src/app/mobile-game-development-company/activity";
import Banner from "@/src/app/mobile-game-development-company/banner";
import ContentSec from "@/src/app/mobile-game-development-company/contentsec";
import GameCta from "@/src/app/mobile-game-development-company/gamecta";
import ContentSecLG from "@/src/app/mobile-game-development-company/largecontent";
import Projectdiscuss from "@/src/app/mobile-game-development-company/projectdiscuss";
import Services from "@/src/app/mobile-game-development-company/services";

import {
    BannerData, ProjectdiscussContent, ServicesContent,
    ServicesList, GameCtaContent, ContentSecContent,
    ContentSecLGContent, ProcessContent,
    WhyChooseContent, WhyChooseList1,
    WhyChooseList2, ProcessTabs, TestimonialContent,
    TestimonialSLIDES, OffersContent,
    OffersTabs, FuelingContent, FuelingList,
    TechStackTabs, TechStackContent, IdeaCtaContent,
    FaqsContent, FaqsList, BlogsContent,
    BlogsList
} from "@/src/app/mobile-game-development-company/data/data";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <Banner data={BannerData} />
            <Activity />
            <Projectdiscuss data={ProjectdiscussContent} />
            <Services data={ServicesContent} list={ServicesList} />
            <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
            <GameCta data={GameCtaContent} />
            <ContentSec data={ContentSecContent} />
            <Process data={ProcessContent} tabs={ProcessTabs} />
            <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
            <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
            <ContentSecLG data={ContentSecLGContent} />
            <IdeaCta data={IdeaCtaContent} />
            <TechStack data={TechStackContent} tabs={TechStackTabs} />
            <Fueling data={FuelingContent} list={FuelingList} />
            <Faqs data={FaqsContent} list={FaqsList} />
            <Blogs data={BlogsContent} list={BlogsList} />


            <Script id="breadcrumbSchema" type="application/ld+json">
                {`
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
                                "name": "Mobile Game App Development Company",
                                "item": "https://www.bitswits.co/mobile-game-development-company"  
                            }]
                        }
                `}
            </Script>
            <Script id="websiteSchema" type="application/ld+json">
                {`
                        {
                            "@context": "https://schema.org/",
                            "@type": "WebSite",
                            "name": " Mobile Game App Development Company - BitsWits ",
                            "url": " https://www.bitswits.co/mobile-game-development-company ",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "{search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        }
                `}
            </Script>
            <Script id="organizationSchema" type="application/ld+json">
                {`
                    {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": " Mobile Game App Development Company - BitsWits ",
                            "alternateName": "BitsWits",
                            "url": " https://www.bitswits.co/mobile-game-development-company ",
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
            <Script id="localbusinessSchema" type="application/ld+json">
                {`
                        {
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                "name": " Mobile Game App Development Company - BitsWits",
                                "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75 ",
                                "@id": "",
                                "url": "https://www.bitswits.co/mobile-game-development-company",
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
            <Script id="productSchema" type="application/ld+json">
                {`
                        {
                            "@context": "https://schema.org/", 
                            "@type": "Product", 
                            "name": " Mobile Game App Development Company - BitsWits ",
                            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
                            "description": " BitsWits is a leading mobile game app development company that uses the latest technology to help users create top-ranking game apps across 30+ genres. ",
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
