/**
 * Footer Component - Subh Engineering Works
 * Reusable footer for all pages
 * Design: Industrial Minimalism
 */

import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "Gate Valves", path: "/products" },
        { label: "Globe Valves", path: "/products" },
        { label: "Check Valves", path: "/products" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brochures", path: "/resources" },
        { label: "Technical Guides", path: "/resources" },
        { label: "FAQ", path: "/faq" },
        { label: "Comparison Tool", path: "/comparison" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Testimonials", path: "/testimonials" },
        { label: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t-4" style={{ borderTopColor: "#D22B2B" }}>
      {/* Main Footer Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-black tracking-tighter mb-4" style={{ color: "#D22B2B" }}>
                SUBH
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Leading manufacturer of premium industrial valves engineered for performance, reliability, and precision.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 Vapi, Gujarat, India</p>
                <p>📞 +91 6464646464</p>
                <p>✉️ info@subhengineering.com</p>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-black uppercase tracking-widest text-xs mb-6" style={{ color: "#D22B2B" }}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <button
                        onClick={() => setLocation(link.path)}
                        className="text-gray-400 hover:text-white transition text-sm font-medium"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            {/* Certifications */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Certifications & Standards</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-2 bg-gray-800 text-xs font-bold rounded text-gray-300">ISO 9001</span>
                <span className="px-3 py-2 bg-gray-800 text-xs font-bold rounded text-gray-300">API 600/602</span>
                <span className="px-3 py-2 bg-gray-800 text-xs font-bold rounded text-gray-300">API 598</span>
                <span className="px-3 py-2 bg-gray-800 text-xs font-bold rounded text-gray-300">BS 1873</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-800">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                © 2026 Subh Engineering Works. All rights reserved. | Made in India 🇮🇳
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
