/**
 * Services Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Service offerings
 * - Technical support
 * - Customization capabilities
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Technical <span style={{ color: "#D22B2B" }}>Services</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Comprehensive support and customization services for all your industrial valve needs.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Our Services</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Custom Design & Engineering",
                desc: "Our expert engineers design valves tailored to your specific application requirements, pressure ratings, and environmental conditions.",
                features: ["CAD design support", "FEA analysis", "Prototype testing", "Performance optimization"],
              },
              {
                title: "Manufacturing & Production",
                desc: "State-of-the-art manufacturing facility with precision CNC machines and quality control at every stage.",
                features: ["Small batch to bulk orders", "Expedited delivery", "Quality assurance", "Material certification"],
              },
              {
                title: "Testing & Certification",
                desc: "100% API 598 hydrostatic testing with complete documentation and certification for all valves.",
                features: ["Pressure testing", "Leak testing", "Material testing", "Test certificates"],
              },
              {
                title: "Installation Support",
                desc: "On-site commissioning and installation support by our experienced technical team.",
                features: ["Site supervision", "Training", "Commissioning", "Startup assistance"],
              },
              {
                title: "Technical Consultation",
                desc: "Expert guidance on valve selection, sizing, material compatibility, and application optimization.",
                features: ["Application analysis", "Sizing calculations", "Material selection", "Performance prediction"],
              },
              {
                title: "Maintenance & Repair",
                desc: "Comprehensive maintenance, repair, and refurbishment services for valves from any manufacturer.",
                features: ["Preventive maintenance", "Emergency repairs", "Refurbishment", "Spare parts supply"],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 border-2 border-gray-200 hover:shadow-lg transition">
                <h3 className="text-2xl font-black uppercase mb-4" style={{ color: "#D22B2B" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-gray-700 flex gap-2">
                      <span style={{ color: "#D22B2B" }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Quality Assurance Process</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Material Inspection",
                desc: "All raw materials are inspected and certified for composition, strength, and quality standards.",
              },
              {
                step: "02",
                title: "Manufacturing Control",
                desc: "Precision machining with real-time monitoring and in-process quality checks at every stage.",
              },
              {
                step: "03",
                title: "Pressure Testing",
                desc: "100% hydrostatic testing at 1.5x rated pressure with complete documentation and certification.",
              },
              {
                step: "04",
                title: "Final Inspection",
                desc: "Comprehensive final inspection including dimensional verification, surface finish, and functionality.",
              },
              {
                step: "05",
                title: "Packaging & Delivery",
                desc: "Secure packaging in protective crates with complete documentation and tracking information.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div
                  className="text-4xl font-black flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: "#D22B2B" }}
                >
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Response Times */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">24/7 Technical Support</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Support",
                time: "2-Hour Response",
                desc: "Immediate assistance for critical issues and emergency situations.",
              },
              {
                title: "Technical Queries",
                time: "24-Hour Response",
                desc: "Expert answers to technical questions and troubleshooting guidance.",
              },
              {
                title: "Spare Parts",
                time: "48-Hour Delivery",
                desc: "Quick availability of spare parts for maintenance and repairs.",
              },
            ].map((support, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 p-8 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-black uppercase mb-2">{support.title}</h3>
                <p className="text-3xl font-black mb-4" style={{ color: "#D22B2B" }}>
                  {support.time}
                </p>
                <p className="text-gray-600">{support.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Need Expert Support?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Contact our technical team to discuss your requirements and get a customized solution.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
            style={{ backgroundColor: "#D22B2B" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
