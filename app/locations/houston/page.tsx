// app/locations/houston/page.tsx
import { Metadata } from "next";
import HoustonOfficePage from "./Houston";

// 1. SEO Metadata for Houston
export const metadata: Metadata = {
  title: "Psychological & Neuropsychological Testing Houston TX | ARIAD",
  description:
    "ARIAD Psychological Services now serving Houston. Expert ADHD, Autism, Pre-Surgical, and Neuropsychological evaluations in the Greater Houston area.",
  alternates: {
    canonical: "https://ariadpsychservices.com/locations/houston",
  },
  openGraph: {
    title: "Neuropsychological Evaluations & Testing in Houston, TX | ARIAD",
    description:
      "Professional psychological assessments and pre-surgical evaluations now available in Houston.",
    url: "https://ariadpsychservices.com/locations/houston",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-houston.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services Houston Office",
      },
    ],
  },
};

export default function HoustonOfficePageWrapper() {
  // 2. Local Business Structured Data (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "ARIAD Psychological Services - Houston",
    image: "https://ariadpsychservices.com/images/logo_a.png",
    "@id": "https://ariadpsychservices.com/locations/houston",
    url: "https://ariadpsychservices.com/locations/houston",
    telephone: "+1-469-733-9976",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5718 Westheimer Rd. Suite 1000, Houston Texas 77057",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77057",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.7604,
      longitude: -95.3698,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    areaServed: {
      "@type": "City",
      name: "Houston",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HoustonOfficePage />
    </>
  );
}
