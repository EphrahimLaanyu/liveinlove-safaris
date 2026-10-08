// src/app/layout.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/data/homepageData";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const WHATSAPP_CHAT_URL =
  "https://wa.me/254711890451?text=Hello%20Live%20in%20Love%20Kenya!%20I%20would%20like%20to%20inquire%20about%20a%20safari.";
const INSTAGRAM_URL =
  "https://www.instagram.com/liveinlovekenyatoursandtravel/";
const FACEBOOK_URL = "https://www.facebook.com/liveinlovesafaris";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#1C261E] font-sans antialiased selection:bg-[#1C261E] selection:text-[#F6F3EC]">
        {/* =========================================================
            GLOBAL NAVBAR
        ========================================================= */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F6F3EC]/90 backdrop-blur-md border-b border-[#1C261E]/10">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 overflow-hidden rounded-full shrink-0 border border-[#1C261E]/15 shadow-sm">
                <Image
                  src="/WhatsApp Image 2026-10-08 at 16.44.30.jpeg"
                  alt="Live in Love Kenya Tours and Travel Logo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-tight text-[#1C261E] leading-none group-hover:text-[#9C6B2F] transition-colors">
                  Live in Love Kenya
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#9C6B2F] font-medium hidden sm:block mt-1">
                  Tours &amp; Travel
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-[#1C261E]/70">
              <Link
                href="/"
                className={`hover:text-[#1C261E] transition-colors ${
                  pathname === "/" || pathname === "/home"
                    ? "text-[#1C261E] font-semibold"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/tours"
                className={`hover:text-[#1C261E] transition-colors ${
                  pathname.startsWith("/tours")
                    ? "text-[#1C261E] font-semibold"
                    : ""
                }`}
              >
                Tours
              </Link>
              <Link
                href="/about"
                className={`hover:text-[#1C261E] transition-colors ${
                  pathname.startsWith("/about")
                    ? "text-[#1C261E] font-semibold"
                    : ""
                }`}
              >
                About Us/Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-6">
              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[#1C261E] border-b border-[#1C261E] pb-1 hover:opacity-60 transition-opacity"
              >
                Inquire / Book
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1C261E]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-[#F6F3EC] border-b border-[#1C261E]/10 px-6 py-6 flex flex-col gap-4 text-xs uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3 pb-3 border-b border-[#1C261E]/10">
                <div className="relative w-10 h-10 overflow-hidden rounded-full shrink-0 border border-[#1C261E]/15">
                  <Image
                    src="/WhatsApp Image 2026-10-08 at 16.44.30.jpeg"
                    alt="Live in Love Kenya Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-tight text-[#1C261E] leading-none">
                    Live in Love Kenya
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#9C6B2F] font-medium mt-1">
                    Tours &amp; Travel
                  </span>
                </div>
              </div>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/tours" onClick={() => setMobileMenuOpen(false)}>
                Tours
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About Us/Contact
              </Link>
              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#8C6D3F] font-semibold"
              >
                WhatsApp Chat ({BRAND_INFO.phone})
              </a>
            </div>
          )}
        </header>

        {/* =========================================================
            ACTIVE PAGE CONTENT
        ========================================================= */}
        <main className="flex-1">{children}</main>

        {/* =========================================================
            SINGLE UNIFIED GLOBAL FOOTER (WITH SOCIAL ICONS)
        ========================================================= */}
        <footer
          id="contact"
          className="bg-[#141C16] text-[#F6F3EC] pt-16 sm:pt-24 pb-10 sm:pb-14 border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Pre-Footer Bespoke CTA Banner */}
            <div className="relative overflow-hidden p-6 sm:p-12 lg:p-16 mb-14 sm:mb-20 border border-white/15">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/lodge-night-sky.jpg"
                  alt="Custom Kenya Safari Planning"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141C16] via-[#141C16]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C89D54]">
                  Custom Itineraries • Private or Group Joining
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mt-3 leading-tight">
                  Let us craft your time in the wild.
                </h3>
                <p className="text-sm sm:text-base text-[#F6F3EC]/75 mt-3 sm:mt-4 leading-relaxed">
                  Whether you have a 6-hour layover at JKIA Airport or want a
                  custom 7-day Samburu, Ol Pejeta &amp; Maasai Mara expedition,
                  speak directly with our Nairobi team on Langata Road.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                  <a
                    href={WHATSAPP_CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F6F3EC] hover:bg-[#C89D54] text-[#1C261E] text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
                  >
                    <span>WhatsApp {BRAND_INFO.phone}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="border border-white/25 hover:border-white text-white text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors w-full sm:w-auto text-center"
                  >
                    Email Inquiry
                  </a>
                </div>
              </div>
            </div>

            {/* Main Footer Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
              <div className="md:col-span-2">
                <span className="font-serif text-3xl font-normal text-white">
                  {BRAND_INFO.fullName}
                </span>
                <p className="mt-4 text-sm text-[#F6F3EC]/65 max-w-md leading-relaxed">
                  Registered with the Kenya Tourism Board since 2011.
                  Specializing in daily Nairobi National Park 4x4 game drives,
                  city conservation excursions, and multi-day safaris across
                  Kenya.
                </p>

                {/* Social Icons Row */}
                <div className="mt-8 flex items-center gap-4">
                  {/* Instagram Icon Button */}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 border border-white/20 hover:border-[#C89D54] hover:bg-[#C89D54] text-[#F6F3EC] hover:text-[#141C16] flex items-center justify-center transition-all"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook Icon Button */}
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 border border-white/20 hover:border-[#C89D54] hover:bg-[#C89D54] text-[#F6F3EC] hover:text-[#141C16] flex items-center justify-center transition-all"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>

                  {/* WhatsApp Icon Button */}
                  <a
                    href={WHATSAPP_CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-11 h-11 border border-white/20 hover:border-[#C89D54] hover:bg-[#C89D54] text-[#F6F3EC] hover:text-[#141C16] flex items-center justify-center transition-all"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.529 5.856l-1.529 5.584 5.715-1.499c1.693.924 3.633 1.459 5.701 1.459 6.627 0 12-5.373 12-12s-5.389-12-11.416-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C89D54] mb-5">
                  Top Safari Circuits
                </h4>
                <ul className="space-y-3 text-sm text-[#F6F3EC]/75">
                  <li>Nairobi National Park (Daily 4x4)</li>
                  <li>David Sheldrick &amp; Giraffe Centre</li>
                  <li>Lake Naivasha &amp; Crescent Island</li>
                  <li>Maasai Mara &amp; Diani Beach</li>
                  <li>Ol Pejeta &amp; Samburu National Reserve</li>
                  <li>Amboseli &amp; Tsavo National Parks</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C89D54] mb-5">
                  Contact Information
                </h4>
                <ul className="space-y-3 text-sm text-[#F6F3EC]/75">
                  <li>{BRAND_INFO.address}</li>
                  <li>
                    <a
                      href={WHATSAPP_CHAT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C89D54] transition-colors"
                    >
                      {BRAND_INFO.phone} (WhatsApp)
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="hover:text-[#C89D54] transition-colors"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6F3EC]/45 gap-4">
              <p>
                © 2026 {BRAND_INFO.fullName}. All rights reserved.
              </p>
              <p className="uppercase tracking-[0.18em]">
                Kenya Tourism Board Licensed Since 2011 • Powered by Bókun
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}