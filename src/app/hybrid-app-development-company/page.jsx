import {
  BannerData, CuttingedgeContent, CuttingedgeList,
  AppIdeaContent, caseStudiesList,
  caseStudiesContent, ProcessContent,
  WhyChooseContent, WhyChooseList1,
  WhyChooseList2, ProcessTabs, TechnologiesContent,
  TechnologiesIcons, TestimonialContent,
  TestimonialSLIDES, RisksContent,
  OffersContent, OffersTabs, FuelingContent, FuelingList,
  CtaEstimatedContent, TechStackTabs,
  TechStackContent, IndustriesContent,
  IndustriesList, IdeaCtaContent,
  FaqsContent, FaqsList, BlogsContent,
  BlogsList
} from "@/src/app/hybrid-app-development-company/data/data";

import Banner from "@/src/app/services/banner";
import Achieved from "@/src/app/services/achieved";
import Cuttingedge from "@/src/app/services/cuttingedge";
import CaseStudySection from "@/src/app/services/casestudy";
import AppIdea from "@/src/app/services/appidea";
import WhyChoose from "@/src/app/services/whychoose";
import Process from "@/src/app/services/process";
import Technologies from "@/src/app/services/technologies";
import Testimonial from "@/src/app/services/testimonial";
import Risks from "@/src/app/services/risks";
import Offers from "@/src/app/services/offers";
import Fueling from "@/src/app/services/fueling";
import CtaEstimated from "@/src/app/services/cat";
import TechStack from "@/src/app/services/techstack";
import Industries from "@/src/app/services/industries";
import IdeaCta from "@/src/app/services/ideacta";
import Faqs from "@/src/app/services/faqs";
import Blogs from "@/src/app/services/blogs";
import Script from "next/script";

export default function Page() {

  return (
    <>
      <Banner data={BannerData} />
      <Achieved />
      <Cuttingedge data={CuttingedgeContent} list={CuttingedgeList} />
      <CaseStudySection data={caseStudiesContent} caseStudies={caseStudiesList} />
      <AppIdea data={AppIdeaContent} />
      <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Risks data={RisksContent} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Fueling data={FuelingContent} list={FuelingList} />
      <CtaEstimated data={CtaEstimatedContent} />
      <TechStack data={TechStackContent} tabs={TechStackTabs} />
      <Industries data={IndustriesContent} list={IndustriesList} />
      <IdeaCta data={IdeaCtaContent} />
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
                "name": "Hybrid App Development Company",
                "item": "https://www.bitswits.co/hybrid-app-development-company"  
              }]
            }
        `}
      </Script>
      <Script id="websiteSchema" type="application/ld+json">
        {`
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": " Hybrid App Development Company - BitsWits ",
              "url": " https://www.bitswits.co/hybrid-app-development-company ",
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
            "name": " Hybrid App Development Company - BitsWits ",
            "alternateName": "BitsWits",
            "url": " https://www.bitswits.co/hybrid-app-development-company ",
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
              "name": " Hybrid App Development Company - BitsWits",
              "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75 ",
              "@id": "",
              "url": "https://www.bitswits.co/hybrid-app-development-company",
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
              "name": " Hybrid App Development Company - BitsWits ",
              "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
              "description": " Partner with a leading hybrid app development company like BitsWits to streamline operations for startups and SMEs with cost-effective mobile solutions! ",
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

