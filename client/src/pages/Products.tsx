/**
 * Products Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Comprehensive product catalog
 * - Technical specifications
 * - Application details
 */

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { productSchema } from "@/lib/seo";

export default function Products() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Industrial Valves | Gate, Globe & Check Valves - API Certified"
        description="Premium industrial valves including gate valves, globe valves, and check valves. API 600/602 certified, ISO 9001 compliant. Sizes 1/2 inch to 48 inch, pressure class 150# to 2500#."
        keywords="gate valves, globe valves, check valves, industrial valves, API 600, API 602, valve manufacturer, industrial solutions"
        canonicalUrl="https://subh-engineering-works.manus.space/products"
        jsonLd={productSchema("Industrial Valve Solutions", "Premium industrial valves engineered for performance and reliability")}
      />
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Industrial <span className="text-brand-red">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Premium valve solutions engineered for performance, reliability, and precision.
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Gate Valve */}
            <div className="bg-gray-50 border-2 border-gray-200 hover:shadow-2xl transition group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429606633/Dajc8D4QAeYNmDuKgDLcxd/gate-valve-product-KXtJckwtmxZodXHcQNEPgg.webp"
                alt="Gate Valve"
                className="w-full h-72 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase mb-2">Gate Valve</h3>
                <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-6 border-b pb-4">
                  API 600 / 602 / IS 14846
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Size Range</p>
                    <p className="text-lg font-black">1/2 inch to 48 inch</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Pressure Class</p>
                    <p className="text-lg font-black">150# to 2500#</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Operation</p>
                    <p className="text-lg font-black">Manual / Gear</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Materials</p>
                    <p className="text-lg font-black">SS / CS / Ductile Iron</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Bidirectional sealing gate valves for isolation and on-off flow control. Ideal for Oil and Gas, Power, and Chemical applications.
                </p>
                <button
                  onClick={() => setLocation("/contact")}
                  className="w-full text-white py-3 text-xs font-bold uppercase tracking-widest transition"
                  style={{ backgroundColor: "#D22B2B" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Request Quote
                </button>
              </div>
            </div>

            {/* Globe Valve */}
            <div className="bg-gray-50 border-2 border-gray-200 hover:shadow-2xl transition group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429606633/Dajc8D4QAeYNmDuKgDLcxd/globe-valve-product-hTxEEcMeLbAg8ZinfcXMww.webp"
                alt="Globe Valve"
                className="w-full h-72 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase mb-2">Globe Valve</h3>
                <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-6 border-b pb-4">
                  BS 1873 / API 600
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Size Range</p>
                    <p className="text-lg font-black">1/2 inch to 24 inch</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Pressure Class</p>
                    <p className="text-lg font-black">150# to 2500#</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Testing</p>
                    <p className="text-lg font-black">API 598 Certified</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Configuration</p>
                    <p className="text-lg font-black">Angle / Straight</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Precision flow control valves with low pressure drop. Perfect for throttling and regulation in critical systems.
                </p>
                <button
                  onClick={() => setLocation("/contact")}
                  className="w-full text-white py-3 text-xs font-bold uppercase tracking-widest transition"
                  style={{ backgroundColor: "#D22B2B" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Request Quote
                </button>
              </div>
            </div>

            {/* Check Valve */}
            <div className="bg-gray-50 border-2 border-gray-200 hover:shadow-2xl transition group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429606633/Dajc8D4QAeYNmDuKgDLcxd/check-valve-product-4RrY82HW8GPR5eJufzNeEbeHg.webp"
                alt="Check Valve"
                className="w-full h-72 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase mb-2">Check Valve</h3>
                <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-6 border-b pb-4">
                  API 6D / BS 1868
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Size Range</p>
                    <p className="text-lg font-black">2 inch to 60 inch</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Pressure Class</p>
                    <p className="text-lg font-black">150# to 2500#</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Type</p>
                    <p className="text-lg font-black">Swing / Disk</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-1">Cracking Pressure</p>
                    <p className="text-lg font-black">Customizable</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Reliable backflow prevention for pipelines. Prevents reverse flow and protects equipment in high-pressure systems.
                </p>
                <button
                  onClick={() => setLocation("/contact")}
                  className="w-full text-white py-3 text-xs font-bold uppercase tracking-widest transition"
                  style={{ backgroundColor: "#D22B2B" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Hydrostatic Test Pressure</h2>
          <p className="text-gray-600 mb-12 text-sm uppercase tracking-widest font-bold">API 598 Standard Compliance</p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs uppercase tracking-widest">
              <thead className="bg-black text-white font-bold border-b-4 border-brand-red">
                <tr>
                  <th className="p-6">Pressure Class</th>
                  <th className="p-6">Shell Test (Bar)</th>
                  <th className="p-6">Seat Test (Bar)</th>
                  <th className="p-6">Working Pressure (PSI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-white transition">
                  <td className="p-6 font-black text-brand-red">150</td>
                  <td className="p-6">30</td>
                  <td className="p-6">22</td>
                  <td className="p-6">150</td>
                </tr>
                <tr className="hover:bg-white transition">
                  <td className="p-6 font-black text-brand-red">300</td>
                  <td className="p-6">75</td>
                  <td className="p-6">55</td>
                  <td className="p-6">300</td>
                </tr>
                <tr className="hover:bg-white transition">
                  <td className="p-6 font-black text-brand-red">600</td>
                  <td className="p-6">150</td>
                  <td className="p-6">110</td>
                  <td className="p-6">600</td>
                </tr>
                <tr className="hover:bg-white transition">
                  <td className="p-6 font-black text-brand-red">900</td>
                  <td className="p-6">225</td>
                  <td className="p-6">165</td>
                  <td className="p-6">900</td>
                </tr>
                <tr className="hover:bg-white transition">
                  <td className="p-6 font-black text-brand-red">1500</td>
                  <td className="p-6">375</td>
                  <td className="p-6">275</td>
                  <td className="p-6">1500</td>
                </tr>
                <tr className="hover:bg-white transition">
                  <td className="p-6 font-black text-brand-red">2500</td>
                  <td className="p-6">625</td>
                  <td className="p-6">460</td>
                  <td className="p-6">2500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Industry Applications</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-2xl font-black uppercase mb-3">Oil and Gas</h3>
              <p className="text-gray-600 leading-relaxed">
                Upstream, midstream, and downstream applications. Proven performance in extreme pressure and temperature conditions.
              </p>
            </div>
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-2xl font-black uppercase mb-3">Power Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Thermal and hydro power plants. Critical flow control for steam, water, and fuel systems.
              </p>
            </div>
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-2xl font-black uppercase mb-3">Pharmaceutical</h3>
              <p className="text-gray-600 leading-relaxed">
                Sterile process applications with FDA compliance. Precision control for critical manufacturing processes.
              </p>
            </div>
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-2xl font-black uppercase mb-3">Chemical Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Corrosive fluid handling with specialized materials. Safe isolation and flow control for hazardous chemicals.
              </p>
            </div>
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-2xl font-black uppercase mb-3">Water Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Municipal and industrial water systems. Large-diameter valves for distribution and treatment facilities.
              </p>
            </div>
            <div className="border-l-4 border-brand-red pl-6">
              <h3 className="text-2xl font-black uppercase mb-3">HVAC Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Climate control and refrigeration. Reliable flow regulation for heating and cooling applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Our engineering team can design and manufacture valves tailored to your specific requirements and application needs.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
            style={{ backgroundColor: "#D22B2B" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contact Our Engineers
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
