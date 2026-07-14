"use client";

import HomeView from "@/components/home/Hero";
import PhilosophicalThread from "@/components/home/PhilosophicalThread";
import ScheduleSection from "@/components/home/ScheduleSection";
import ServicesSection from "@/components/home/ServicesSection";
//import AnimatedTestimonialsSection from "@/components/home/Testimonial";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import SEO from "@/components/SEO";
import Script from "next/script";

export default function HomePageView() {
  // Schema.org Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "ARIAD Psychological Services",
    url: "https://ariadpsychservices.com",
    telephone: "+14697339976",
    email: "info@ariadpsychservices.com",
    medicalSpecialty: "Psychiatric",
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
    areaServed: ["Dallas", "Houston", "Texas"],
    sameAs: [
      "https://www.facebook.com/share/17uZ6LCD9b/?mibextid=wwXIfr",
      "https://www.instagram.com/ariadpsych",
      "https://www.linkedin.com/company/ariad-psycholgical-services-pllc/",
    ],
  };

  return (
    <>
      <SEO
        title="ARIAD Psychological Services, PLLC"
        description="Expert neuropsychological evaluations and holistic mental health care in Dallas. Bridging cognitive roots and emotional well-being with compassionate, comprehensive care."
        keywords="neuropsychological evaluation, psychological services, mental health Dallas, cognitive assessment, holistic therapy, child psychology, family therapy"
      />

      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="organization-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div>
        <HomeView /> {/* Hero + Intro combined */}
        <PhilosophicalThread />
        <ServicesSection />
        <WhyChooseUsSection />
        {/* <AnimatedTestimonialsSection /> */}
        <ScheduleSection />
      </div>
    </>
  );
}
