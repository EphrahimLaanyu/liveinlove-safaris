"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { BRAND_INFO, TRUST_STATS } from "@/data/homepageData";

export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // Show exact confirmation message from liveinlovekenyatoursandtravel.com/contact
    setStatus("success");

    // Optional: Open WhatsApp or mailto pre-filled so no lead is ever lost
    const text = `New Website Inquiry%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Email:* ${encodeURIComponent(
      formData.email
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-[#F6F3EC] text-[#1C261E] selection:bg-[#1C261E] selection:text-[#F6F3EC]">
      {/* =========================================================
          1. EDITORIAL HERO — ABOUT US HEADER
      ========================================================= */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 max-w-[1400px] mx-auto px-6 sm:px-12 border-b border-[#1C261E]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D3F] mb-5">
              About Us &amp; Contact • Est. 2011
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[80px] font-normal tracking-tight leading-[1.02] text-[#1C261E]">
              Connecting Guests With Nature, Culture &amp; the{" "}
              <span className="italic text-[#8C6D3F]">Spirit of Africa.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2 flex lg:justify-end">
            <a
              href="#contact-section"
              className="text-xs uppercase tracking-[0.2em] text-[#1C261E] border-b border-[#1C261E] pb-1 hover:opacity-60 transition-opacity inline-flex items-center gap-2"
            >
              <span>Jump to Contact Form</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. VERBATIM "ABOUT US" STORY & GALLERY
      ========================================================= */}
      <section className="py-20 sm:py-32 max-w-[1400px] mx-auto px-6 sm:px-12 border-b border-[#1C261E]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Frameless Editorial Photography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E5E0D5]">
              <Image
                src="/conservation-ranger.jpg"
                alt="Live in Love Kenya Tours and Travel Guides"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E5E0D5]">
                <Image
                  src="/elephants-greeting.jpg"
                  alt="Elephant Orphanage & Nairobi Excursions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E5E0D5]">
                <Image
                  src="/giza-hero.jpg"
                  alt="4x4 Land Cruiser Safari"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Verbatim About Us Copy */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D3F] block mb-4">
              01 / Our Story
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.12] text-[#1C261E] mb-8">
              Registered with the Kenya Tourism Board Since 2011.
            </h2>

            <div className="space-y-6 text-base sm:text-[17px] text-[#1C261E]/80 leading-relaxed">
              <p>
                <strong className="text-[#1C261E] font-medium">
                  Live in Love Kenya Tours and Travel
                </strong>{" "}
                is a Nairobi-based tour company, fully registered with the Kenya
                Tourism Board since 2011. With over a decade of experience, we
                are passionate about showcasing the beauty of Africa while
                promoting sustainable tourism and the conservation of wildlife
                and natural ecosystems.
              </p>

              <p>
                We specialize in curated travel experiences, including daily
                game drives in Nairobi National Park and immersive city tours
                featuring iconic attractions such as the Elephant Orphanage and
                the Giraffe Centre. Beyond Nairobi, we organize unforgettable
                safari adventures across Kenya&apos;s renowned national parks
                and reserves, offering our clients authentic and memorable
                journeys.
              </p>

              <p>
                Our team consists of professional, well-trained guides and
                drivers who bring deep knowledge, experience, and a commitment
                to excellent customer service. At Live in Love Kenya Tours and
                Travel, we strive to create meaningful travel experiences that
                connect our guests with nature, culture, and the spirit of
                Africa.
              </p>
            </div>

            {/* Minimalist Hairline Stats */}
            <div className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-[#1C261E]/15">
              {TRUST_STATS.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif text-3xl text-[#1C261E]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#1C261E]/60 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#1C261E]/15">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1C261E] border-b border-[#1C261E] pb-1 hover:opacity-60 transition-opacity"
              >
                <span>Discover Our 15 Curated Tours</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. VERBATIM "CONTACT US" SECTION & MINIMALIST FORM
      ========================================================= */}
      <section
        id="contact-section"
        className="py-24 sm:py-32 bg-[#EFECE3] border-b border-[#1C261E]/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Direct Contact Details */}
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D3F] block mb-4">
                02 / Contact Us
              </span>

              <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight leading-[1.06] text-[#1C261E]">
                We&apos;d love to hear from you.
              </h2>

              <p className="mt-5 text-sm sm:text-base text-[#1C261E]/75 leading-relaxed">
                Choose the most convenient method and we&apos;ll get back to you
                as soon as we can.
              </p>

              {/* Hairline Contact Info List */}
              <div className="mt-12 space-y-8 border-t border-[#1C261E]/15 pt-8">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8C6D3F] mb-1">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="font-serif text-2xl sm:text-3xl text-[#1C261E] hover:text-[#8C6D3F] transition-colors"
                  >
                    +254 711890451
                  </a>
                </div>

                <div className="border-t border-[#1C261E]/10 pt-6">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8C6D3F] mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:liveinlovetours@gmail.com"
                    className="font-serif text-2xl sm:text-3xl text-[#1C261E] hover:text-[#8C6D3F] transition-colors break-all"
                  >
                    liveinlovetours@gmail.com
                  </a>
                </div>

                <div className="border-t border-[#1C261E]/10 pt-6">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8C6D3F] mb-1">
                    Office Location
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl text-[#1C261E]">
                    Langata Road, Nairobi, KE
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Minimalist Architectural Contact Form */}
            <div className="lg:col-span-7 bg-[#F6F3EC] p-8 sm:p-14 border border-[#1C261E]/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="border-b border-[#1C261E]/20 pb-3 focus-within:border-[#1C261E] transition-colors">
                  <label
                    htmlFor="name"
                    className="block text-[10px] uppercase tracking-[0.22em] text-[#1C261E]/60 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full bg-transparent text-base text-[#1C261E] placeholder:text-[#1C261E]/30 focus:outline-none"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-b border-[#1C261E]/20 pb-3 focus-within:border-[#1C261E] transition-colors">
                    <label
                      htmlFor="email"
                      className="block text-[10px] uppercase tracking-[0.22em] text-[#1C261E]/60 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full bg-transparent text-base text-[#1C261E] placeholder:text-[#1C261E]/30 focus:outline-none"
                    />
                  </div>

                  <div className="border-b border-[#1C261E]/20 pb-3 focus-within:border-[#1C261E] transition-colors">
                    <label
                      htmlFor="phone"
                      className="block text-[10px] uppercase tracking-[0.22em] text-[#1C261E]/60 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 / +44 / +254..."
                      className="w-full bg-transparent text-base text-[#1C261E] placeholder:text-[#1C261E]/30 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="border-b border-[#1C261E]/20 pb-3 focus-within:border-[#1C261E] transition-colors">
                  <label
                    htmlFor="message"
                    className="block text-[10px] uppercase tracking-[0.22em] text-[#1C261E]/60 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us which tour, dates, or group size you are planning for..."
                    className="w-full bg-transparent text-base text-[#1C261E] placeholder:text-[#1C261E]/30 focus:outline-none resize-none"
                  />
                </div>

                {/* Verbatim Status Messages */}
                {status === "success" && (
                  <div className="p-4 bg-[#1C261E] text-[#F6F3EC] text-xs tracking-wide flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C89D54] shrink-0" />
                    <span>
                      Thank you for contacting us. We will get back to you as
                      soon as possible.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-900/10 border border-red-900/30 text-red-900 text-xs tracking-wide">
                    Oops, there was an error sending your message. Please try
                    again later.
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="bg-[#1C261E] hover:bg-[#C89D54] text-[#F6F3EC] hover:text-[#1C261E] px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="mailto:liveinlovetours@gmail.com"
                    className="text-[11px] uppercase tracking-[0.18em] text-[#1C261E]/60 hover:text-[#1C261E] transition-colors"
                  >
                    Or email liveinlovetours@gmail.com directly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}