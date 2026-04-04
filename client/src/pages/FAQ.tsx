import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
/**
 * FAQ Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Frequently asked questions
 * - Product selection help
 * - Technical information
 */

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
          a: "Gate valves are best for isolation (on-off control), Globe valves for flow regulation and throttling, and Check valves for backflow prevention. Consider your application: isolation, flow control, or protection. Our comparison tool can help you decide.",
        },
        {
          q: "What pressure ratings are available?",
          a: "We offer pressure classes from 150 PSI (10 Bar) to 2500 PSI (170 Bar). Standard ratings include 150#, 300#, 600#, 900#, 1500#, and 2500#. Custom pressure ratings available upon request.",
        },
        {
          q: "What materials do you use for valves?",
          a: "We manufacture valves in Carbon Steel (CS), Stainless Steel (SS 304/316), Duplex Stainless Steel, Ductile Iron, and Brass. Material selection depends on your fluid type, temperature, and corrosion requirements.",
        },
        {
          q: "Can you supply valves in non-standard sizes?",
          a: "Yes, we specialize in custom valve designs. We can manufacture valves from 1/2 inch to 60 inch diameter. Contact our engineering team with your specifications.",
        },
        {
          q: "What is the maximum operating temperature?",
          a: "Standard valves operate up to 400°C. For higher temperatures or cryogenic applications, we offer specialized materials and designs. Consult our technical team for extreme temperature requirements.",
        },
      ],
    },
    {
      category: "Technical & Specifications",
      questions: [
        {
          q: "Are your valves API 598 tested?",
          a: "Yes, 100% of our valves undergo API 598 hydrostatic testing. We provide complete test certificates with each valve. Our testing facility is equipped with modern equipment and trained personnel.",
        },
        {
          q: "What certifications do your valves have?",
          a: "Our valves comply with API 600/602 (Gate), BS 1873 (Globe), API 6D (Check), IS 14846 (Indian Standard), and ISO 9001 quality management. We can provide certifications for other standards upon request.",
        },
        {
          q: "What is the typical lead time for orders?",
          a: "Standard lead times are 4-6 weeks for gate valves, 3-5 weeks for globe valves, and 5-7 weeks for check valves. Expedited delivery available for urgent requirements. Custom designs may require additional time.",
        },
        {
          q: "Do you provide installation support?",
          a: "Yes, we provide comprehensive installation support including on-site commissioning, training, and technical guidance. Our engineers can visit your facility for complex installations.",
        },
        {
          q: "What is your warranty period?",
          a: "Standard warranty is 12 months from delivery. Extended warranties available. Warranty covers manufacturing defects and workmanship. Damage due to misuse or improper installation is excluded.",
        },
      ],
    },
    {
      category: "Ordering & Delivery",
      questions: [
        {
          q: "What is the minimum order quantity?",
          a: "No minimum order quantity. We accept single valve orders and large bulk purchases. Pricing is competitive for both small and large orders.",
        },
        {
          q: "Do you offer bulk discounts?",
          a: "Yes, we provide volume discounts for large orders. The discount structure depends on quantity, specifications, and delivery timeline. Contact our sales team for a customized quote.",
        },
        {
          q: "What payment terms do you offer?",
          a: "We accept various payment methods including bank transfer, LC (Letter of Credit), and payment terms for established customers. 50% advance and 50% on delivery is standard. Custom terms negotiable.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we have experience shipping to over 30 countries. We handle all export documentation, customs clearance, and logistics. International shipping is available via air, sea, or courier.",
        },
        {
          q: "What packaging do you use?",
          a: "Valves are packaged in heavy-duty wooden crates with protective padding. All packaging is designed to prevent damage during transportation. Special packaging available for sensitive applications.",
        },
      ],
    },
    {
      category: "Maintenance & Support",
      questions: [
        {
          q: "How often should valves be maintained?",
          a: "Maintenance frequency depends on application and operating conditions. We recommend annual inspection for critical applications. We provide preventive maintenance schedules and checklists.",
        },
        {
          q: "Can you repair valves?",
          a: "Yes, we offer comprehensive valve repair and refurbishment services. We can repair valves from any manufacturer. Turnaround time is typically 2-3 weeks.",
        },
        {
          q: "What should I do if a valve starts leaking?",
          a: "First, check if the packing nut is loose (tighten carefully). If leakage continues, contact us immediately. We can provide troubleshooting guidance or arrange for repair/replacement.",
        },
        {
          q: "How do I identify a valve problem?",
          a: "Common issues include external leakage (packing), internal leakage (seat wear), and difficulty operating. Our troubleshooting guide provides detailed diagnosis. Contact our support team for complex issues.",
        },
        {
          q: "Do you provide spare parts?",
          a: "Yes, we stock spare parts for all our valves including seats, stems, packing, and bonnets. Spare parts are available for purchase separately and can be shipped quickly.",
        },
      ],
    },
    {
      category: "Customization & Engineering",
      questions: [
        {
          q: "Can you design valves for specific applications?",
          a: "Yes, our engineering team specializes in custom valve design. We can design valves for extreme temperatures, pressures, corrosive fluids, and unique applications.",
        },
        {
          q: "What is the process for custom design?",
          a: "1) Provide specifications and requirements, 2) Our engineers create design proposal, 3) Review and approval, 4) Prototype testing, 5) Production. Timeline varies based on complexity.",
        },
        {
          q: "Do you offer 3D CAD models?",
          a: "Yes, we provide detailed 3D CAD models (STEP, IGES, DWG formats) for all valves. These can be used for system integration and installation planning.",
        },
        {
          q: "Can you supply valves with special coatings?",
          a: "Yes, we offer various coatings including epoxy, polyester, and specialized corrosion-resistant coatings. Coating selection depends on your environment and requirements.",
        },
        {
          q: "Do you offer actuator options?",
          a: "Yes, we can supply valves with pneumatic, hydraulic, or electric actuators. We work with leading actuator manufacturers to provide integrated solutions.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="hidden md:block bg-gray-900 text-white py-2 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between text-xs uppercase tracking-widest font-bold">
          <span>ISO Compliant Standards • API 598 Tested</span>
          <span>Vapi, Gujarat, India • +91 6464646464</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-3xl font-black tracking-tighter text-brand-red">SUBH</span>
            <div className="leading-none border-l-2 border-black pl-2 uppercase text-xs font-extrabold tracking-widest">
              <p>Engineering</p>
              <p>Works</p>
            </div>
          </button>

          <div className="hidden lg:flex gap-10 text-xs font-bold uppercase tracking-widest">
            <button
              onClick={() => setLocation("/")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              Home
            </button>
            <button
              onClick={() => setLocation("/about")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              About
            </button>
            <button
              onClick={() => setLocation("/products")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              Products
            </button>
            <button
              onClick={() => setLocation("/services")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              Services
            </button>
            <button
              onClick={() => setLocation("/contact")}
              className="bg-brand-red text-white px-4 py-2 hover:bg-brand-red-dark transition font-bold"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[300px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Find answers to common questions about our products, services, and technical specifications.
          </p>
        </div>
      </header>

      {/* FAQ Sections */}
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
                    <div
                      key={qIdx}
                      className="border-2 border-gray-200 hover:border-brand-red transition"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full p-6 text-left flex justify-between items-start hover:bg-gray-50 transition"
                      >
                        <h3 className="font-black text-lg uppercase tracking-tight pr-4">{faq.q}</h3>
                        <span
                          className={`text-brand-red text-2xl font-black transition transform ${
                            isExpanded ? "rotate-45" : ""
                          }`}
                        >
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

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
            Didn't Find Your Answer?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Our technical team is ready to help. Contact us with your specific questions and we'll provide detailed answers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setLocation("/contact")}
              className="bg-brand-red text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition"
            >
              Contact Us
            </button>
            <button
              onClick={() => window.location.href = "mailto:info@shubhengineering.com"}
              className="border-2 border-brand-red text-brand-red px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition"
            >
              Email Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-12 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
          Subh Engineering Works • Gujarat, India • 2026
        </p>
      </footer>
    </div>
  );
}
