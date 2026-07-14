// app/page.tsx
import { Metadata } from "next";
import HomePageView from "./home/page";

export const metadata: Metadata = {
  title:
    "Expert psychological and neuropsychological evaluations in Dallas and Houston, Texas. ADHD testing, Autism (ASD) assessments, psychoeducational, and more. Compassionate care for children, teens, and adults",
  description:
    "Expert psychological and neuropsychological evaluations in Dallas and Houston, Texas. ADHD testing, Autism (ASD) assessments, psychoeducational, and more. Compassionate care for children, teens, and adults.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: "ARIAD Psychological Services — Dallas & Houston",
    description:
      "Specialized ADHD, Autism, and Psychoeducational testing with experienced clinicians.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/favicon.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    "psychological testing dallas",
    "autism testing houston",
    "adhd evaluation texas",
    "psychoeducational assessment",
    "neuropsychological testing ",
  ],
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "ARIAD Psychological Services",
    url: "https://ariadpsychservices.com",
    logo: "https://ariadpsychservices.com/favicon.png", // Ensure this points to your absolute image URL
    image: "https://ariadpsychservices.com/favicon.png",
    telephone: "+14697339976",
    email: "info@ariadpsychservices.com",
    medicalSpecialty: ["Psychiatric", "ClinicalPsychology", "Neuropsychology"],
    priceRange: "$$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "4131 N Central Expy Suite 900",
        addressLocality: "Dallas",
        addressRegion: "TX",
        postalCode: "75204",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "5718 Westheimer Rd. Suite 1000",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77057",
        addressCountry: "US",
      },
    ],
    geo: [
      {
        "@type": "GeoCoordinates",
        latitude: "32.8105", // Approximate coordinates for Dallas office
        longitude: "-96.7766",
      },
      {
        "@type": "GeoCoordinates",
        latitude: "29.7375", // Approximate coordinates for Houston office
        longitude: "-95.4800",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: ["Dallas", "Houston", "Texas"],
    sameAs: [
      "https://www.facebook.com/share/17uZ6LCD9b/?mibextid=wwXIfr",
      "https://www.instagram.com/ariadpsych",
      "https://www.linkedin.com/company/ariad-psycholgical-services-pllc/",
    ],
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=ARIAD+Psychological+Services+Dallas+Houston",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageView />
    </>
  );
}
