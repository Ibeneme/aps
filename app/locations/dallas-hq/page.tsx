// app/locations/dallas/page.tsx
import { Metadata } from "next";
import DallasOfficeClient from "./DallasOfficeClient";

// 1. SEO Metadata for Dallas
export const metadata: Metadata = {
  title: "ADHD & Neuropsychological Testing Dallas TX | ARIAD Psychological",
  description:
    "Visit ARIAD Psychological Services in Dallas, Texas. Expert, confidential autism (ASD) testing, ADHD evaluations, and psychoeducational assessments.",
  alternates: {
    canonical: "https://ariadpsychservices.com/locations/dallas",
  },
  openGraph: {
    title: "Neuropsychological Evaluations in Dallas, TX | ARIAD Psychological",
    description:
      "Expert diagnostic testing for ADHD, Autism, and learning exceptionalities in Dallas.",
    url: "https://ariadpsychservices.com/locations/dallas",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-dallas.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services Dallas Office",
      },
    ],
  },
};

export default function DallasOfficePage() {
  // 2. Local Business Structured Data (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "ARIAD Psychological Services - Dallas",
    image: "https://ariadpsychservices.com/images/logo_a.png",
    "@id": "https://ariadpsychservices.com/locations/dallas",
    url: "https://ariadpsychservices.com/locations/dallas",
    telephone: "+1-469-733-9976",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4131 N Central Expy, Suite 900",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75204",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.8306,
      longitude: -96.786518,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    areaServed: {
      "@type": "City",
      name: "Dallas",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DallasOfficeClient />
    </>
  );
}