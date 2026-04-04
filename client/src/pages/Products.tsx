/**
 * Products Page - Subh Engineering Works
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { productSchema } from "@/lib/seo";

export default function Products() {
  const [, setLocation] = useLocation();

  const products = [
    {
      title: "Gate Valves",
      description:
        "Used for on/off control in pipelines. Available in cast iron, stainless steel, and brass. Suitable for water, oil, gas, and steam applications.",
    },
    {
      title: "Globe Valves",
      description:
        "Ideal for throttling and flow regulation. Manufactured in various pressure ratings and end connections for industrial and commercial use.",
    },
    {
      title: "Ball Valves",
      description:
        "Quarter-turn operation for quick shutoff. Available in full bore and reduced bore, with threaded, flanged, or welded ends.",
    },
    {
      title: "Butterfly Valves",
      description:
        "Lightweight and cost-effective flow control solution. Used widely in water treatment, HVAC, and chemical industries.",
    },
    {
      title: "Check Valves",
      description:
        "Prevents reverse flow in pipelines. Available in swing, lift, and dual plate types for various fluid applications.",
    },
    {
      title: "Pressure Relief Valves",
      description:
        "Automatically releases excess pressure to protect equipment and systems. Compliant with industrial safety standards.",
    },
    {
      title: "Needle Valves",
      description:
        "Precise flow control for instrumentation and hydraulic systems. Available in stainless steel and carbon steel.",
    },
    {
      title: "Diaphragm Valves",
      description:
        "Ideal for handling corrosive, abrasive, or sanitary fluids. Widely used in pharmaceuticals and food processing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Our Product Range | Subh Engineering Works"
        description="Comprehensive industrial valve range with direct sales, custom sourcing, and bulk supply options."
        keywords="industrial valves, gate valves, globe valves, ball valves, butterfly valves, check valves"
        canonicalUrl="https://subh-engineering-works.manus.space/products"
        jsonLd={productSchema("Industrial Valve Product Range", "Comprehensive range of industrial valves for multiple applications")}
      />
      <Navigation />

      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Our Product <span style={{ color: "#D22B2B" }}>Range</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl">
            Subh Engineering Works offers a comprehensive range of industrial valves designed to meet the highest performance and safety standards. All our products are available for direct sale and can be sourced, customized, or supplied in bulk as per your requirements.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((item, idx) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Materials Available</h2>
            <div className="h-1 w-20 mb-8" style={{ backgroundColor: "#D22B2B" }}></div>
            <ul className="space-y-3 text-gray-800 font-medium">
              <li>Cast Iron</li>
              <li>Carbon Steel</li>
              <li>Stainless Steel (SS304 / SS316)</li>
              <li>Brass</li>
              <li>Bronze</li>
              <li>Ductile Iron</li>
              <li>PVC / CPVC</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">End Connections</h2>
            <div className="h-1 w-20 mb-8" style={{ backgroundColor: "#D22B2B" }}></div>
            <ul className="space-y-3 text-gray-800 font-medium">
              <li>Flanged</li>
              <li>Threaded (BSP / NPT)</li>
              <li>Socket Weld</li>
              <li>Butt Weld</li>
              <li>Wafer Type</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Need Product Details or Bulk Pricing?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setLocation("/contact")}
              className="text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition"
              style={{ backgroundColor: "#D22B2B" }}
            >
              Request a Quote
            </button>
            <button
              onClick={() => setLocation("/resources")}
              className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition"
            >
              Download Product Catalogue
            </button>
            <button
              onClick={() => setLocation("/contact")}
              className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition"
            >
              Contact for Bulk Orders
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
