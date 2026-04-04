/**
 * Services Page - Subh Engineering Works
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: "Valve Sales and Supply",
      desc: "We supply a wide range of industrial valves - both standard and custom-specification - for projects of any scale. Bulk procurement, urgent sourcing, and project-based supply are all handled with precision.",
    },
    {
      title: "Valve Manufacturing",
      desc: "We manufacture industrial valves as per client specifications, including custom sizes, pressure ratings, and material requirements. Our manufacturing process adheres to quality control standards to ensure product reliability.",
    },
    {
      title: "Valve Servicing and Repair",
      desc: "Our field and workshop servicing team handles valve inspection, diagnosis, repair, and reconditioning. We service all major types and brands of industrial valves to restore full operational efficiency.",
    },
    {
      title: "Preventive Maintenance (AMC)",
      desc: "Scheduled maintenance contracts are available to keep your valves in optimal condition, reduce downtime, and extend equipment lifespan. We create custom Annual Maintenance Contract (AMC) plans for industrial plants.",
    },
    {
      title: "Installation and Commissioning",
      desc: "Our technicians handle on-site valve installation, alignment, and commissioning to ensure safe and correct integration into your piping systems.",
    },
    {
      title: "Valve Testing and Inspection",
      desc: "We carry out hydrostatic and pneumatic pressure testing, seat leakage testing, and performance verification on valves before dispatch or after repair.",
    },
    {
      title: "Technical Consultation",
      desc: "Not sure which valve suits your application? Our team provides expert consultation on valve selection, sizing, material compatibility, and pressure class for your specific process requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            What <span style={{ color: "#D22B2B" }}>We Do</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl">
            Beyond supplying valves, Subh Engineering Works provides a full spectrum of valve-related services - from installation and commissioning to repair, overhaul, and preventive maintenance.
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
