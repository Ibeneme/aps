// app/services/mmpi/page.tsx
import { Metadata } from "next";
import LearningClarityPage from "./MMPI";

export const metadata: Metadata = {
  title: "Professional MMPI Evaluations & Cognitive Support in Dallas | ARIAD",
  description:
    "Expert MMPI evaluations and cognitive clarity sessions for high-responsibility roles and security personnel in Dallas. Confidential, professional, and practical.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/mmpi",
  },
  openGraph: {
    title: "Professional MMPI & High-Responsibility Assessments | ARIAD",
    description:
      "Specialized support for professionals in demanding roles. Secure, confidential, and professional evaluations delivered in Dallas, TX.",
    url: "https://ariadpsychservices.com/services/mmpi",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-mmpi.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - MMPI Evaluation",
      },
    ],
  },
};

export default function MMPIPageWrapper() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Professional MMPI & Cognitive Assessment",
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
      "Specialized personality (MMPI) and cognitive assessments for professionals in high-responsibility roles, security personnel, and safety-sensitive positions. Delivered with strict confidentiality and clinical expertise.",
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Houston" },
    ],
    serviceType: "Psychological Evaluation",
    medicalSpecialty: "Clinical Psychology",
    audience: {
      "@type": "Audience",
      audienceType: "Professionals in High-Responsibility Roles",
      description:
        "Security personnel, law enforcement, pilots, healthcare professionals, and others in safety-sensitive or high-stakes positions.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Assessment Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "MMPI-2 / MMPI-3 Evaluation",
          description:
            "Comprehensive personality and psychopathology assessment",
        },
        {
          "@type": "Offer",
          name: "Fitness for Duty & High-Risk Role Evaluations",
          description: "Tailored assessments for demanding professional roles",
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
      <LearningClarityPage />
    </>
  );
}
