// app/services/additional/page.tsx
import { Metadata } from "next";
import AdditionalSupportPage from "./Additional";

export const metadata: Metadata = {
  title: "Parent Guidance, School Advocacy & Practical Support | ARIAD",
  description:
    "Expert school advocacy, parent coaching, and documentation support in Dallas. We turn insights into real-world progress for your family and child's success.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/additional",
  },
  openGraph: {
    title: "Advocacy & Family Support Services | ARIAD",
    description:
      "Bridge the gap between understanding and action. We provide school advocacy, parent coaching, and documentation support for families in Dallas.",
    url: "https://ariadpsychservices.com/services/additional",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-additional-support.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - Parent Guidance & School Advocacy",
      },
    ],
  },
};

export default function AdditionalSupportPageWrapper() {
  // Enhanced Structured Data for Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Educational Advocacy & Family Support",
    provider: {
      "@type": "MedicalBusiness",
      name: "ARIAD Psychological Services",
      url: "https://ariadpsychservices.com",
      telephone: "+1-469-733-9976",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4131 N Central Expy, Suite 900",
        addressLocality: "Dallas",
        addressRegion: "TX",
        postalCode: "75204",
        addressCountry: "US",
      },
    },
    description:
      "Practical support services including school advocacy, parent guidance, and assistance with academic/workplace documentation to help families turn assessment insights into real-world success.",
    areaServed: [
      {
        "@type": "City",
        name: "Dallas",
      },
      {
        "@type": "City",
        name: "Houston",
      },
    ],
    serviceType: [
      "School Advocacy",
      "Parent Coaching",
      "Educational Documentation Support",
      "IEP/504 Meeting Preparation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Family and Educational Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Parent & Family Guidance Sessions",
          description: "Personalized coaching for parents navigating neurodiverse parenting.",
        },
        {
          "@type": "Offer",
          name: "School Advocacy & Meeting Preparation",
          description: "Representation and preparation for school meetings, IEPs, and 504 plans.",
        },
        {
          "@type": "Offer",
          name: "Academic & Workplace Documentation Support",
          description: "Professional documentation and letters to support accommodations.",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdditionalSupportPage />
    </>
  );
}