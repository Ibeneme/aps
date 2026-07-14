// app/services/pre-surgical/page.tsx
import { Metadata } from "next";
import PreSurgicalClearancePage from "./PreSurgicalClearancePage";

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
        url: "https://ariadpsychservices.com/images/og-pre-surgical.jpg",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Pre-Surgical Psychological Clearance Evaluations",
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
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Houston" },
    ],
    description:
      "Comprehensive psychological evaluations for surgical readiness including bariatric surgery, spinal procedures, pain management implants, and other major surgeries.",
    serviceType: "Pre-Surgical Psychological Evaluation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pre-Surgical Clearance Services",
      itemListElement: [
        { "@type": "Offer", name: "Bariatric Surgery Evaluations" },
        {
          "@type": "Offer",
          name: "Spinal Cord Stimulator & Pain Pump Clearance",
        },
        { "@type": "Offer", name: "Spine Surgery Psychological Clearance" },
        { "@type": "Offer", name: "Other Major Surgery Evaluations" },
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
