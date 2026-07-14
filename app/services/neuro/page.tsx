// app/services/neuro/page.tsx
import { Metadata } from "next";
import LearningClarityPage from "./Neuro";

export const metadata: Metadata = {
  title: "Learning Clarity & Cognitive Insights in Dallas | ARIAD",
  description:
    "Gain insight into your unique thinking and learning style. Personalized sessions to improve focus, memory, and daily balance for children and adults in Dallas.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/neuro",
  },
  openGraph: {
    title:
      "Learning Clarity & Cognitive Support | ARIAD Psychological Services",
    description:
      "Understand your brain's unique pattern. Clear, actionable insights into how you process information, stay focused, and achieve your goals.",
    url: "https://ariadpsychservices.com/services/neuro",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-neuro.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - Cognitive & Learning Clarity",
      },
    ],
  },
};

export default function LearningClarityPageWrapper() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Learning Clarity & Cognitive Insight Sessions",
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
      "Personalized exploration of cognitive styles, focus patterns, and learning preferences to help individuals thrive in school and professional life.",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Student/Professional/Parent",
      description:
        "Children, teens, adults, and families seeking cognitive and learning insights.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cognitive Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Focus & Attention Support",
        },
        {
          "@type": "Offer",
          name: "Memory & Cognitive Style Exploration",
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
