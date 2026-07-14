// app/services/assessments/page.tsx
import { Metadata } from "next";
import LearningClarityPage from "./Assessments";

export const metadata: Metadata = {
  title: "Assessments & Cognitive Insights in Dallas | ARIAD",
  description:
    "Gain insight into how you or your child thinks, focuses, and learns. Professional learning support sessions offering clear, actionable roadmaps for school and life.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/assessments",
  },
  openGraph: {
    title: "Assessments Sessions | ARIAD Psychological Services",
    description:
      "Understand your unique thinking style. We provide the clarity and practical strategies needed to thrive in Dallas's fast-paced environment.",
    url: "https://ariadpsychservices.com/services/assessments",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-assessments.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - Cognitive & Learning Assessments",
      },
    ],
  },
};

export default function LearningClarityPageWrapper() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cognitive & Learning Assessments",
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
      "Professional assessments and supportive sessions designed to explore cognitive styles, attention patterns, learning preferences, and provide clear, actionable roadmaps for school and daily life.",
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Houston" },
    ],
    serviceType: [
      "Cognitive Assessment",
      "Learning Evaluation",
      "Psychoeducational Support",
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Student/Professional",
      description:
        "Children, teens, and adults seeking clarity on learning strengths and challenges.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cognitive & Learning Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Comprehensive Cognitive & Learning Assessment",
          description:
            "In-depth evaluation of thinking, attention, and learning profiles",
        },
        {
          "@type": "Offer",
          name: "Personalized Learning Roadmap",
          description:
            "Actionable strategies tailored to school and life success",
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
