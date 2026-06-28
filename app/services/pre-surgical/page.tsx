import { Metadata } from "next";
import PreSurgicalClearancePage from "./PreSurgicalClearancePage";

// 1. Service-Focused SEO Metadata
export const metadata: Metadata = {
  title: "Pre-Surgical Medical Clearance Evaluations in Dallas | ARIAD",
  description:
    "Expert pre-surgical psychological evaluations for bariatric surgery, spinal cord stimulators, spine surgery, and other major procedures. Licensed psychologists in Dallas providing thorough clearance assessments.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/pre-surgical",
  },
  openGraph: {
    title: "Pre-Surgical Medical & Psychological Clearance | ARIAD",
    description:
      "Comprehensive evaluations to determine surgical readiness and optimize outcomes for bariatric, spinal, and other complex procedures.",
    url: "https://ariadpsychservices.com/services/pre-surgical",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/og-pre-surgical.jpg", // Update with your actual image
        width: 1200,
        height: 630,
        alt: "Pre-Surgical Medical Clearance Evaluation",
      },
    ],
  },
  keywords: [
    "pre-surgical evaluation",
    "bariatric surgery evaluation",
    "spinal cord stimulator clearance",
    "spine surgery psychological evaluation",
    "pre-operative psychological assessment",
    "Dallas psychological evaluation",
    "surgical clearance psychologist",
    "pain pump evaluation",
  ],
};

export default function PreSurgicalClearancePageWrapper() {
  // 2. Structured Data for Medical Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Pre-Surgical Medical Clearance Evaluations",
    provider: {
      "@type": "MedicalBusiness",
      name: "ARIAD Psychological Services",
      url: "https://ariadpsychservices.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dallas",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Dallas",
    },
    description:
      "Comprehensive psychological evaluations for surgical readiness including bariatric surgery, spinal procedures, pain management implants, and other major surgeries. Conducted by licensed psychologists.",
    serviceType: "Pre-Surgical Psychological Evaluation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pre-Surgical Clearance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bariatric Surgery Evaluations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spinal Cord Stimulator & Pain Pump Clearance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spine Surgery Psychological Clearance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Other Major Surgery Evaluations",
          },
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

      <PreSurgicalClearancePage />
    </>
  );
}
