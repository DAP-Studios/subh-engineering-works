/**
 * About Us Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Company history and values
 * - Team and facilities showcase
 * - Certifications and standards
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { organizationSchema } from "@/lib/seo";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="About Subh Engineering Works | 25+ Years of Industrial Valve Excellence"
        description="Learn about Subh Engineering Works - 25+ years of manufacturing premium industrial valves. ISO 9001 certified, API compliant, trusted by 500+ companies."
        keywords="about us, industrial valve manufacturer, Subh Engineering, Vapi Gujarat, ISO 9001, API certified"
        canonicalUrl="https://subh-engineering-works.manus.space/about"
        jsonLd={organizationSchema}
      />
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            About <span style={{ color: "#D22B2B" }}>Subh</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            25+ years of engineering excellence in industrial valve manufacturing and innovation.
          </p>
        </div>
      </header>

      {/* Company Story */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Our Story</h2>
            <div className="h-1 w-24 mb-8" style={{ backgroundColor: "#D22B2B" }}></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1999, Subh Engineering Works began with a simple vision: to manufacture industrial valves that meet the highest international standards while serving the Indian market with pride.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What started as a small manufacturing unit in Vapi has grown into a leading supplier of premium industrial valves, trusted by Fortune 500 companies and major industrial projects across India and globally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to innovate and expand our product range while maintaining our core commitment to quality, reliability, and customer satisfaction.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop"
              alt="Manufacturing Facility"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Mission & Values</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "Every valve undergoes rigorous testing and quality checks. We maintain 100% API 598 compliance.",
              },
              {
                title: "Innovation",
                desc: "Continuous R&D to develop better materials, designs, and manufacturing processes.",
              },
              {
                title: "Reliability",
                desc: "Our products are engineered to perform flawlessly in the most demanding industrial environments.",
              },
              {
                title: "Customer Focus",
                desc: "We listen to our customers and provide tailored solutions for their unique requirements.",
              },
              {
                title: "Sustainability",
                desc: "Committed to environmentally responsible manufacturing and waste reduction practices.",
              },
              {
                title: "Integrity",
                desc: "Transparent dealings, honest communication, and ethical business practices in all operations.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 border-2 border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-black uppercase mb-3" style={{ color: "#D22B2B" }}>
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Certifications & Standards</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { cert: "ISO 9001:2015", desc: "Quality Management System Certification" },
              { cert: "API 600/602", desc: "Gate Valve Standard Compliance" },
              { cert: "API 598", desc: "100% Hydrostatic Testing & Inspection" },
              { cert: "BS 1873", desc: "Globe Valve Standard Compliance" },
              { cert: "API 6D", desc: "Check Valve Pipeline Standard" },
              { cert: "IS 14846", desc: "Indian Standard for Industrial Valves" },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 pl-6 py-4" style={{ borderLeftColor: "#D22B2B" }}>
                <h3 className="text-lg font-black uppercase mb-2">{item.cert}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Our Facilities</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing Plant",
                desc: "State-of-the-art CNC machines and precision equipment for valve production.",
              },
              {
                title: "Testing Laboratory",
                desc: "Advanced testing equipment for API 598 hydrostatic and pressure testing.",
              },
              {
                title: "Warehouse",
                desc: "Climate-controlled storage facility with inventory management system.",
              },
            ].map((facility, idx) => (
              <div key={idx} className="bg-white p-8 border-2 border-gray-200">
                <h3 className="text-xl font-black uppercase mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6" style={{ backgroundColor: "#D22B2B" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-5xl font-black mb-2">25+</div>
              <p className="text-sm uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <p className="text-sm uppercase tracking-widest font-bold">Industrial Clients</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">50,000+</div>
              <p className="text-sm uppercase tracking-widest font-bold">Valves Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">99.2%</div>
              <p className="text-sm uppercase tracking-widest font-bold">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Join Our Growing Network of Satisfied Clients
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Experience the Subh difference in quality, reliability, and service.
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
