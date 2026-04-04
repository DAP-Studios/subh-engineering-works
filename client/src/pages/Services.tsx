/**
 * Services Page - Subh Engineering Works
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { breadcrumbSchema } from "@/lib/seo";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: "Valve Sales and Supply",
      desc: "Wide range of industrial valves for routine and critical applications. We handle urgent sourcing, project supply, and bulk dispatch with documentation support.",
    },
    {
      title: "Valve Manufacturing",
      desc: "Custom manufacturing based on size, pressure class, material, and end-connection requirements. Every batch follows quality checkpoints before dispatch.",
    },
    {
      title: "Valve Servicing and Repair",
      desc: "Inspection, fault diagnosis, overhaul, reconditioning, and replacement recommendations to restore performance and reduce unexpected shutdowns.",
    },
    {
      title: "Preventive Maintenance (AMC)",
      desc: "Scheduled maintenance programs to increase valve life, improve plant reliability, and reduce emergency breakdown costs.",
    },
    {
      title: "Installation and Commissioning",
      desc: "On-site installation support, alignment checks, and commissioning assistance for safe and stable system startup.",
    },
    {
      title: "Valve Testing and Inspection",
      desc: "Hydrostatic testing, pneumatic testing, seat leakage checks, and condition verification for both new and repaired valves.",
    },
    {
      title: "Technical Consultation",
      desc: "Guidance for valve selection, pressure-temperature suitability, media compatibility, and lifecycle optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Industrial Valve Services in India | Subh Engineering Works"
        description="Complete valve services including supply, custom manufacturing, repair, AMC, installation, testing, and technical consultation."
        keywords="industrial valve services, valve repair, valve maintenance AMC, valve testing, valve installation India"
        canonicalUrl="https://subh-engineering-works.manus.space/services"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://subh-engineering-works.manus.space/" },
          { name: "Services", url: "https://subh-engineering-works.manus.space/services" },
        ])}
      />
      <Navigation />

      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            What <span style={{ color: "#D22B2B" }}>We Do</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl">
            Beyond valve supply, we offer end-to-end engineering support that helps plants reduce downtime, improve safety, and maintain process stability.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Service Offerings</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-black uppercase mb-4">{idx + 1}. {service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Why Industries Choose Our Service Team</h2>
          <div className="h-1 w-24 mb-12" style={{ backgroundColor: "#D22B2B" }}></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Single vendor support for manufacturing, supply, and maintenance",
              "Faster fault diagnosis with practical, field-tested recommendations",
              "Planned maintenance model to reduce emergency shutdown costs",
              "Service support for multiple valve makes and configurations",
              "Clear reporting for inspection, testing, and corrective actions",
              "Responsive communication for urgent service requirements",
            ].map((point, idx) => (
              <div key={idx} className="border border-gray-200 bg-white p-5">
                <p className="font-medium text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Talk To Our Service Team</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => setLocation("/contact")} className="text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition" style={{ backgroundColor: "#D22B2B" }}>
              Get a Service Quote
            </button>
            <button onClick={() => setLocation("/contact")} className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition">
              Schedule an Inspection
            </button>
            <button onClick={() => setLocation("/contact")} className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition">
              Talk to Our Engineer
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
