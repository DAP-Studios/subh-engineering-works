/**
 * Footer Component - Subh Engineering Works
 */

import { useLocation } from "wouter";
import dapLogo from "../assets/dap.png";

export default function Footer() {
  const [, setLocation] = useLocation();
  const currentYear = new Date().getFullYear();

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
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer
      className="bg-gray-900 text-white border-t-4"
      style={{ borderTopColor: "#D22B2B" }}
    >
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] mb-12">
            <div>
              <h3
                className="text-2xl font-black tracking-tighter mb-4"
                style={{ color: "#D22B2B" }}
              >
                SUBH
              </h3>
              <p className="max-w-md text-gray-300 text-sm leading-relaxed mb-6">
                Precision valves engineered for reliability, industrial uptime,
                and long-term performance.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Gujarat, India</p>
                <p>info@subhengineeringworks.com</p>
                <p>subhengineeringworks.com</p>
              </div>
            </div>

            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4
                  className="font-black uppercase tracking-widest text-xs mb-6"
                  style={{ color: "#D22B2B" }}
                >
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

          <div className="border-t border-gray-800 pt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between lg:items-center">
            <p className="text-xs tracking-wide text-gray-400">
              © {currentYear} Subh Engineering Works. All rights reserved.
            </p>

            <div className="w-full md:w-auto md:max-w-[430px] rounded-md border border-gray-700 bg-gray-800/60 px-3 py-2">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <img
                  src={dapLogo}
                  alt="DAP Tech Solutions"
                  className="h-9 w-auto flex-shrink-0"
                />
                <div className="min-w-0 flex flex-col gap-1 text-xs sm:text-sm font-semibold leading-5">
                  <p className="text-gray-200 break-words">
                    Website by{" "}
                    <a
                      href="https://thedap.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      DAP Tech Solutions
                    </a>
                  </p>
                  <p className="text-gray-200 break-words">
                    Deep Parmar{" "}
                    <a
                      href="https://wa.me/919725362234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300"
                    >
                      +91 9725362234
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
