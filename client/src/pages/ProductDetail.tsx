import { useMemo } from "react";
import { useLocation, useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { breadcrumbSchema, productSchema } from "@/lib/seo";
import { PRODUCT_ITEMS } from "../lib/products";

type ProductDetailMatch = { slug: string };

export default function ProductDetail() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<ProductDetailMatch>("/products/:slug");

  const product = useMemo(() => {
    if (!params?.slug) return null;
    return PRODUCT_ITEMS.find(item => item.slug === params.slug) ?? null;
  }, [params?.slug]);

  if (!match || !product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <SeoHead
          title="Product Not Found | Subh Engineering Works"
          description="The requested valve product could not be found."
          canonicalUrl="https://subhengineeringworks.com/products"
          jsonLd={breadcrumbSchema([
            { name: "Home", url: "https://subhengineeringworks.com/" },
            {
              name: "Products",
              url: "https://subhengineeringworks.com/products",
            },
          ])}
        />
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-black uppercase tracking-tight mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-700 mb-8">
              We could not find the valve you selected.
            </p>
            <button
              onClick={() => setLocation("/products")}
              className="text-white px-8 py-4 text-sm font-bold uppercase tracking-widest"
              style={{ backgroundColor: "#D22B2B" }}
            >
              Back to Products
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title={`${product.title} | Subh Engineering Works`}
        description={product.description}
        keywords={`${product.title}, industrial valves, ${product.badge}, Subh Engineering Works`}
        canonicalUrl={`https://subhengineeringworks.com/products/${product.slug}`}
        jsonLd={productSchema(product.title, product.description)}
      />
      <Navigation />

      <header
        className="relative overflow-hidden border-b-8 bg-neutral-950 text-white"
        style={{ borderBottomColor: "#D22B2B" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(210,43,43,0.25),transparent_45%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.1),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-12 sm:py-16 md:py-20 grid gap-8 lg:grid-cols-[1fr_0.95fr] items-center">
          <div>
            <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-2 mb-5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "#D22B2B" }}
              />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-white/90">
                {product.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-4">
              {product.title}
            </h1>
            <p className="text-white/80 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setLocation("/contact")}
                className="text-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest transition"
                style={{ backgroundColor: "#D22B2B" }}
              >
                Request Quote
              </button>
              <button
                onClick={() => setLocation("/products")}
                className="border-2 border-white/70 text-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest transition"
              >
                Back to Products
              </button>
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[420px] border border-white/20 shadow-2xl overflow-hidden bg-black/30">
            <img
              src={product.image}
              alt={product.alt}
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute left-4 top-4 border border-white/50 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              {product.badge}
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          <div className="bg-gray-50 border-2 border-gray-200 p-6 sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
              Technical Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <DetailCard label="Material" value={product.material} />
              <DetailCard label="Class" value={product.classRating} />
              <DetailCard label="Dimensions" value={product.dimensions} />
              <DetailCard
                label="Operating Pressure"
                value={product.operatingPressure}
              />
              <DetailCard
                label="End Connections"
                value={product.endConnections}
                wide
              />
              <DetailCard
                label="Applications"
                value={product.applications}
                wide
              />
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
              Product Summary
            </h2>
            <div
              className="h-1 w-20 mb-8"
              style={{ backgroundColor: "#D22B2B" }}
            />
            <p className="text-gray-700 leading-relaxed mb-8">
              This valve is supplied with a focus on reliability,
              maintainability, and correct application fit. Specifications vary
              by size, pressure rating, and end connection.
            </p>

            <div className="space-y-3">
              <SummaryRow label="Material" value={product.material} />
              <SummaryRow label="Class Rating" value={product.classRating} />
              <SummaryRow label="Dimensions" value={product.dimensions} />
              <SummaryRow label="Pressure" value={product.operatingPressure} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Quick Spec Table
          </h2>
          <div
            className="h-1 w-20 mb-8"
            style={{ backgroundColor: "#D22B2B" }}
          />
          <div className="overflow-x-auto bg-white border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                    Specification
                  </th>
                  <th className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Material", product.material],
                  ["Class", product.classRating],
                  ["Dimensions", product.dimensions],
                  ["Operating Pressure", product.operatingPressure],
                  ["End Connections", product.endConnections],
                  ["Applications", product.applications],
                ].map(([label, value]) => (
                  <tr key={label} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {label}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Other Products
          </h2>
          <div
            className="h-1 w-20 mb-8"
            style={{ backgroundColor: "#D22B2B" }}
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {PRODUCT_ITEMS.filter(item => item.slug !== product.slug)
              .slice(0, 4)
              .map(item => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setLocation(`/products/${item.slug}`)}
                  className="text-left bg-gray-50 border border-gray-200 overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative aspect-[4/3] bg-black">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-black uppercase leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">{item.badge}</p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function DetailCard({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`border border-gray-200 bg-white p-4 ${wide ? "sm:col-span-2" : ""}`}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">
        {label}
      </p>
      <p className="font-semibold text-gray-900 leading-relaxed">{value}</p>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-gray-200 pb-3">
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
        {label}
      </span>
      <span className="font-semibold text-gray-900 leading-relaxed">
        {value}
      </span>
    </div>
  );
}
