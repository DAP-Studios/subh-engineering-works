import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
/**
 * Valve Comparison Tool - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Interactive product comparison
 * - Side-by-side specifications
 * - Selection guidance
 */

import { useState } from "react";
import { useLocation } from "wouter";

export default function Comparison() {
  const [, setLocation] = useLocation();
  const [selectedValves, setSelectedValves] = useState<string[]>(["gate", "globe"]);

  const valveData: Record<string, any> = {
    gate: {
      name: "Gate Valve",
      standard: "API 600 / 602 / IS 14846",
      sizeRange: "1/2 inch to 48 inch",
      pressureClass: "150# to 2500#",
      operation: "Manual / Gear",
      materials: "SS / CS / Ductile Iron",
      flowCharacteristic: "Full Port - Minimal Pressure Drop",
      bestFor: "Isolation and on-off flow control",
      advantages: [
        "Full port design for minimal pressure drop",
        "Bidirectional sealing capability",
        "Low operating torque",
        "Wide size range available",
        "Cost-effective solution",
      ],
      disadvantages: [
        "Not suitable for throttling",
        "Cavitation risk at high differential pressures",
        "Slower operation than ball valves",
      ],
      applications: [
        "Oil and Gas pipelines",
        "Power plant steam lines",
        "Water distribution systems",
        "Chemical processing",
      ],
      leadTime: "4-6 weeks",
      price: "$$$",
    },
    globe: {
      name: "Globe Valve",
      standard: "BS 1873 / API 600",
      sizeRange: "1/2 inch to 24 inch",
      pressureClass: "150# to 2500#",
      operation: "Manual / Actuator",
      materials: "SS / CS / Brass",
      flowCharacteristic: "Throttling - Precise Control",
      bestFor: "Flow regulation and throttling",
      advantages: [
        "Excellent flow control characteristics",
        "Precise throttling capability",
        "Easy maintenance and repair",
        "Low leakage rates",
        "Suitable for high-pressure applications",
      ],
      disadvantages: [
        "Higher pressure drop than gate valves",
        "Requires higher operating torque",
        "Limited to smaller sizes",
        "More expensive than gate valves",
      ],
      applications: [
        "Pharmaceutical processes",
        "HVAC systems",
        "Steam heating systems",
        "Precision flow control",
      ],
      leadTime: "3-5 weeks",
      price: "$$$$",
    },
    check: {
      name: "Check Valve",
      standard: "API 6D / BS 1868",
      sizeRange: "2 inch to 60 inch",
      pressureClass: "150# to 2500#",
      operation: "Automatic (No Manual Control)",
      materials: "SS / CS / Ductile Iron",
      flowCharacteristic: "One-Way Flow - Backflow Prevention",
      bestFor: "Backflow prevention and protection",
      advantages: [
        "Automatic operation - no manual control needed",
        "Prevents reverse flow and backflow",
        "Protects equipment from damage",
        "Available in large diameters",
        "Low maintenance requirements",
      ],
      disadvantages: [
        "Cannot be used for flow control",
        "Cracking pressure must be carefully selected",
        "Water hammer risk if not properly installed",
      ],
      applications: [
        "Pipeline systems",
        "Pump discharge lines",
        "Compressor systems",
        "Industrial fluid systems",
      ],
      leadTime: "5-7 weeks",
      price: "$$$",
    },
  };

  const toggleValve = (valve: string) => {
    if (selectedValves.includes(valve)) {
      setSelectedValves(selectedValves.filter((v) => v !== valve));
    } else if (selectedValves.length < 3) {
      setSelectedValves([...selectedValves, valve]);
    }
  };

  const specs = [
    "name",
    "standard",
    "sizeRange",
    "pressureClass",
    "operation",
    "materials",
    "flowCharacteristic",
    "bestFor",
    "leadTime",
    "price",
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
      <header className="relative min-h-[300px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Valve <span className="text-brand-red">Comparison</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Compare our valve types side-by-side to find the perfect solution for your application.
          </p>
        </div>
      </header>

      {/* Valve Selection */}
      <section className="bg-gray-50 py-12 px-6 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-4">
            Select valves to compare (up to 3):
          </p>
          <div className="flex gap-4 flex-wrap">
            {Object.keys(valveData).map((valve) => (
              <button
                key={valve}
                onClick={() => toggleValve(valve)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-widest transition ${
                  selectedValves.includes(valve)
                    ? "bg-brand-red text-white"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-brand-red"
                }`}
              >
                {valveData[valve].name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs uppercase tracking-widest">
              <thead className="bg-black text-white font-bold border-b-4 border-brand-red">
                <tr>
                  <th className="p-6 w-32">Specification</th>
                  {selectedValves.map((valve) => (
                    <th key={valve} className="p-6 min-w-64">
                      {valveData[valve].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {specs.map((spec) => (
                  <tr key={spec} className="hover:bg-gray-50 transition">
                    <td className="p-6 font-black text-gray-900 bg-gray-50">
                      {spec === "name"
                        ? "Product"
                        : spec === "sizeRange"
                        ? "Size Range"
                        : spec === "pressureClass"
                        ? "Pressure Class"
                        : spec === "flowCharacteristic"
                        ? "Flow Characteristic"
                        : spec === "bestFor"
                        ? "Best For"
                        : spec === "leadTime"
                        ? "Lead Time"
                        : spec.charAt(0).toUpperCase() + spec.slice(1)}
                    </td>
                    {selectedValves.map((valve) => (
                      <td key={valve} className="p-6 text-gray-700 font-medium">
                        {valveData[valve][spec]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-16">Detailed Comparison</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {selectedValves.map((valve) => (
              <div key={valve} className="bg-white border-2 border-gray-200 p-8">
                <h3 className="text-2xl font-black uppercase mb-8 text-brand-red">
                  {valveData[valve].name}
                </h3>

                <div className="mb-8">
                  <h4 className="text-sm font-black uppercase text-gray-700 mb-4">Advantages</h4>
                  <ul className="space-y-3">
                    {valveData[valve].advantages.map((adv: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-brand-red font-black">✓</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-black uppercase text-gray-700 mb-4">Disadvantages</h4>
                  <ul className="space-y-3">
                    {valveData[valve].disadvantages.map((dis: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-brand-red font-black">✕</span>
                        <span>{dis}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-black uppercase text-gray-700 mb-4">Applications</h4>
                  <ul className="space-y-2">
                    {valveData[valve].applications.map((app: string, idx: number) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Selection Guide</h2>
          <div className="h-1 w-24 bg-brand-red mb-16"></div>

          <div className="bg-gray-50 p-8 border-l-4 border-brand-red">
            <h3 className="text-xl font-black uppercase mb-6">How to Choose the Right Valve</h3>
            <div className="space-y-6">
              <div>
                <p className="font-black uppercase text-sm text-gray-700 mb-2">1. Identify Your Application</p>
                <p className="text-gray-600">
                  Determine if you need isolation (on-off), flow control (throttling), or backflow prevention.
                </p>
              </div>
              <div>
                <p className="font-black uppercase text-sm text-gray-700 mb-2">2. Check Operating Conditions</p>
                <p className="text-gray-600">
                  Consider pressure, temperature, flow rate, and fluid type in your system.
                </p>
              </div>
              <div>
                <p className="font-black uppercase text-sm text-gray-700 mb-2">3. Verify Standards Compliance</p>
                <p className="text-gray-600">
                  Ensure the valve meets required standards (API, BS, ISO) for your industry.
                </p>
              </div>
              <div>
                <p className="font-black uppercase text-sm text-gray-700 mb-2">4. Consider Material Compatibility</p>
                <p className="text-gray-600">
                  Select appropriate materials for corrosive or high-temperature environments.
                </p>
              </div>
              <div>
                <p className="font-black uppercase text-sm text-gray-700 mb-2">5. Consult Our Engineers</p>
                <p className="text-gray-600">
                  Our technical team can provide personalized recommendations for your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Contact our technical team for personalized recommendations based on your specific application requirements.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="bg-brand-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition"
          >
            Get Expert Advice
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
