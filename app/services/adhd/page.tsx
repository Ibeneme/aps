// app/services/adhd/page.tsx
import { Metadata } from "next";
import AdhdAssessmentSection from "./ADHD";

export const metadata: Metadata = {
  title:
    "Professional ADHD Testing & Evaluation in Dallas | ARIAD Psychological",
  description:
    "Expert ADHD evaluations for children, teens, and adults. Get clear, compassionate diagnostic testing and actionable roadmaps for school and work support.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/adhd",
  },
  openGraph: {
    title: "ADHD Diagnostic Testing | ARIAD Psychological Services",
    description:
      "Understand how your brain works. Professional ADHD assessments with clear, actionable results for home, school, and work.",
    url: "https://ariadpsychservices.com/services/adhd",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-adhd.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - ADHD Testing",
      },
    ],
  },
};

export default function AdhdTestingPage() {
  // Enhanced Service Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "ADHD Diagnostic Testing & Evaluation",
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
      "Comprehensive neuropsychological and clinical evaluations for ADHD in children, teens, and adults. Includes detailed reporting and personalized recommendations for school, work, and daily life.",
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Houston" },
    ],
    serviceType: "ADHD Assessment",
    audience: {
      "@type": "Patient",
      description:
        "Children, adolescents, and adults seeking clarity on ADHD symptoms and management strategies.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ADHD Evaluation Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Comprehensive ADHD Evaluation",
          description: "Full clinical interview + standardized testing",
        },
        {
          "@type": "Offer",
          name: "ADHD Testing for Children & Teens",
          description: "School-relevant assessment and recommendations",
        },
        {
          "@type": "Offer",
          name: "Adult ADHD Assessment",
          description: "Workplace and executive function focused evaluation",
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

      <AdhdAssessmentSection />
    </>
  );
}
