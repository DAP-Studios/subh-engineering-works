/**
 * Navigation Component - Subh Engineering Works
 * Reusable header with full navigation menu
 * Design: Industrial Minimalism
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
  ];

  const handleNavClick = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      {/* <div className="hidden md:block bg-gray-900 text-white py-2 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between text-xs uppercase tracking-widest font-bold">
          <span>ISO Compliant Standards • API 598 Tested</span>
          <span>Google Rating 5.0 (1) • Opens 8:00 AM</span>
        </div>
      </div> */}

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 hover:opacity-80 transition flex-shrink-0"
          >
            <span className="text-3xl font-black tracking-tighter" style={{ color: "#D22B2B" }}>
              SUBH
            </span>
            <div className="text-left leading-none border-l-3 border-black pl-2 uppercase text-xs font-extrabold tracking-widest">
              <p>Engineering</p>
              <p>Works</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center text-xs font-bold uppercase tracking-widest">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-700 hover:text-brand-red transition pb-1 whitespace-nowrap"
                style={{
                  borderBottom: window.location.pathname === item.path ? "2px solid #D22B2B" : "none",
                  color: window.location.pathname === item.path ? "#D22B2B" : "inherit",
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-white px-6 py-2 font-bold transition ml-4"
              style={{ backgroundColor: "#D22B2B" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-red transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-gray-200 shadow-lg">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="px-6 py-4 text-left text-sm font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-50 border-b border-gray-100 transition"
                  style={{
                    backgroundColor: window.location.pathname === item.path ? "#f3f4f6" : "transparent",
                    color: window.location.pathname === item.path ? "#D22B2B" : "inherit",
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/contact")}
                className="px-6 py-4 text-left text-sm font-bold uppercase tracking-widest text-white border-b border-gray-100 transition"
                style={{ backgroundColor: "#D22B2B" }}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}
