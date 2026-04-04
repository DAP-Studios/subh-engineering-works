/**
 * Contact Page - Subh Engineering Works
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
    requirementType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Something went wrong. Please try again or call us directly.");
      return;
    }
    alert("Thank you for reaching out! Our team will contact you within 24 business hours.");
    setFormData({ name: "", email: "", phone: "", company: "", requirementType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <header className="relative min-h-[350px] bg-gray-900 text-white flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6">
            Get In <span style={{ color: "#D22B2B" }}>Touch</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Have a requirement, a question, or need a quote? Our team is ready to assist you.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Contact Details</h2>
            <div className="h-1 w-24 mb-12" style={{ backgroundColor: "#D22B2B" }}></div>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Company Name</p>
                <p className="text-lg font-semibold text-gray-900">Subh Engineering Works</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Owner / Founder</p>
                <p className="text-lg font-semibold text-gray-900">Hitech Bhai</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Phone / WhatsApp</p>
                <p className="text-lg font-semibold text-gray-900">+91 XXXXX XXXXX</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Email</p>
                <p className="text-lg font-semibold text-gray-900">info@subhengineeringworks.com</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Address</p>
                <p className="text-lg font-semibold text-gray-900">[Your full address], Gujarat, India</p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">Working Hours</p>
                <p className="text-lg font-semibold text-gray-900">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-black uppercase mb-8">Send Enquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Requirement Type</label>
                <select name="requirementType" value={formData.requirementType} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none">
                  <option value="">Select requirement type</option>
                  <option value="sales">Sales</option>
                  <option value="service">Service</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Message / Enquiry Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border-2 border-gray-300 focus:border-brand-red focus:outline-none" />
              </div>

              <button type="submit" className="w-full text-white py-4 text-sm font-bold uppercase tracking-widest transition" style={{ backgroundColor: "#D22B2B" }}>
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Google Maps</h2>
          <div className="h-1 w-24 mb-12" style={{ backgroundColor: "#D22B2B" }}></div>
          <div className="bg-gray-300 rounded-lg h-72 flex items-center justify-center">
            <p className="text-gray-700 font-semibold">Embed your Google Maps location link here</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">Need Quick Support?</h2>
          <p className="text-lg mb-10 text-gray-300">Our team is ready to assist with sales, service, and manufacturing enquiries.</p>
          <button onClick={() => setLocation("/faq")} className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition" style={{ backgroundColor: "#D22B2B" }}>
            Visit FAQ
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
