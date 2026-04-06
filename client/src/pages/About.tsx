/**
 * About Us Page - Subh Engineering Works
 */

import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { organizationSchema } from "@/lib/seo";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Who We Are | Subh Engineering Works"
        description="Subh Engineering Works is an industrial valve company established in 2015, offering valve manufacturing, sales, and servicing solutions across India."
        keywords="about Subh Engineering Works, industrial valve company, valve manufacturing India, valve servicing"
        canonicalUrl="https://subhengineeringworks.com/about"
        jsonLd={organizationSchema}
      />
      <Navigation />

      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Who <span style={{ color: "#D22B2B" }}>We Are</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Established in 2015, we deliver dependable industrial valve manufacturing, sales, and servicing solutions across India.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Company Overview</h2>
          <div className="h-1 w-24 mb-8" style={{ backgroundColor: "#D22B2B" }}></div>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-5xl">
            Subh Engineering Works is a dedicated industrial valve company established in 2015, offering a comprehensive range of valve manufacturing, sales, and servicing solutions. Over the years, we have built a strong reputation for reliability, quality, and technical expertise across multiple industries throughout India.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-5xl">
            We believe in building long-term relationships with our clients by delivering consistent quality, honest pricing, and responsive after-sales support. Whether you need a single valve or a bulk industrial order, we treat every project with the same level of care and commitment.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-black uppercase mb-4" style={{ color: "#D22B2B" }}>Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver high-performance industrial valve solutions that empower industries to operate safely, efficiently, and without interruption - backed by world-class manufacturing and dedicated service.
            </p>
          </div>
          <div className="bg-white border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-black uppercase mb-4" style={{ color: "#D22B2B" }}>Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a leading name in industrial valve solutions across India, recognized for innovation, quality, and an uncompromising commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Founder and Owner Profile</h2>
          <div className="h-1 w-24 mb-8" style={{ backgroundColor: "#D22B2B" }}></div>
          <div className="border-2 border-gray-200 p-8 bg-gray-50">
            <h3 className="text-2xl font-black uppercase mb-2">Hitech Bhai</h3>
            <p className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-6">Founder and Managing Director | Subh Engineering Works</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With a deep-rooted passion for engineering and industrial systems, Hitech Bhai founded Subh Engineering Works in 2015 with a clear vision - to provide industries with dependable, precision-engineered valve solutions at competitive prices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With years of hands-on experience in the valve manufacturing and servicing sector, he leads the company with a customer-first philosophy, ensuring every client receives not just a product, but a complete engineering solution. Under his leadership, Subh Engineering Works has grown into a trusted name in the industrial valve space, serving clients across diverse sectors throughout India.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Company Milestones</h2>
          <div className="h-1 w-24 mb-12" style={{ backgroundColor: "#D22B2B" }}></div>
          <div className="space-y-4">
            {[
              "2015 - Subh Engineering Works founded by Hitech Bhai",
              "2017 - Expanded product range and began Pan-India supply",
              "2019 - Launched dedicated valve servicing and maintenance division",
              "2022 - Crossed 500+ satisfied industrial clients",
              "2025 - 10 years of engineering excellence - growing stronger",
            ].map((milestone, idx) => (
              <div key={idx} className="border-l-4 pl-6 py-3 bg-white" style={{ borderLeftColor: "#D22B2B" }}>
                <p className="font-semibold text-gray-800">{milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Core Values</h2>
          <div className="h-1 w-24 mb-12" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Quality First - No compromise on materials, manufacturing, or testing",
              "Customer Trust - Honest pricing and transparent communication",
              "Technical Integrity - Expertise-driven solutions for every project",
              "Timely Delivery - Meeting deadlines is non-negotiable",
              "Continuous Improvement - Always upgrading our processes and capabilities",
            ].map((value, idx) => (
              <div key={idx} className="border border-gray-200 p-5 bg-gray-50">
                <p className="font-medium text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Build With A Trusted Valve Partner
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Partner with Subh Engineering Works for reliable valve solutions, honest support, and long-term value.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
            style={{ backgroundColor: "#D22B2B" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
