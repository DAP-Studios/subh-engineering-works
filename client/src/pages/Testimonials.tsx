import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { useLocation } from "wouter";

export default function Testimonials() {
  const [, setLocation] = useLocation();

  const successStories = [
    {
      title: "Process Uptime Improvement Program",
      industry: "Power and Utilities",
      summary:
        "A plant team needed reliable isolation and maintenance support for recurring valve downtime. We aligned product selection and servicing cycles with operating conditions.",
      result: "Improved reliability and reduced unplanned stoppages through structured support.",
    },
    {
      title: "Bulk Valve Supply for Expansion Phase",
      industry: "Chemical Processing",
      summary:
        "A project required multi-category valves with consistent quality and planned dispatch windows. We coordinated supply timelines and technical clarity for faster procurement decisions.",
      result: "Smoother execution with better delivery planning and fewer procurement bottlenecks.",
    },
    {
      title: "Critical Line Service Recovery",
      industry: "Manufacturing",
      summary:
        "Client faced repeat leakage and operation issues in key lines. Our servicing team performed diagnosis, overhaul, and performance verification.",
      result: "Stable operation restored with reduced maintenance burden.",
    },
  ];

  const testimonials = [
    "Professional team, clear communication, and dependable support.",
    "Strong product quality and responsive service when it matters most.",
    "Good technical guidance during selection and maintenance planning.",
    "Reliable partner for both supply and servicing requirements.",
    "Practical recommendations that helped improve uptime.",
    "Timely support and smooth handling of bulk requirements.",
  ];

  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", url: "https://subh-engineering-works.manus.space/" },
      { name: "Testimonials", url: "https://subh-engineering-works.manus.space/testimonials" },
    ]),
    articleSchema(
      "Client Success and Testimonials",
      "Selected success stories and customer feedback for industrial valve projects.",
      "2026-04-05",
    ),
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Client Success Stories | Subh Engineering Works"
        description="Read practical success outcomes and customer feedback on industrial valve supply, servicing, and project support."
        keywords="industrial valve testimonials, valve project success, valve service feedback"
        canonicalUrl="https://subh-engineering-works.manus.space/testimonials"
        jsonLd={jsonLd}
      />
      <Navigation />

      <header className="relative min-h-[320px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Client <span className="text-brand-red">Success</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Outcomes-focused work across supply, servicing, and technical support for industrial valve requirements.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Featured Success Stories</h2>
          <div className="h-1 w-24 bg-brand-red mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 p-8">
                <p className="text-xs uppercase tracking-widest font-bold text-brand-red mb-3">{story.industry}</p>
                <h3 className="text-xl font-black uppercase mb-4">{story.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{story.summary}</p>
                <p className="font-semibold text-gray-800">Result: {story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">What Clients Say</h2>
          <div className="h-1 w-24 bg-brand-red mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((quote, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Let’s Build Your Next Project</h2>
          <p className="text-lg mb-10 text-gray-300">
            Share your requirement and get a clear recommendation with supply and service options.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="bg-brand-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition"
          >
            Contact Our Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
