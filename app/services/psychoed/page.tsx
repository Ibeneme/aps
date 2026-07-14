// app/services/psychoed/page.tsx
import { Metadata } from "next";
import LearningSupportPage from "./PSYCHOED";

export const metadata: Metadata = {
  title: "Learning Support & Academic Assessments in Dallas | ARIAD",
  description:
    "Expert learning support sessions for children and adults. Understand your learning style, overcome obstacles, and get practical strategies for school and work success.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/psychoed",
  },
  openGraph: {
    title: "Learning Support Services | ARIAD Psychological Services",
    description:
      "Clarify your learning journey with personalized assessments. Expert strategies for reading, writing, focus, and academic achievement in Dallas.",
    url: "https://ariadpsychservices.com/services/psychoed",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-psychoed.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - Psychoeducational & Learning Support",
      },
    ],
  },
};

export default function LearningSupportPageWrapper() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Psychoeducational & Learning Support",
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
      "Customized psychoeducational support sessions focusing on learning styles, reading, writing, executive function, attention, and academic growth strategies for children and adults.",
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Houston" },
    ],
    serviceType: "Psychoeducational Assessment",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Student/Professional",
      description:
        "Children, teens, adults, and families seeking academic and learning support.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Learning Support Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Psychoeducational Assessment",
          description:
            "Comprehensive evaluation of learning strengths and challenges",
        },
        {
          "@type": "Offer",
          name: "Individualized Learning Strategies",
          description:
            "Tailored support for reading, writing, focus, and executive function",
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
      <LearningSupportPage />
    </>
  );
}
