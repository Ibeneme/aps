// app/contact/page.tsx
import { Metadata } from "next";
import ConsultationClient from "./ConsultationClient";

export const metadata: Metadata = {
  title: "Schedule a Psychological Consultation | ARIAD Psychological Services",
  description:
    "Request a confidential intake consultation for ADHD, Autism (ASD), psychoeducational, or neuropsychological assessments in Texas and Arizona.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
  openGraph: {
    title: "Schedule a Psychological Consultation | ARIAD Psychological",
    description:
      "Connect with our clinical coordination team to verify insurance and schedule testing implementations.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "https://ariadpsychservices.com/images/og-contact.jpg", // Update with real image
        width: 1200,
        height: 630,
        alt: "ARIAD Psychological Services - Schedule Consultation",
      },
    ],
  },
};

export default function ConsultationPage() {
  // Enhanced Structured Data with rich contact & organization details
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "ARIAD Psychological Services - Consultation & Intake",
    description:
      "Schedule confidential intake consultations for ADHD, Autism, neuropsychological, and psychoeducational testing across Texas and Arizona.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
    mainEntity: {
      "@type": "MedicalBusiness",
      "@id": "https://ariadpsychservices.com",
      name: "ARIAD Psychological Services",
      image: "https://ariadpsychservices.com/images/logo_a.png",
      url: "https://ariadpsychservices.com",
      telephone: "+1-469-733-9976",
      email: "info@ariadpsychservices.com", // ← Update if you have a real contact email
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
      areaServed: [
        {
          "@type": "State",
          name: "Texas",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-469-733-9976",
        contactType: "customer service",
        availableLanguage: ["English"],
        hoursAvailable: "Monday to Friday, 9:00 AM - 5:00 PM",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultationClient />
    </>
  );
}
