import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
/**
 * Resources Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Downloadable brochures and catalogs
 * - Technical documentation
 * - Installation guides
 */

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Resources() {
  const [, setLocation] = useLocation();

  const brochures = [
    {
      title: "Complete Product Catalog 2026",
      description: "Comprehensive catalog with all valve types, specifications, pressure ratings, and material options.",
      size: "2.4 MB",
      icon: "📋",
    },
    {
      title: "Gate Valve Technical Specifications",
      description: "Detailed specs for gate valves including API 600/602 compliance, pressure ratings, and sizing charts.",
      size: "1.8 MB",
      icon: "🔧",
    },
    {
      title: "Globe Valve Selection Guide",
      description: "Complete guide for selecting the right globe valve for your application with flow calculations.",
      size: "1.5 MB",
      icon: "📊",
    },
    {
      title: "Check Valve Installation Manual",
      description: "Step-by-step installation, commissioning, and maintenance procedures for check valves.",
      size: "1.2 MB",
      icon: "📖",
    },
  ];

  const technicalGuides = [
    {
      title: "Pressure-Temperature Charts",
      description: "Complete P-T charts for all valve classes and materials.",
      format: "PDF",
    },
    {
      title: "Hydrostatic Testing Procedures",
      description: "API 598 compliant testing procedures and certification documentation.",
      format: "PDF",
    },
    {
      title: "Material Selection Guide",
      description: "Guide for selecting appropriate materials for corrosive and extreme environments.",
      format: "PDF",
    },
    {
      title: "Valve Sizing Calculator",
      description: "Excel spreadsheet for calculating proper valve sizes based on flow rates.",
      format: "XLSX",
    },
    {
      title: "Maintenance Schedule Template",
      description: "Preventive maintenance schedule and checklist for industrial valve systems.",
      format: "PDF",
    },
    {
      title: "Troubleshooting Guide",
      description: "Common valve problems, diagnosis, and solutions for industrial applications.",
      format: "PDF",
    },
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
            Technical <span className="text-brand-red">Resources</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Download comprehensive guides, specifications, and technical documentation for our industrial valve products.
          </p>
        </div>
      </header>

      {/* Product Brochures */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Product Brochures</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {brochures.map((brochure, idx) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 p-8 hover:shadow-lg transition hover-lift">
                <div className="text-5xl mb-4">{brochure.icon}</div>
                <h3 className="text-xl font-black uppercase mb-3">{brochure.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{brochure.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase">PDF • {brochure.size}</span>
                  <Button className="bg-brand-red text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-red-dark transition">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Guides */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Technical Guides</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {technicalGuides.map((guide, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 p-6 hover:shadow-lg transition hover-lift">
                <h3 className="text-lg font-black uppercase mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{guide.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-brand-red uppercase">{guide.format}</span>
                  <Button
                    variant="outline"
                    className="text-xs font-bold uppercase tracking-widest border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition"
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Quick Reference</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-l-4 border-brand-red p-8">
              <h3 className="text-xl font-black uppercase mb-4">API Standards</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• API 598 - Valve Testing</li>
                <li>• API 600 - Gate Valves</li>
                <li>• API 602 - Compact Gate Valves</li>
                <li>• API 6D - Pipeline Valves</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-brand-red p-8">
              <h3 className="text-xl font-black uppercase mb-4">International Standards</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• BS 1873 - Globe Valves</li>
                <li>• BS 1868 - Check Valves</li>
                <li>• IS 14846 - Gate Valves</li>
                <li>• ISO 9001 - Quality Management</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-brand-red p-8">
              <h3 className="text-xl font-black uppercase mb-4">Pressure Ratings</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• 150 PSI (10 Bar)</li>
                <li>• 300 PSI (20 Bar)</li>
                <li>• 600 PSI (40 Bar)</li>
                <li>• 2500 PSI (170 Bar)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Need Custom Documentation?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Our technical team can prepare customized specifications and documentation for your specific application requirements.
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            className="bg-brand-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition"
          >
            Request Custom Docs
          </Button>
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
