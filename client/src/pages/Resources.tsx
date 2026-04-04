import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Resources() {
  const [, setLocation] = useLocation();

  const brochures = [
    {
      title: "Industrial Valve Product Catalogue",
      description: "Overview of available valve categories, materials, and end connections for project planning and procurement.",
      size: "2.4 MB",
      icon: "??",
    },
    {
      title: "Valve Selection Guide by Application",
      description: "Use-case based guide to choose the right valve for water, oil, gas, steam, and chemical handling.",
      size: "1.8 MB",
      icon: "??",
    },
    {
      title: "Valve Service and Maintenance Handbook",
      description: "Inspection routines, preventive checks, servicing intervals, and shutdown-risk reduction tips.",
      size: "1.5 MB",
      icon: "???",
    },
    {
      title: "Installation and Commissioning Checklist",
      description: "Step-by-step checklist to improve installation quality, commissioning safety, and startup reliability.",
      size: "1.2 MB",
      icon: "?",
    },
  ];

  const resourceSchema = [
    breadcrumbSchema([
      { name: "Home", url: "https://subh-engineering-works.manus.space/" },
      { name: "Resources", url: "https://subh-engineering-works.manus.space/resources" },
    ]),
    articleSchema(
      "Industrial Valve Knowledge Resources",
      "Guides for valve selection, maintenance, standards, and engineering references.",
      "2026-04-04",
    ),
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Industrial Valve Resources | Catalogues, Guides, Checklists"
        description="Download practical valve resources including product catalogues, selection guides, service handbooks, and commissioning checklists."
        keywords="industrial valve resources, valve catalogue, valve selection guide, valve maintenance guide"
        canonicalUrl="https://subh-engineering-works.manus.space/resources"
        jsonLd={resourceSchema}
      />
      <Navigation />

      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Technical <span className="text-brand-red">Resources</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Practical references for engineers, buyers, and maintenance teams to make faster, safer valve decisions.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Most Downloaded Guides</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {brochures.map((brochure, idx) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 p-8 hover:shadow-lg transition hover-lift">
                <div className="text-5xl mb-4">{brochure.icon}</div>
                <h3 className="text-xl font-black uppercase mb-3">{brochure.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{brochure.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase">PDF - {brochure.size}</span>
                  <Button className="bg-brand-red text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-red-dark transition">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Quick Knowledge Blocks</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-l-4 border-brand-red p-8">
              <h3 className="text-xl font-black uppercase mb-4">Selection Basics</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>� Confirm pressure class and temperature range</li>
                <li>� Validate media compatibility with material</li>
                <li>� Select end connection by pipeline standard</li>
                <li>� Define operation and maintenance frequency</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-brand-red p-8">
              <h3 className="text-xl font-black uppercase mb-4">Common Standards</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>� API 598 - Valve inspection and testing</li>
                <li>� API 600 / 602 - Gate valve standards</li>
                <li>� BS 1873 - Globe valve standard</li>
                <li>� ISO 9001 - Quality management framework</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-brand-red p-8">
              <h3 className="text-xl font-black uppercase mb-4">Reliability Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>� Plan preventive checks before shutdown cycles</li>
                <li>� Track valve history and failure patterns</li>
                <li>� Use testing records for audit readiness</li>
                <li>� Replace critical wear parts proactively</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Need a Custom Technical Pack?</h2>
          <p className="text-lg mb-10 text-gray-300">
            We can prepare project-specific documentation with specs, material recommendations, and service scope.
          </p>
          <Button onClick={() => setLocation("/contact")} className="bg-brand-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition">
            Request Custom Docs
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
