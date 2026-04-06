/**
 * Mobile Navigation Component
 * Hamburger menu for mobile devices
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { X, Menu } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    setLocation(path);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-brand-red transition"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-gray-200 shadow-lg z-40">
          <nav className="flex flex-col">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.path)}
                className="px-6 py-4 text-left text-sm font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-50 hover:text-brand-red border-b border-gray-100 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
