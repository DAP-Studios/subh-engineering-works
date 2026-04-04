/**
 * Home Page - Subh Engineering Works
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { organizationSchema, localBusinessSchema } from "@/lib/seo";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Subh Engineering Works | Industrial Valve Manufacturing, Sales and Servicing"
        description="Precision valves and reliable solutions for industrial valve manufacturing, sales, and servicing across India. Established 2015."
        keywords="industrial valves, valve manufacturing, valve sales, valve servicing, Subh Engineering Works, Gujarat"
        canonicalUrl="https://subh-engineering-works.manus.space/"
        jsonLd={[organizationSchema, localBusinessSchema]}
      />
      <Navigation />

      <header className="relative min-h-[600px] bg-gray-50 flex items-center overflow-hidden border-b-8" style={{ borderBottomColor: "#D22B2B" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 w-full items-center py-20">
          <div className="z-10">
            <div className="inline-block bg-black text-white text-xs px-4 py-2 font-bold uppercase tracking-widest mb-8">
              Established 2015 | Founded by Hitech Bhai
            </div>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
              Precision Valves. <br />
              <span style={{ color: "#D22B2B" }}>Reliable Solutions.</span>
            </h1>
            <p className="text-gray-600 mb-12 max-w-md text-base leading-relaxed font-medium">
              Your trusted partner for industrial valve manufacturing, sales, and servicing - engineered for performance, built for longevity.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setLocation("/products")}
                className="text-white px-8 py-6 text-sm font-bold uppercase tracking-widest transition shadow-lg"
                style={{ backgroundColor: "#D22B2B" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Explore Our Products
              </button>
              <button
                onClick={() => setLocation("/contact")}
                className="border-2 border-gray-900 text-gray-900 px-8 py-6 text-sm font-bold uppercase tracking-widest transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Request a Quote
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop"
              alt="Industrial Valves"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">About Subh Engineering Works</h2>
          <div className="h-1 w-24 mb-8" style={{ backgroundColor: "#D22B2B" }}></div>
          <p className="text-gray-700 max-w-4xl mb-12 leading-relaxed">
            At Subh Engineering Works, we specialize in the manufacturing, supply, and servicing of high-quality industrial valves for a wide range of industries. With over a decade of hands-on expertise, we deliver valves that meet stringent industrial standards - on time, every time.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Since", value: "Est. 2015" },
              { label: "Experience", value: "10+ Years" },
              { label: "Services", value: "Mfg + Sales + Service" },
              { label: "Coverage", value: "Pan-India" },
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-6 bg-gray-50">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">{item.label}</p>
                <p className="text-xl font-black uppercase">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Why Choose Us</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Quality Assured",
                desc: "Every valve is manufactured and tested to meet industry and safety standards before delivery.",
              },
              {
                name: "End-to-End Solutions",
                desc: "From procurement and supply to on-site installation and maintenance - we handle it all.",
              },
              {
                name: "Expert Support",
                desc: "Our experienced team provides prompt technical assistance and after-sales service.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-black uppercase mb-3">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Industries Served</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Oil and Gas",
              "Chemical and Petrochemical",
              "Water Treatment",
              "Power Generation",
              "Pharmaceuticals",
              "Food and Beverage",
              "Steel and Metals",
              "HVAC and Utilities",
            ].map((industry, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 p-5 font-semibold text-gray-800">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Need Product or Service Support?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Connect with our team for product details, servicing support, and customized industrial valve solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setLocation("/services")}
              className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
              style={{ backgroundColor: "#D22B2B" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Our Services
            </button>
            <button
              onClick={() => setLocation("/contact")}
              className="border-2 border-white text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
