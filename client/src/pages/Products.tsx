/**
 * Products Page - Subh Engineering Works
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { productSchema } from "@/lib/seo";
import { PRODUCT_ITEMS } from "../lib/products";
import valvesImage from "../assets/heroimages/valves.png";

export default function Products() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Our Product Range | Subh Engineering Works"
        description="Comprehensive industrial valve range with direct sales, custom sourcing, and bulk supply options."
        keywords="industrial valves, gate valves, globe valves, ball valves, butterfly valves, check valves"
        canonicalUrl="https://subhengineeringworks.com/products"
        jsonLd={productSchema(
          "Industrial Valve Product Range",
          "Comprehensive range of industrial valves for multiple applications"
        )}
      />
      <Navigation />

      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Our Product <span style={{ color: "#D22B2B" }}>Range</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-4xl">
            Subh Engineering Works offers a comprehensive range of industrial
            valves designed to meet the highest performance and safety
            standards. All our products are available for direct sale and can be
            sourced, customized, or supplied in bulk as per your requirements.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 bg-gray-50 border-2 border-gray-200 overflow-hidden">
            <div className="relative min-h-[320px] lg:min-h-[520px] bg-black">
              <img
                src={valvesImage}
                alt="Industrial valve product showcase"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute left-6 top-6 border border-white/40 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Featured Valve
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/70 mb-2">
                  Engineered for flow control
                </p>
                <h2 className="text-3xl md:text-5xl font-black uppercase leading-[1.05] mb-3">
                  Industrial Valve Range
                </h2>
                <p className="max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
                  Reliable valves for water lines, process plants, utilities,
                  and industrial pipelines with options for different materials,
                  pressure ratings, and end connections.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-16 flex items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] font-bold text-gray-500 mb-3">
                  Valve Details
                </p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                  Built for dependable service
                </h2>
                <div
                  className="h-1 w-24 mb-6"
                  style={{ backgroundColor: "#D22B2B" }}
                ></div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our valve products are selected and supplied to match
                  industrial duty cycles, site conditions, and maintenance
                  needs. We support direct sales, bulk procurement, and custom
                  sourcing based on your application.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Gate, globe, ball, butterfly, check, and relief valves",
                    "Cast iron, carbon steel, stainless steel, brass, and bronze",
                    "Flanged, threaded, socket weld, butt weld, and wafer ends",
                    "Suitable for water, oil, gas, steam, and chemical service",
                  ].map(item => (
                    <div
                      key={item}
                      className="border border-gray-200 bg-white px-4 py-4 text-gray-700 font-medium leading-relaxed"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Custom Sourcing",
                    "Bulk Supply",
                    "Industrial Applications",
                    "Technical Support",
                  ].map(tag => (
                    <span
                      key={tag}
                      className="border border-gray-300 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRODUCT_ITEMS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLocation(`/products/${item.slug}`)}
                className="group text-left bg-gray-50 border-2 border-gray-200 overflow-hidden hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[#D22B2B]"
              >
                <div className="relative aspect-[4/3] bg-black">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={idx < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 border border-white/40 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {item.badge}
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-black uppercase leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      Tap for details
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D22B2B]">
                      View
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Operating Pressure Table
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Indicative ranges by product family.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                      Valve Type
                    </th>
                    <th className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                      Operating Pressure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCT_ITEMS.map(item => (
                    <tr key={item.title} className="border-t border-gray-200">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {item.operatingPressure}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Dimensions Table
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Common size ranges and nominal diameters.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                      Valve Type
                    </th>
                    <th className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                      Dimensions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCT_ITEMS.map(item => (
                    <tr key={item.title} className="border-t border-gray-200">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {item.dimensions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
              Materials Available
            </h2>
            <div
              className="h-1 w-20 mb-8"
              style={{ backgroundColor: "#D22B2B" }}
            ></div>
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
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
              End Connections
            </h2>
            <div
              className="h-1 w-20 mb-8"
              style={{ backgroundColor: "#D22B2B" }}
            ></div>
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
          <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
            Need Product Details or Bulk Pricing?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setLocation("/contact")}
              className="text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition"
              style={{ backgroundColor: "#D22B2B" }}
            >
              Request a Quote
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
