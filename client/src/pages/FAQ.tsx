import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { faqSchema } from "@/lib/seo";
import { useState } from "react";
import { useLocation } from "wouter";

export default function FAQ() {
  const [, setLocation] = useLocation();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "Product Selection",
      questions: [
        {
          q: "How do I choose between Gate, Globe, and Check valves?",
          a: "Gate valves are ideal for on-off isolation, Globe valves are best for throttling and flow regulation, and Check valves are used to prevent reverse flow. If you share your pressure, media, and line size, we can recommend the right type quickly.",
        },
        {
          q: "Which valve materials are available?",
          a: "We supply and manufacture valves in Cast Iron, Carbon Steel, Stainless Steel (SS304/SS316), Brass, Bronze, Ductile Iron, and PVC/CPVC, based on application compatibility.",
        },
        {
          q: "Do you support custom sizes and pressure classes?",
          a: "Yes. We handle custom specifications including size, pressure class, end connections, and material combinations for process-specific requirements.",
        },
      ],
    },
    {
      category: "Service and Maintenance",
      questions: [
        {
          q: "Do you provide valve servicing and repair?",
          a: "Yes. Our team performs inspection, diagnosis, repair, overhaul, and reconditioning for industrial valves to restore performance and reliability.",
        },
        {
          q: "Can you create preventive maintenance plans?",
          a: "Yes. We offer AMC-based preventive maintenance plans to reduce downtime, improve lifecycle performance, and minimize emergency failures.",
        },
        {
          q: "Do you support installation and commissioning?",
          a: "Yes. We provide on-site installation guidance, alignment checks, and commissioning support for safer and smoother system integration.",
        },
      ],
    },
    {
      category: "Orders and Support",
      questions: [
        {
          q: "How quickly can I get a quotation?",
          a: "For standard requirements, quotes are usually shared quickly after receiving technical details such as valve type, size, pressure class, quantity, and service conditions.",
        },
        {
          q: "Do you handle bulk and project orders?",
          a: "Yes. We support project-based and bulk procurement with planned supply schedules and documentation support.",
        },
        {
          q: "How can I reach your team quickly?",
          a: "Use the Contact page form with your requirement details, or reach us by phone/WhatsApp and email for fast response.",
        },
      ],
    },
  ];

  const faqJsonLd = faqSchema(
    faqCategories.flatMap((cat) => cat.questions.map((q) => ({ question: q.q, answer: q.a }))),
  );

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Industrial Valve FAQ | Selection, Service, Maintenance"
        description="Frequently asked questions about industrial valve selection, materials, servicing, maintenance, and quotation process at Subh Engineering Works."
        keywords="industrial valve FAQ, valve selection guide, valve maintenance questions, valve service India"
        canonicalUrl="https://subh-engineering-works.manus.space/faq"
        jsonLd={faqJsonLd}
      />
      <Navigation />

      <header className="relative min-h-[300px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Quick, practical answers to common industrial valve questions - from product selection to maintenance support.
          </p>
        </div>
      </header>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">{category.category}</h2>
              <div className="h-1 w-24 bg-brand-red mb-12"></div>

              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const globalIndex = catIdx * 100 + qIdx;
                  const isExpanded = expandedFAQ === globalIndex;

                  return (
                    <div key={qIdx} className="border-2 border-gray-200 hover:border-brand-red transition">
                      <button onClick={() => toggleFAQ(globalIndex)} className="w-full p-6 text-left flex justify-between items-start hover:bg-gray-50 transition">
                        <h3 className="font-black text-lg uppercase tracking-tight pr-4">{faq.q}</h3>
                        <span className={`text-brand-red text-2xl font-black transition transform ${isExpanded ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6 border-t-2 border-gray-200 bg-gray-50">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Need a Specific Technical Recommendation?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Share your process details and our team will suggest the right valve type, material, and service plan.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => setLocation("/contact")} className="bg-brand-red text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition">
              Contact Us
            </button>
            <button onClick={() => window.location.href = "mailto:info@subhengineeringworks.com"} className="border-2 border-brand-red text-brand-red px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition">
              Email Support
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
