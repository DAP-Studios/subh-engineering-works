/**
 * Contact Page - Subh Engineering Works
 * Design: Industrial Minimalism
 * - Contact information
 * - Inquiry form
 * - Location details
 */

import { useLocation } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    valveType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! Our team will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", valveType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Get in <span style={{ color: "#D22B2B" }}>Touch</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Contact our team for quotes, technical support, or to discuss your valve requirements.
          </p>
        </div>
      </header>

      {/* Contact Information & Form */}
      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Contact Information</h2>
            <div className="h-1 w-24 mb-12" style={{ backgroundColor: "#D22B2B" }}></div>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Address</p>
                <p className="text-lg font-semibold text-gray-900">
                  Subh Engineering Works<br />
                  Vapi, Gujarat 396195<br />
                  India
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Phone</p>
                <p className="text-lg font-semibold text-gray-900">+91 6464646464</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Email</p>
                <p className="text-lg font-semibold text-gray-900">info@subhengineering.com</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Business Hours</p>
                <p className="text-lg font-semibold text-gray-900">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-4">24/7 Emergency Support</p>
                <p className="text-lg font-semibold" style={{ color: "#D22B2B" }}>
                  +91 9999999999
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-black uppercase mb-8">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none"
                  style={{ "--tw-border-opacity": "1" } as any}
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Valve Type of Interest
                </label>
                <select
                  name="valveType"
                  value={formData.valveType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none"
                >
                  <option value="">Select a valve type</option>
                  <option value="gate">Gate Valve</option>
                  <option value="globe">Globe Valve</option>
                  <option value="check">Check Valve</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white py-4 text-sm font-bold uppercase tracking-widest transition"
                style={{ backgroundColor: "#D22B2B" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Our Location</h2>
          <div className="h-1 w-24 mb-12" style={{ backgroundColor: "#D22B2B" }}></div>

          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 font-semibold">Map Integration Coming Soon</p>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Have Questions?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Check our FAQ section for answers to common questions about our products and services.
          </p>
          <button
            onClick={() => setLocation("/faq")}
            className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
            style={{ backgroundColor: "#D22B2B" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Visit FAQ
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
