/**
 * Home Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Bold typography hierarchy
 * - Asymmetric layout with strategic red accents
 * - Professional product showcase
 */

import { Button } from "@/components/ui/button";
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
        title="Subh Engineering Works | Industrial Valve Solutions - API Certified"
        description="Leading manufacturer of premium industrial valves including gate, globe, and check valves. API 600/602 certified, ISO 9001 compliant. Trusted by 500+ industrial companies worldwide."
        keywords="industrial valves, gate valves, globe valves, check valves, API 600, ISO 9001, valve manufacturer, India"
        canonicalUrl="https://subh-engineering-works.manus.space/"
        jsonLd={[organizationSchema, localBusinessSchema]}
      />
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-[600px] bg-gray-50 flex items-center overflow-hidden border-b-8" style={{ borderBottomColor: "#D22B2B" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 w-full items-center py-20">
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-block bg-black text-white text-xs px-4 py-2 font-bold uppercase tracking-widest mb-8">
              Make In India
            </div>
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
              Engineering <br />
              <span style={{ color: "#D22B2B" }}>Trust.</span>
            </h1>
            <p className="text-gray-600 mb-12 max-w-md text-base leading-relaxed font-medium">
              Leading manufacturer of premium industrial valves engineered for performance, reliability, and precision. Trusted by major industries worldwide.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setLocation("/products")}
                className="text-white px-8 py-6 text-sm font-bold uppercase tracking-widest transition shadow-lg"
                style={{ backgroundColor: "#D22B2B" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Catalog
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
                Get Quote
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop"
              alt="Industrial Valves"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Featured Products */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Featured Products</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gate Valves",
                desc: "Full port design for minimal pressure drop. Ideal for isolation and on-off control.",
                icon: "🚪",
              },
              {
                name: "Globe Valves",
                desc: "Excellent flow control and throttling capabilities. Perfect for precise regulation.",
                icon: "🌐",
              },
              {
                name: "Check Valves",
                desc: "Automatic backflow prevention. Protects equipment from reverse flow damage.",
                icon: "✓",
              },
            ].map((product, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.desc}</p>
                <button
                  onClick={() => setLocation("/products")}
                  className="text-sm font-bold uppercase tracking-widest transition"
                  style={{ color: "#D22B2B" }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Why Choose Subh Engineering</h2>
          <div className="h-1 w-24 mb-16" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Quality Assurance", desc: "100% API 598 tested valves with complete certifications" },
              { title: "Expert Team", desc: "25+ years of engineering expertise and technical support" },
              { title: "Fast Delivery", desc: "99.2% on-time delivery with flexible lead times" },
              { title: "Custom Solutions", desc: "Tailored designs for unique application requirements" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-4xl font-black" style={{ color: "#D22B2B" }}>
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Ready to Find Your Ideal Valve Solution?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Contact our technical team today for personalized recommendations and competitive quotes.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
            style={{ backgroundColor: "#D22B2B" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
