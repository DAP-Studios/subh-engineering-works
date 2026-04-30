/**
 * Home Page - Subh Engineering Works
 */

import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { organizationSchema, localBusinessSchema } from "@/lib/seo";
import { PRODUCT_CAROUSEL_ITEMS } from "@/lib/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import valveRoomImage from "../assets/heroimages/valve room.png";
import valveRoomImage2 from "../assets/heroimages/vlvroom.png";
import valveRoomImage3 from "../assets/heroimages/vlvroom2.png";
import valvesImage from "../assets/heroimages/valves.png";
import butterflyImage from "../assets/heroimages/butterfly.png";
import serviceImage from "../assets/heroimages/service.png";
import serviceImage2 from "../assets/heroimages/serv2.png";
import altValveImage from "../assets/heroimages/al vlv.png";

const HERO_CAROUSEL_IMAGES = [
  {
    src: valvesImage,
    alt: "Industrial valves display",
    category: "Valve Product",
    title: "Precision Valve Range",
  },
  {
    src: butterflyImage,
    alt: "Butterfly valve product image",
    category: "Valve Type",
    title: "Butterfly Valve Focus",
  },
  {
    src: valveRoomImage,
    alt: "Valve room industrial setup",
    category: "Industrial",
    title: "Valve Room Infrastructure",
  },
  {
    src: valveRoomImage2,
    alt: "Industrial valve room view",
    category: "Before Service",
    title: "Valve Inspection Before Service",
  },
  {
    src: serviceImage,
    alt: "Valve servicing image",
    category: "Service",
    title: "On-Site Valve Servicing",
  },
  {
    src: serviceImage2,
    alt: "Valve after service work",
    category: "After Service",
    title: "Valve Performance After Service",
  },
  {
    src: altValveImage,
    alt: "Alternate valve product image",
    category: "Valve Product",
    title: "Finished Valve Component",
  },
  {
    src: valveRoomImage3,
    alt: "Another industrial valve room image",
    category: "Industrial",
    title: "Industrial Valve Storage",
  },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const currentSlide = HERO_CAROUSEL_IMAGES[heroImageIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroImageIndex(current => (current + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextSlide =
      HERO_CAROUSEL_IMAGES[(heroImageIndex + 1) % HERO_CAROUSEL_IMAGES.length];

    [currentSlide, nextSlide].forEach(slide => {
      const image = new Image();
      image.src = slide.src;
    });
  }, [currentSlide, heroImageIndex]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead
        title="Subh Engineering Works | Industrial Valve Manufacturing, Sales and Servicing"
        description="Precision valves and reliable solutions for industrial valve manufacturing, sales, and servicing across India. Established 2015."
        keywords="industrial valves, valve manufacturing, valve sales, valve servicing, Subh Engineering Works, Gujarat"
        canonicalUrl="https://subhengineeringworks.com/"
        jsonLd={[organizationSchema, localBusinessSchema]}
      />
      <Navigation />

      <header
        className="relative overflow-hidden border-b-8 bg-neutral-950 text-white"
        style={{ borderBottomColor: "#D22B2B" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(210,43,43,0.25),transparent_45%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.1),transparent_35%)]" />
        <div className="absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl animate-hero-glow" />
        <div className="absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-hero-float" />
        <div className="absolute inset-y-0 left-[-10%] w-[130%] bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.05)_50%,transparent_65%)] animate-hero-sweep" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 grid gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 items-center">
          <div className="order-2">
            <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-2 mb-5 sm:mb-7">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "#D22B2B" }}
              />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-white/90">
                Industrial Valve Specialists Since 2015
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] mb-4 sm:mb-5">
              Heavy-Duty Valves
              <br />
              <span style={{ color: "#D22B2B" }}>
                For Critical Flow Systems
              </span>
            </h1>

            <p className="text-white/80 max-w-xl text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              We manufacture, supply, and service industrial valves designed for
              high pressure, high temperature, and demanding plant operations
              across oil, chemical, water, and utility sectors.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-2xl">
              {[
                { label: "Gate", value: "PN16-PN40" },
                { label: "Globe", value: "Class 150+" },
                { label: "Ball", value: "2PC/3PC" },
                { label: "Butterfly", value: "Wafer/Lug" },
              ].map(item => (
                <div
                  key={item.label}
                  className="border border-white/15 bg-white/5 px-3 py-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/70 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <button
                onClick={() => setLocation("/products")}
                className="text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition shadow-lg"
                style={{ backgroundColor: "#D22B2B" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                View Valve Range
              </button>
              <button
                onClick={() => setLocation("/contact")}
                className="border-2 border-white/80 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition"
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Request Industrial Quote
              </button>
            </div>
          </div>

          <div className="relative order-1">
            <div className="h-[260px] sm:h-[380px] md:h-[500px] border border-white/20 shadow-2xl overflow-hidden relative bg-black/30">
              {HERO_CAROUSEL_IMAGES.map((slide, index) => (
                <img
                  key={`${slide.src}-${index}`}
                  src={slide.src}
                  alt={slide.alt}
                  loading={index === heroImageIndex ? "eager" : "lazy"}
                  fetchPriority={index === heroImageIndex ? "high" : "low"}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === heroImageIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(210,43,43,0.18),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_28%)] animate-hero-glow" />

              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 border border-white/50 bg-black/60 px-2.5 sm:px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                {currentSlide.category}
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <p className="text-sm sm:text-lg md:text-xl font-black uppercase leading-tight mb-2 sm:mb-3">
                  {currentSlide.title}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {HERO_CAROUSEL_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show slide ${index + 1}`}
                      onClick={() => setHeroImageIndex(index)}
                      className={`h-1.5 transition-all ${index === heroImageIndex ? "w-8 bg-[#D22B2B]" : "w-5 bg-white/50 hover:bg-white/80"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden sm:grid mt-3 grid-cols-4 gap-2 md:grid-cols-8">
              {HERO_CAROUSEL_IMAGES.map((slide, index) => (
                <button
                  key={`thumb-${slide.src}-${index}`}
                  type="button"
                  onClick={() => setHeroImageIndex(index)}
                  className={`relative h-16 overflow-hidden border transition ${index === heroImageIndex ? "border-[#D22B2B] scale-[1.02]" : "border-white/20 opacity-70 hover:opacity-100"}`}
                  aria-label={`Show ${slide.category} image ${index + 1}`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 bg-gray-50 border border-gray-200 p-5">
            <p className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">
              Google Business Snapshot
            </p>
            <p className="font-semibold text-gray-900">
              Subh Engineering Works • 5.0 (1 review) • Opens 8:00 AM
            </p>
            <p className="text-gray-700 mt-2 italic">
              "Well experienced valve repairing and valve supplier."
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">
            About Subh Engineering Works
          </h2>
          <div
            className="h-1 w-24 mb-8"
            style={{ backgroundColor: "#D22B2B" }}
          ></div>
          <p className="text-gray-700 max-w-4xl mb-12 leading-relaxed">
            At Subh Engineering Works, we specialize in the manufacturing,
            supply, and servicing of high-quality industrial valves for a wide
            range of industries. With over a decade of hands-on expertise, we
            deliver valves that meet stringent industrial standards - on time,
            every time.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Since", value: "Est. 2015" },
              { label: "Experience", value: "10+ Years" },
              { label: "Services", value: "Mfg + Sales + Service" },
              { label: "Coverage", value: "Pan-India" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-200 p-6 bg-gray-50"
              >
                <p className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-2">
                  {item.label}
                </p>
                <p className="text-xl font-black uppercase">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200 bg-neutral-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/60 font-bold mb-3">
                Featured Products
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tight">
                Product Carousel
              </h2>
            </div>
            <button
              onClick={() => setLocation("/products")}
              className="self-start border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              View All Products
            </button>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="relative">
            <CarouselContent>
              {PRODUCT_CAROUSEL_ITEMS.map(item => (
                <CarouselItem
                  key={item.title}
                  className="basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="group h-full overflow-hidden border border-white/15 bg-white/5">
                    <div className="relative aspect-[4/3] bg-black">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute left-4 top-4 border border-white/30 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        {item.badge}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-black uppercase leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm leading-relaxed text-white/75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-white/20 bg-neutral-900 text-white hover:bg-white/10" />
            <CarouselNext className="hidden md:flex border-white/20 bg-neutral-900 text-white hover:bg-white/10" />
          </Carousel>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">
            Why Choose Us
          </h2>
          <div
            className="h-1 w-24 mb-16"
            style={{ backgroundColor: "#D22B2B" }}
          ></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Quality Assured",
                desc: "Every valve is manufactured and tested to meet industry and safety standards before delivery.",
              },
              {
                name: "End-to-End Solutions",
                desc: "From procurement and supply to on-site installation and maintenance - we handle it all.",
              },
              {
                name: "Expert Support",
                desc: "Our experienced team provides prompt technical assistance and after-sales service.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-200 p-8 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-black uppercase mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">
            Industries Served
          </h2>
          <div
            className="h-1 w-24 mb-16"
            style={{ backgroundColor: "#D22B2B" }}
          ></div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Oil and Gas",
              "Chemical and Petrochemical",
              "Water Treatment",
              "Power Generation",
              "Pharmaceuticals",
              "Food and Beverage",
              "Steel and Metals",
              "HVAC and Utilities",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-5 font-semibold text-gray-800"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
            Need Product or Service Support?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Connect with our team for product details, servicing support, and
            customized industrial valve solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setLocation("/services")}
              className="text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
              style={{ backgroundColor: "#D22B2B" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Our Services
            </button>
            <button
              onClick={() => setLocation("/contact")}
              className="border-2 border-white text-white px-10 py-6 text-sm font-bold uppercase tracking-widest transition"
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
