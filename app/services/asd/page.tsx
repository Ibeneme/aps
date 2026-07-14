// app/services/autism/page.tsx
import { Metadata } from "next";
import AutismUnderstandingSection from "./ASD";

export const metadata: Metadata = {
  title: "Autism (ASD) Testing & Developmental Support in Dallas | ARIAD",
  description:
    "Compassionate, play-based autism (ASD) evaluations for children and teens in Dallas. Get clear answers and a customized developmental roadmap for school and home.",
  alternates: {
    canonical: "https://ariadpsychservices.com/services/autism",
  },
  openGraph: {
    title: "Autism (ASD) Assessments | ARIAD Psychological Services",
    description:
      "Expert diagnostic testing for Autism Spectrum Disorder. We focus on how your child experiences the world to provide actionable support strategies.",
    url: "https://ariadpsychservices.com/services/autism",
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-autism.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - Autism Testing",
      },
    ],
  },
};

export default function AutismTestingPage() {
  // Enhanced Structured Data for Medical Diagnostic Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Autism Spectrum Disorder (ASD) Evaluation",
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
      "Compassionate, play-based developmental and diagnostic evaluations for Autism Spectrum Disorder (ASD) in children and adolescents. Includes clear results and personalized support strategies for home and school.",
    areaServed: [
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Houston" },
    ],
    serviceType: "Autism Assessment",
    medicalSpecialty: "Neuropsychology",
    audience: {
      "@type": "Patient",
      description:
        "Families and individuals seeking autism spectrum disorder diagnosis and developmental planning.",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Autism Evaluation Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Comprehensive ASD Evaluation",
          description: "Play-based + standardized diagnostic assessment",
        },
        {
          "@type": "Offer",
          name: "Developmental Roadmap & Recommendations",
          description: "Tailored support strategies for home and school",
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

      <AutismUnderstandingSection />
    </>
  );
}
