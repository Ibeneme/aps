"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Heart,
} from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical evaluation take?",
      answer:
        "Most evaluations are completed in 1–3 sessions depending on the type and complexity. We strive to be efficient while maintaining thoroughness and care.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We are currently out-of-network with insurance providers. We provide superbills that you can submit for potential reimbursement. Many patients find that their insurance covers a portion of psychological evaluations.",
    },
    {
      question:
        "What is the difference between neuropsychological and psychoeducational testing?",
      answer:
        "Neuropsychological testing evaluates brain function, memory, attention, and processing speed. Psychoeducational testing focuses on learning abilities, academic skills, and identifying learning disabilities or giftedness.",
    },
    {
      question: "How soon can I get an appointment?",
      answer:
        "We typically offer appointments within 1–3 weeks. Pre-surgical and high-priority evaluations can often be scheduled sooner. Contact us to discuss your timeline.",
    },
    {
      question: "Do you offer telehealth evaluations?",
      answer:
        "Yes. Many of our assessments (including ADHD, autism screening, and pre-surgical evaluations) can be conducted via secure telehealth. In-person is required for certain comprehensive testing.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring any previous evaluations, school records, medical history, and a list of current medications. For children, we recommend bringing relevant report cards or teacher feedback.",
    },
    {
      question:
        "Are your reports accepted by schools, surgeons, and employers?",
      answer:
        "Yes. Our reports are comprehensive, professionally written, and widely accepted by schools (for IEPs/504 plans), surgical teams, and employers.",
    },
    {
      question: "Do you work with both children and adults?",
      answer:
        "Yes. We provide services across the lifespan — from young children through adolescents to adults and seniors.",
    },
  ];

  const scrollTriggerConfig = { once: true, margin: "-100px" };

  // FAQ Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#FCFAF7] text-[#112421] antialiased overflow-hidden">
      {/* Hero */}
      <div className="relative min-h-[85vh] flex items-center bg-[#012321] text-white pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(103,232,214,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#067F76]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#67E8D6] text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Got questions? <br />
              <span className="text-[#67E8D6]">We have answers.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              Clear, honest answers about our psychological and
              neuropsychological services in Dallas and Houston.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-xs font-bold tracking-widest text-[#067F76] uppercase mb-3">
            COMMON QUESTIONS
          </h2>
          <p className="text-4xl font-bold tracking-tight text-[#023B37]">
            Everything you need to know
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollTriggerConfig}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors group"
              >
                <span className="font-semibold text-lg pr-8 text-[#023B37]">
                  {faq.question}
                </span>
                <div
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-[#067F76]" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white border-t border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: ShieldCheck, label: "Licensed Psychologists" },
            { icon: Clock, label: "Fast Scheduling" },
            { icon: Users, label: "All Ages Welcome" },
            { icon: Heart, label: "Compassionate Care" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#067F76]/5 rounded-2xl flex items-center justify-center text-[#067F76]">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="font-medium text-[#023B37]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={scrollTriggerConfig}
          className="bg-gradient-to-br from-[#012321] to-[#023B37] text-white rounded-[2.5rem] p-12 sm:p-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-md mx-auto">
            Our team is happy to speak with you personally and provide the
            clarity you need.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#67E8D6] hover:bg-[#52d1bf] text-[#012321] font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-0.5"
          >
            Contact Us Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
