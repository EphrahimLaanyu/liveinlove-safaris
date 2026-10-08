// src/app/home/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  BRAND_INFO,
  TRUST_STATS,
  NAIROBI_EXCURSIONS,
  SIGNATURE_SAFARIS,
  TRIPADVISOR_REVIEWS,
} from "@/data/homepageData";

export default function Hero() {
  const [safariTab, setSafariTab] = useState<"all" | "day-trip" | "multi-day">(
    "all"
  );
  const [quickFilterDuration, setQuickFilterDuration] = useState("nairobi");
  const [quickFilterVehicle, setQuickFilterVehicle] = useState("4x4");

  const filteredSafaris =
    safariTab === "all"
      ? SIGNATURE_SAFARIS
      : SIGNATURE_SAFARIS.filter((item) => item.category === safariTab);

  return (
    <div className="w-full min-h-screen bg-[#F6F3EC] text-[#1C261E] selection:bg-[#1C261E] selection:text-[#F6F3EC]">
      {/* =========================================================
          1. HERO SECTION + INTERACTIVE SAFARI FINDER (MINIMALIST)
      ========================================================= */}
      <section className="relative min-h-[92vh] pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-[#1C261E] text-[#F6F3EC]">
        {/* Background Hero Image from Bókun CDN */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://imgcdn.bokun.tools/ad479625-e57b-4789-b476-5ef39ab0305a.jpeg"
            alt="Live in Love Kenya Safari Landscape"
            fill
            priority
            className="object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C261E] via-[#1C261E]/40 to-[#1C261E]/50" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-12 w-full">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C89D54] mb-6">
              Registered with Kenya Tourism Board Since 2011
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[82px] font-normal text-[#F6F3EC] leading-[1.02] tracking-tight">
              Wild Adventures. <br />
              <span className="italic font-normal text-[#C89D54]">
                Beautiful Memories.
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-[#F6F3EC]/85 max-w-2xl leading-relaxed font-normal">
              From daily 4x4 Land Cruiser game drives in{" "}
              <strong className="text-white font-medium">
                Nairobi National Park
              </strong>{" "}
              just 28 minutes from the city center to bespoke expeditions across
              the{" "}
              <strong className="text-white font-medium">
                Maasai Mara, Samburu, Ol Pejeta & Amboseli
              </strong>
              .
            </p>

            {/* Primary Hero Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="#nairobi-park"
                className="bg-[#F6F3EC] hover:bg-[#C89D54] text-[#1C261E] px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors inline-flex items-center gap-2"
              >
                Explore Nairobi Game Drives
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#signature-safaris"
                className="text-[#F6F3EC] border-b border-[#F6F3EC]/40 hover:border-[#C89D54] hover:text-[#C89D54] pb-1 text-xs uppercase tracking-[0.2em] transition-colors"
              >
                Discover Multi-Day Safaris
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Trip Finder Bar at Bottom of Hero */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          <div className="bg-[#F6F3EC] text-[#1C261E] p-6 sm:p-8 border-t border-[#1C261E]/10 grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
            <div className="border-b border-[#1C261E]/20 pb-2">
              <label className="block text-[10px] uppercase tracking-[0.22em] text-[#1C261E]/50 mb-2">
                1. Choose Destination / Style
              </label>
              <select
                value={quickFilterDuration}
                onChange={(e) => setQuickFilterDuration(e.target.value)}
                className="w-full bg-transparent text-sm font-normal text-[#1C261E] focus:outline-none cursor-pointer"
              >
                <option value="nairobi">
                  Nairobi National Park (4 Hrs / Full Day)
                </option>
                <option value="layover">
                  JKIA Airport Layover Safari (6+ Hrs)
                </option>
                <option value="daytrip">
                  Rift Valley Day Trip / Overnight (1–2 Days)
                </option>
                <option value="multiday">
                  Multi-Day Kenya Expedition (3–7 Days)
                </option>
              </select>
            </div>

            <div className="border-b border-[#1C261E]/20 pb-2">
              <label className="block text-[10px] uppercase tracking-[0.22em] text-[#1C261E]/50 mb-2">
                2. Preferred Safari Vehicle
              </label>
              <select
                value={quickFilterVehicle}
                onChange={(e) => setQuickFilterVehicle(e.target.value)}
                className="w-full bg-transparent text-sm font-normal text-[#1C261E] focus:outline-none cursor-pointer"
              >
                <option value="4x4">
                  Private 4x4 Land Cruiser Jeep (Pop-Up Roof)
                </option>
                <option value="joining">Small-Group Joining 4x4 Jeep</option>
                <option value="overland">
                  Overland Safari Truck (Large Groups)
                </option>
              </select>
            </div>

            <div className="border-b border-[#1C261E]/20 pb-2">
              <label className="block text-[10px] uppercase tracking-[0.22em] text-[#1C261E]/50 mb-2">
                3. Worry-Free Logistics
              </label>
              <div className="text-sm text-[#1C261E]">
                <span>Hotel/JKIA Pickup + KWS Ticket Help</span>
              </div>
            </div>

            <div>
              <a
                href={
                  quickFilterDuration === "nairobi" ||
                  quickFilterDuration === "layover"
                    ? "#nairobi-park"
                    : "#signature-safaris"
                }
                className="w-full bg-[#1C261E] hover:bg-[#2c3b2f] text-[#F6F3EC] py-4 px-6 text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
              >
                Show Matching Tours
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C89D54]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. AUTHORITY & TRUST STRIP
      ========================================================= */}
      <section className="border-b border-[#1C261E]/10 py-14">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="border-l border-[#1C261E]/15 pl-6">
                <p className="font-serif text-3xl sm:text-4xl font-normal text-[#1C261E]">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#1C261E] mt-2">
                  {stat.label}
                </p>
                <p className="text-xs text-[#1C261E]/60 mt-1">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. NAIROBI NATIONAL PARK SPOTLIGHT (CONSOLIDATED)
      ========================================================= */}
      <section
        id="nairobi-park"
        className="py-24 sm:py-32 max-w-[1400px] mx-auto px-6 sm:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9C6B2F] block mb-3">
              The World&apos;s Only Wildlife Capital • 28 Mins From City Center
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C261E] tracking-tight leading-[1.06]">
              Nairobi National Park &amp; City Sanctuaries
            </h2>
          </div>
          <p className="lg:col-span-5 text-sm sm:text-base text-[#1C261E]/70 leading-relaxed">
            Hear the earth-tumbling roar of lions, track black and white rhinos,
            and watch hippos and crocodiles gather at the dams—all with the
            Nairobi skyline on the horizon. Available daily from{" "}
            <strong className="text-[#1C261E] font-medium">
              6:00 AM to 7:00 PM
            </strong>
            .
          </p>
        </div>

        {/* 3 Curated Flagship Nairobi Items — Frameless Editorial Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-16">
          {NAIROBI_EXCURSIONS.map((tour) => (
            <article
              key={tour.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Frameless 4:5 Image from Bókun CDN */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E5E0D5] mb-6">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Minimal Meta Line */}
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#1C261E]/55 pb-3 mb-4 border-b border-[#1C261E]/10">
                  <span>{tour.duration}</span>
                  <span>{tour.vehicle}</span>
                </div>

                <p className="text-[11px] uppercase tracking-[0.2em] text-[#9C6B2F] mb-2">
                  {tour.badge}
                </p>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C261E] leading-snug">
                  {tour.title}
                </h3>

                <p className="mt-3 text-sm text-[#1C261E]/70 leading-relaxed">
                  {tour.shortDescription}
                </p>

                {/* Clean Hairline Highlights List */}
                <ul className="mt-6 space-y-2 border-t border-[#1C261E]/10 pt-4">
                  {tour.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-[#1C261E]/75 flex items-start gap-2"
                    >
                      <span className="text-[#9C6B2F]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimal Action Link */}
              <div className="mt-8 pt-4 border-t border-[#1C261E]/10">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Live%20in%20Love%20Kenya,%20I%20want%20to%20book%20the%20${encodeURIComponent(
                    tour.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1C261E] group-hover:translate-x-1 transition-transform"
                >
                  Book This Excursion
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Overland Truck & Large Group Callout Banner — Minimal Architectural Strip */}
        <div className="mt-24 pt-12 border-t border-[#1C261E]/15 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C261E]">
              Travelling with a Large Group, Family or Multi-Country Expedition?
            </h4>
            <p className="text-sm text-[#1C261E]/70 mt-2 leading-relaxed">
              Book our specialized{" "}
              <strong className="text-[#1C261E] font-medium">
                Overland Safari Truck
              </strong>{" "}
              for Nairobi National Park—featuring elevated seats and wide
              panoramic windows designed to spot lions and cheetahs high above
              tall savanna grass.
            </p>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi!%20We%20are%20interested%20in%20the%20Overland%20Safari%20Truck%20for%20a%20group.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border border-[#1C261E] hover:bg-[#1C261E] hover:text-[#F6F3EC] text-[#1C261E] text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors"
          >
            Request Group Truck Quote
          </a>
        </div>
      </section>

      {/* =========================================================
          4. SIGNATURE MULTI-DAY & RIFT VALLEY EXPEDITIONS
      ========================================================= */}
      <section
        id="signature-safaris"
        className="py-24 sm:py-32 bg-[#EFECE3] border-y border-[#1C261E]/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9C6B2F] block mb-3">
                Beyond the City • Curated Expeditions Across Kenya
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C261E] tracking-tight">
                Rift Valley Escapes &amp; Multi-Day Safaris
              </h2>
            </div>

            {/* Minimal Underline Filter Tabs */}
            <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.2em] border-b border-[#1C261E]/15 pb-2">
              <button
                onClick={() => setSafariTab("all")}
                className={`transition-colors ${
                  safariTab === "all"
                    ? "text-[#1C261E] font-semibold"
                    : "text-[#1C261E]/45 hover:text-[#1C261E]"
                }`}
              >
                All Expeditions ({SIGNATURE_SAFARIS.length})
              </button>
              <button
                onClick={() => setSafariTab("day-trip")}
                className={`transition-colors ${
                  safariTab === "day-trip"
                    ? "text-[#1C261E] font-semibold"
                    : "text-[#1C261E]/45 hover:text-[#1C261E]"
                }`}
              >
                Day Trips &amp; Overnight
              </button>
              <button
                onClick={() => setSafariTab("multi-day")}
                className={`transition-colors ${
                  safariTab === "multi-day"
                    ? "text-[#1C261E] font-semibold"
                    : "text-[#1C261E]/45 hover:text-[#1C261E]"
                }`}
              >
                Multi-Day (3–7 Days)
              </button>
            </div>
          </div>

          {/* Frameless Safari Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filteredSafaris.map((safari) => (
              <article
                key={safari.id}
                className="group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#DFDBD0] mb-5">
                    <Image
                      src={safari.image}
                      alt={safari.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#1C261E]/55 pb-2.5 mb-3 border-b border-[#1C261E]/10">
                    <span>{safari.duration}</span>
                    <span>{safari.badge}</span>
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9C6B2F] mb-1.5">
                    {safari.vehicle}
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#1C261E] leading-snug">
                    {safari.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#1C261E]/70 leading-relaxed">
                    {safari.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-[#1C261E]/10 pt-3">
                    {safari.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[11px] text-[#1C261E]/75"
                      >
                        <span className="text-[#9C6B2F]">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1C261E]/10">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello!%20I%20would%20like%20details%20on%20the%20${encodeURIComponent(
                      safari.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#1C261E] group-hover:translate-x-1 transition-transform"
                  >
                    Book This Tour
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. ABOUT US, CONSERVATION & OUR 4X4 LAND CRUISER PROMISE
      ========================================================= */}
      <section
        id="our-fleet"
        className="py-24 sm:py-36 max-w-[1400px] mx-auto px-6 sm:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image Collage from Bókun CDN — Sharp Architectural Edges */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://imgcdn.bokun.tools/9b96ded9-a77d-4f11-b818-b02384802fd1.jpg"
                  alt="4x4 Land Cruiser Wildlife Tracking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://imgcdn.bokun.tools/eab60ac7-0a1a-4093-9fe6-b46f4a7c262c.jpg"
                  alt="Kenya Wildlife Conservation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://imgcdn.bokun.tools/ad479625-e57b-4789-b476-5ef39ab0305a.jpeg"
                  alt="Samburu & Ewaso Nyiro Landscape"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://imgcdn.bokun.tools/6c0372ab-4b6b-4138-835c-18a02659c2af.jpg"
                  alt="Savanna Game Drive"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9C6B2F] block mb-3">
              About Live in Love Kenya • Registered Since 2011
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1C261E] leading-[1.1]">
              Over a Decade of Sustainable Safaris &amp; Authentic Hospitality
            </h2>

            <p className="mt-6 text-base text-[#1C261E]/75 leading-relaxed">
              <strong className="text-[#1C261E] font-medium">
                Live in Love Kenya Tours and Travel
              </strong>{" "}
              is a Nairobi-based tour company fully registered with the{" "}
              <strong className="text-[#1C261E] font-medium">
                Kenya Tourism Board (KTB) since 2011
              </strong>
              . With over a decade of field experience, we are passionate about
              showcasing the beauty of Africa while promoting sustainable
              tourism and the conservation of wildlife and natural ecosystems.
            </p>

            <p className="mt-4 text-base text-[#1C261E]/75 leading-relaxed">
              Our team consists of professional, deeply knowledgeable
              driver-guides who handle every detail—from assisting guests with
              online KWS park entry tickets to arranging domestic bush-to-beach
              flights to Diani.
            </p>

            {/* Key Pillars — Hairline Grid */}
            <div className="mt-10 pt-8 border-t border-[#1C261E]/15 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl font-normal text-[#1C261E]">
                  Pop-Up Roof 4x4 Jeeps
                </h4>
                <p className="text-xs text-[#1C261E]/70 mt-2 leading-relaxed">
                  Spacious custom 4-wheel drive Land Cruisers for unobstructed
                  360° photography and off-road tracking.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-normal text-[#1C261E]">
                  Seamless KWS Park Entry
                </h4>
                <p className="text-xs text-[#1C261E]/70 mt-2 leading-relaxed">
                  Hotel or JKIA pickup plus hands-on assistance purchasing
                  official Kenya Wildlife Service eCitizen tickets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. VERIFIED TRIPADVISOR REVIEWS
      ========================================================= */}
      <section
        id="reviews"
        className="py-24 sm:py-32 bg-[#1C261E] text-[#F6F3EC]"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C89D54] block mb-3">
                Verified TripAdvisor Reviews
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal">
                Stories From Our Guests in the Wild
              </h2>
            </div>
            <p className="text-sm text-[#F6F3EC]/70 max-w-md leading-relaxed">
              Read why travelers from around the world praise our veteran guides{" "}
              <strong className="text-[#C89D54] font-normal">Peter</strong> and{" "}
              <strong className="text-[#C89D54] font-normal">Jackson</strong>{" "}
              for their patience, spotting skill, and warm Kenyan hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-white/15 pt-12">
            {TRIPADVISOR_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#C89D54] mb-4">
                    <span>{"★".repeat(review.rating)}</span>
                    <span>Guide: {review.guideMentioned}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white mb-3">
                    &ldquo;{review.title}&rdquo;
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F6F3EC]/75 leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.18em] text-white">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#F6F3EC]/50 mt-0.5">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}