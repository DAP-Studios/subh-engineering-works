/**
 * Footer Component - Subh Engineering Works
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
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t-4" style={{ borderTopColor: "#D22B2B" }}>
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black tracking-tighter mb-4" style={{ color: "#D22B2B" }}>
                SUBH
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Subh Engineering Works - Precision Valves. Dependable Service. Trusted Since 2015.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Gujarat, India</p>
                <p>Phone number not listed on Google profile</p>
                <p>info@subhengineeringworks.com</p>
                <p>subh-engineering-works.manus.space</p>
              </div>
            </div>

            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-black uppercase tracking-widest text-xs mb-6" style={{ color: "#D22B2B" }}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <button onClick={() => setLocation(link.path)} className="text-gray-400 hover:text-white transition text-sm font-medium">
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              Subh Engineering Works - Precision Valves. Dependable Service. Trusted Since 2015.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
