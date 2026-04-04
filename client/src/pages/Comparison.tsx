import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { breadcrumbSchema } from "@/lib/seo";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Comparison() {
  const [, setLocation] = useLocation();
  const [selectedValves, setSelectedValves] = useState<string[]>(["gate", "globe"]);

  const valveData: Record<string, any> = {
    gate: {
      name: "Gate Valve",
      bestFor: "On-off isolation",
      operation: "Manual or gear",
      pressureClass: "150# to 2500#",
      materialOptions: "Cast Iron, CS, SS, Brass",
      notes: "Best where low pressure drop and shutoff are primary needs.",
    },
    globe: {
      name: "Globe Valve",
      bestFor: "Flow regulation",
      operation: "Manual or actuated",
      pressureClass: "150# to 2500#",
      materialOptions: "CS, SS, Alloy options",
      notes: "Useful when throttling and control accuracy are important.",
    },
    check: {
      name: "Check Valve",
      bestFor: "Backflow prevention",
      operation: "Automatic",
      pressureClass: "150# to 2500#",
      materialOptions: "CI, CS, SS",
      notes: "Protects pumps and process lines from reverse flow.",
    },
  };

  const toggleValve = (valve: string) => {
    if (selectedValves.includes(valve)) {
      setSelectedValves(selectedValves.filter((v) => v !== valve));
    } else if (selectedValves.length < 3) {
      setSelectedValves([...selectedValves, valve]);
    }
  };

  const jsonLd = breadcrumbSchema([
    { name: "Home", url: "https://subh-engineering-works.manus.space/" },
    { name: "Comparison", url: "https://subh-engineering-works.manus.space/comparison" },
  ]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Valve Comparison Tool | Gate vs Globe vs Check"
        description="Compare Gate, Globe, and Check valves side-by-side for operation type, pressure class, materials, and application suitability."
        keywords="gate valve vs globe valve, check valve comparison, industrial valve selection"
        canonicalUrl="https://subh-engineering-works.manus.space/comparison"
        jsonLd={jsonLd}
      />
      <Navigation />

      <header className="relative min-h-[300px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Valve <span className="text-brand-red">Comparison</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Quickly compare core valve types to shortlist the right option for your application.
          </p>
        </div>
      </header>

      <section className="bg-gray-50 py-10 px-6 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-4">Select up to 3 valves:</p>
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

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <table className="w-full text-left border border-gray-200">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 uppercase text-xs tracking-widest">Specification</th>
                {selectedValves.map((valve) => (
                  <th key={valve} className="p-4 uppercase text-xs tracking-widest min-w-52">{valveData[valve].name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["bestFor", "operation", "pressureClass", "materialOptions", "notes"].map((spec) => (
                <tr key={spec} className="border-t border-gray-200">
                  <td className="p-4 font-bold text-sm uppercase text-gray-700">{spec}</td>
                  {selectedValves.map((valve) => (
                    <td key={valve} className="p-4 text-gray-700">{valveData[valve][spec]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Need a Recommendation?</h2>
          <p className="text-lg mb-10 text-gray-300">
            Share media, pressure, and temperature details to get the right valve recommendation.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="bg-brand-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-brand-red-dark transition"
          >
            Get Expert Advice
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
