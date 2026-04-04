import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
/**
 * Testimonials & Case Studies Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Customer success stories
 * - Case studies with results
 * - Client testimonials
 */

import { useLocation } from "wouter";

export default function Testimonials() {
  const [, setLocation] = useLocation();

  const caseStudies = [
    {
      company: "Reliance Power Limited",
      industry: "Power Generation",
      challenge: "Required 200+ gate valves for thermal power plant with strict API 600 compliance and delivery timeline of 6 months.",
      solution: "Delivered 250 gate valves in 5 months with 100% API 598 testing certification and on-site installation support.",
      result: "Plant commissioned on schedule. Zero valve failures in first year of operation.",
      testimonial: "Subh Engineering exceeded our expectations with quality and reliability.",
      author: "Rajesh Kumar",
      title: "Plant Manager",
    },
    {
      company: "ONGC Upstream Business",
      industry: "Oil & Gas Exploration",
      challenge: "Needed specialized check valves for offshore pipeline with extreme pressure (2500 PSI) and corrosive environment.",
      solution: "Custom-designed duplex stainless steel check valves with enhanced cracking pressure specifications.",
      result: "Successfully operating in harsh offshore conditions for 3+ years with zero maintenance issues.",
      testimonial: "Their engineering expertise and material knowledge solved our most critical challenges.",
      author: "Vikram Singh",
      title: "Operations Director",
    },
    {
      company: "Cipla Pharma Manufacturing",
      industry: "Pharmaceutical",
      challenge: "Required FDA-compliant globe valves for sterile process with full traceability and documentation.",
      solution: "Manufactured pharmaceutical-grade valves with complete material certificates, test reports, and traceability documentation.",
      result: "Passed FDA inspection with zero findings. Integrated seamlessly into production line.",
      testimonial: "Their attention to regulatory compliance and quality standards is exceptional.",
      author: "Dr. Priya Sharma",
      title: "Quality Assurance Head",
    },
    {
      company: "Tata Steel Limited",
      industry: "Steel Manufacturing",
      challenge: "Needed large-diameter gate valves (48 inch) for high-temperature steam lines in steel mill.",
      solution: "Engineered and manufactured custom 48-inch gate valves with special materials for 400°C operation.",
      result: "Reduced maintenance downtime by 40%. Improved plant efficiency and safety.",
      testimonial: "Best valve supplier we've worked with in 20 years of operations.",
      author: "Anil Desai",
      title: "Plant Head",
    },
  ];

  const testimonials = [
    {
      quote: "Subh Engineering's valves have been running flawlessly in our facility for over 5 years. Their technical support is outstanding.",
      author: "Suresh Patel",
      company: "Gujarat Chemicals",
      rating: 5,
    },
    {
      quote: "The quality of their products and professionalism of their team sets them apart from competitors. Highly recommended.",
      author: "Deepak Verma",
      company: "Bharat Petroleum",
      rating: 5,
    },
    {
      quote: "Fast delivery, excellent quality, and competitive pricing. They understand the industrial sector deeply.",
      author: "Neha Gupta",
      company: "Siemens India",
      rating: 5,
    },
    {
      quote: "Their custom design capabilities solved a problem that other suppliers couldn't address. True engineering partners.",
      author: "Ramesh Kumar",
      company: "Thermax Limited",
      rating: 5,
    },
    {
      quote: "Reliable, professional, and committed to excellence. We've made Subh our preferred valve supplier.",
      author: "Anita Singh",
      company: "Hindustan Unilever",
      rating: 5,
    },
    {
      quote: "Their technical expertise and customer service make them invaluable to our operations.",
      author: "Mohit Sharma",
      company: "Jindal Steel",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Industrial Clients" },
    { number: "50,000+", label: "Valves Delivered" },
    { number: "99.2%", label: "On-Time Delivery" },
    { number: "0.02%", label: "Failure Rate" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="hidden md:block bg-gray-900 text-white py-2 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between text-xs uppercase tracking-widest font-bold">
          <span>ISO Compliant Standards • API 598 Tested</span>
          <span>Vapi, Gujarat, India • +91 6464646464</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <span className="text-3xl font-black tracking-tighter text-brand-red">SUBH</span>
            <div className="leading-none border-l-2 border-black pl-2 uppercase text-xs font-extrabold tracking-widest">
              <p>Engineering</p>
              <p>Works</p>
            </div>
          </button>

          <div className="hidden lg:flex gap-10 text-xs font-bold uppercase tracking-widest">
            <button
              onClick={() => setLocation("/")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              Home
            </button>
            <button
              onClick={() => setLocation("/about")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              About
            </button>
            <button
              onClick={() => setLocation("/products")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              Products
            </button>
            <button
              onClick={() => setLocation("/services")}
              className="text-gray-700 hover:text-brand-red transition pb-1"
            >
              Services
            </button>
            <button
              onClick={() => setLocation("/contact")}
              className="bg-brand-red text-white px-4 py-2 hover:bg-brand-red-dark transition font-bold"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Client <span className="text-brand-red">Success</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            See how leading industrial companies trust Subh Engineering Works for their critical valve requirements.
          </p>
        </div>
      </header>

      {/* Success Stats */}
      <section className="bg-brand-red text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-black mb-2">{stat.number}</div>
              <p className="text-sm uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Featured Case Studies</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="border-l-4 border-brand-red pl-8 py-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase mb-2">{study.company}</h3>
                  <p className="text-brand-red text-sm font-bold uppercase tracking-widest">{study.industry}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-2">Challenge</p>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-2">Solution</p>
                    <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-600 mb-2">Result</p>
                    <p className="text-gray-700 leading-relaxed font-semibold text-brand-red">{study.result}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 border-l-4 border-brand-red">
                  <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                  <p className="text-sm font-bold">
                    {study.author}, <span className="text-brand-red">{study.title}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Client Testimonials</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 border-2 border-gray-200 hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-red text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-black text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-600 uppercase tracking-widest">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Trusted By Industry Leaders</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            {[
              "Reliance Industries",
              "ONGC",
              "Cipla Pharma",
              "Tata Steel",
              "Bharat Petroleum",
              "Siemens India",
              "Thermax Limited",
              "Hindustan Unilever",
              "Jindal Steel",
              "Gujarat Chemicals",
            ].map((company, idx) => (
              <div key={idx} className="bg-gray-50 p-6 border-2 border-gray-200 text-center hover:border-brand-red transition">
                <p className="font-black text-sm uppercase tracking-widest text-gray-700">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Become Our Next Success Story
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Join hundreds of satisfied industrial companies that trust Subh Engineering Works for their valve solutions.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="bg-brand-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-12 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
          Subh Engineering Works • Gujarat, India • 2026
        </p>
      </footer>
    </div>
  );
}
