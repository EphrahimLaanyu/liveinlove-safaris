"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus, X, Loader2 } from "lucide-react";
import { ALL_TOURS, FullTourItem } from "@/data/toursData";
import { BRAND_INFO } from "@/data/homepageData";

export default function Tours() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "nairobi-city" | "day-overnight" | "multi-day"
  >("all");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [bookingTour, setBookingTour] = useState<FullTourItem | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Lock background scroll when the Bókun modal is open
  useEffect(() => {
    if (bookingTour) {
      document.body.style.overflow = "hidden";
      setIframeLoading(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [bookingTour]);

  const filteredTours =
    activeCategory === "all"
      ? ALL_TOURS
      : ALL_TOURS.filter((tour) => tour.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#F6F3EC] text-[#1C261E] selection:bg-[#1C261E] selection:text-[#F6F3EC]">
      {/* =========================================================
          1. QUIET-LUXURY EDITORIAL HEADER & FILTER TABS
      ========================================================= */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-16 max-w-[1400px] mx-auto px-6 sm:px-12 border-b border-[#1C261E]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D3F] mb-5">
              Curated Journeys • Official Rates
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl font-normal tracking-tight leading-[1.02] text-[#1C261E]">
              Safaris &amp; Excursions.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-sm sm:text-base text-[#1C261E]/70 leading-relaxed">
              Select any journey below to unfold the full itinerary, wildlife
              highlights, vehicle specifications, and direct reservation options.
            </p>
          </div>
        </div>

        {/* Minimalist Text Filter Tabs */}
        <div className="mt-14 flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.2em]">
          {[
            { id: "all", label: `All Journeys (${ALL_TOURS.length})` },
            { id: "nairobi-city", label: "Nairobi National Park (6)" },
            { id: "day-overnight", label: "Day Trips & Overnight (3)" },
            { id: "multi-day", label: "Multi-Day Expeditions (6)" },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveCategory(
                    tab.id as
                      | "all"
                      | "nairobi-city"
                      | "day-overnight"
                      | "multi-day"
                  )
                }
                className={`pb-2 transition-colors border-b cursor-pointer ${
                  isActive
                    ? "border-[#1C261E] text-[#1C261E] font-semibold"
                    : "border-transparent text-[#1C261E]/45 hover:text-[#1C261E]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          2. MINIMALIST EXPANDABLE CATALOG GRID
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 items-start">
          {filteredTours.map((tour: FullTourItem, index: number) => {
            const isExpanded = !!expandedIds[tour.id];

            return (
              <article
                key={tour.id}
                className="group flex flex-col border-b border-[#1C261E]/15 pb-8 transition-all duration-500"
              >
                {/* Frameless 3:2 Image with High-Contrast Price Tag */}
                <div
                  onClick={() => toggleExpand(tour.id)}
                  className="relative aspect-[3/2] w-full overflow-hidden bg-[#E5E0D5] mb-6 cursor-pointer"
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  {/* Architectural Corner Price Tag on Image */}
                  <div className="absolute bottom-0 right-0 bg-[#1C261E] text-[#F6F3EC] px-5 py-3">
                    <span className="block text-[9px] uppercase tracking-[0.22em] text-[#C89D54]">
                      From
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight leading-none">
                      ${tour.priceUsd.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Prominent Editorial Price & Duration Header */}
                <div className="flex items-end justify-between pb-4 mb-4 border-b border-[#1C261E]/15">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8C6D3F] mb-1">
                      0{index + 1} • {tour.duration}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#1C261E]/60">
                      {tour.vehicle}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-[#1C261E]/50">
                      Official Rate
                    </span>
                    <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C261E] leading-none mt-0.5">
                      <span className="text-sm font-sans font-normal uppercase tracking-widest text-[#8C6D3F] mr-1">
                        USD
                      </span>
                      {tour.priceUsd.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h2
                  onClick={() => toggleExpand(tour.id)}
                  className="font-serif text-2xl sm:text-3xl font-normal text-[#1C261E] leading-snug cursor-pointer hover:text-[#8C6D3F] transition-colors"
                >
                  {tour.title}
                </h2>

                {/* Rate Basis Subtitle */}
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#8C6D3F] mt-1.5">
                  {tour.priceNote}
                </p>

                {/* Calm 2-Line Summary */}
                <p className="mt-3 text-sm text-[#1C261E]/70 leading-relaxed">
                  {tour.summary}
                </p>

                {/* =========================================================
                    EXPANDABLE DRAWER (UNFOLDS ON CLICK)
                ========================================================= */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-[#1C261E]/10"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden space-y-6">
                    {/* Full Description */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#8C6D3F] mb-2">
                        The Experience
                      </p>
                      <p className="text-xs sm:text-sm text-[#1C261E]/80 leading-relaxed">
                        {tour.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#8C6D3F] mb-2.5">
                        Included Highlights
                      </p>
                      <ul className="space-y-2">
                        {tour.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs text-[#1C261E]/75 flex items-start gap-2.5"
                          >
                            <span className="text-[#8C6D3F]">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Locations */}
                    <div className="pt-4 border-t border-[#1C261E]/10 flex items-center justify-between text-xs text-[#1C261E]/65">
                      <span className="uppercase tracking-[0.15em] text-[10px]">
                        Route:
                      </span>
                      <span className="text-[#1C261E] font-medium text-right">
                        {tour.locations.join(" • ")}
                      </span>
                    </div>

                    {/* Full-Width Minimalist Reserve CTA inside Drawer -> Opens Bókun Modal */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setBookingTour(tour)}
                        className="w-full bg-[#1C261E] hover:bg-[#2c3b2f] text-[#F6F3EC] py-4 px-6 text-xs uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>
                          Reserve for USD {tour.priceUsd.toLocaleString()}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C89D54]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* =========================================================
                    CARD FOOTER BAR: EXPAND TOGGLE + BOLD BOOKING CTA
                ========================================================= */}
                <div className="mt-6 pt-4 border-t border-[#1C261E]/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleExpand(tour.id)}
                    className="text-xs uppercase tracking-[0.2em] text-[#1C261E]/65 hover:text-[#1C261E] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>Close Details</span>
                        <Minus className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Read Details</span>
                        <Plus className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setBookingTour(tour)}
                    className="bg-[#1C261E] text-[#F6F3EC] hover:bg-[#C89D54] hover:text-[#1C261E] px-4 py-2.5 text-xs uppercase tracking-[0.18em] font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Book • ${tour.priceUsd.toLocaleString()}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          3. LIVE BÓKUN BOOKING MODAL
      ========================================================= */}
      {bookingTour && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <div
            onClick={() => setBookingTour(null)}
            className="fixed inset-0 bg-[#141C16]/85 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-4xl bg-[#F6F3EC] text-[#1C261E] border border-[#1C261E]/20 shadow-2xl flex flex-col h-[88vh] overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 bg-[#1C261E] text-[#F6F3EC] flex items-start justify-between gap-4 shrink-0">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#C89D54] mb-1">
                  Official Online Reservation • Powered by Bókun
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                  {bookingTour.title}
                </h3>
                <p className="text-xs text-[#F6F3EC]/70 mt-1">
                  {bookingTour.duration} • Official Rate:{" "}
                  <strong className="text-[#C89D54] font-normal">
                    USD {bookingTour.priceUsd.toLocaleString()}.00
                  </strong>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setBookingTour(null)}
                className="p-2 text-[#F6F3EC]/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bókun Live Widget Iframe */}
            <div className="relative flex-1 bg-white overflow-hidden">
              {iframeLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#F6F3EC]">
                  <Loader2 className="w-6 h-6 animate-spin text-[#8C6D3F] mb-3" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#1C261E]/60">
                    Loading Live Bókun Calendar &amp; Checkout...
                  </p>
                </div>
              )}

              <iframe
                src={bookingTour.bokunUrl}
                title={`Book ${bookingTour.title}`}
                onLoad={() => setIframeLoading(false)}
                className="w-full h-full border-0"
                allow="payment *"
              />
            </div>

            {/* Modal Footer with WhatsApp Assistance */}
            <div className="px-6 sm:px-8 py-3.5 bg-[#EFECE3] border-t border-[#1C261E]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#1C261E]/70 shrink-0">
              <span>
                Prefer to reserve via WhatsApp or need a custom pickup time?
              </span>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20Live%20in%20Love%20Kenya,%20I%20would%20like%20assistance%20booking:%20${encodeURIComponent(
                  bookingTour.title
                )}%20(USD%20${bookingTour.priceUsd})`}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-[0.18em] text-[#1C261E] font-semibold border-b border-[#1C261E]/40 hover:border-[#1C261E]"
              >
                Chat on WhatsApp ({BRAND_INFO.phone})
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}