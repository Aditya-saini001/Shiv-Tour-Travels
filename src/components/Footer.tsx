'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const popularRoutes = [
  { name: 'Dehradun to Delhi Taxi', href: '/packages/dehradun-to-delhi-taxi' },
  { name: 'Dehradun to Mussoorie Taxi', href: '/packages/dehradun-to-mussoorie-taxi' },
  { name: 'Dehradun to Rishikesh Taxi', href: '/packages/dehradun-to-rishikesh-taxi' },
  { name: 'Char Dham Yatra Taxi Package', href: '/packages/char-dham-yatra' },
  { name: 'Jolly Grant Airport Taxi (₹899)', href: '/pricing' },
  { name: 'Dehradun to Haridwar Taxi', href: '/pricing' },
  { name: 'Delhi to Dehradun Taxi', href: '/packages/dehradun-to-delhi-taxi' },
  { name: 'Dehradun to Noida Taxi', href: '/pricing' },
  { name: 'Dehradun to Chandigarh Taxi', href: '/pricing' },
  { name: 'Dehradun to Auli Skiing Taxi', href: '/packages' },
  { name: 'Dehradun to Chopta Tungnath Taxi', href: '/packages' },
  { name: 'Dehradun to Saharanpur Taxi', href: '/pricing' },
];

export default function Footer() {
  return (
    <footer className="bg-darkbg-950 border-t border-white/10 pt-16 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-taxi-500 shadow-md shadow-taxi-500/30 shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Shiv Shubh Tour & Travels Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-black text-white block leading-tight">
                  SHIV SHUBH <span className="text-taxi-400">TOUR & TRAVELS</span>
                </span>
                <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Dehradun, Uttarakhand</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Shiv Shubh Tour & Travels is Dehradun&apos;s premier taxi and travel agency. Offering fixed fares, no surge pricing, verified hill chauffeurs, and 24/7 doorstep cab services across Uttarakhand and North India.
            </p>

            {/* Social Media Links: Instagram, Facebook, Twitter */}
            <div className="pt-2">
              <p className="text-xs text-slate-300 font-semibold mb-3">Connect With Us:</p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-black hover:border hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Fares & Rates</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Customer Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Contact Office</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-taxi-400 text-taxi-400/90 font-semibold transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-400" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Taxi Routes */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Popular Taxi Routes</h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {popularRoutes.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="hover:text-taxi-400 transition-colors truncate flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-taxi-400 shrink-0" />
                  <span>{r.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Helpline */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Contact & Helpline</h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-taxi-400 shrink-0 mt-0.5" />
                <span>Union Bank Road, Chandrabani, Pithuwala, Dehradun, Uttarakhand - 248002</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-taxi-400 shrink-0" />
                <a href="tel:+919084712392" className="hover:text-taxi-400 font-bold font-mono text-white text-sm">
                  +91 9084712392
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-taxi-400 shrink-0" />
                <a href="mailto:shivshubhtourtravel@gmail.com" className="hover:text-taxi-400 truncate">
                  shivshubhtourtravel@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-darkbg-900 border border-taxi-500/20">
                <span className="text-[10px] text-taxi-400 uppercase font-black tracking-wider block">
                  Operating Hours
                </span>
                <span className="text-xs text-white font-bold block mt-0.5">
                  24/7 Round the Clock Service
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Prominent Terms & Conditions Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">© {new Date().getFullYear()} Shiv Shubh Tour & Travels. All Rights Reserved.</p>
          <Link
            href="/terms-conditions"
            className="text-sm font-extrabold text-taxi-400 hover:text-taxi-300 underline underline-offset-4 tracking-wide transition-colors flex items-center gap-1.5 bg-taxi-500/10 px-4 py-2 rounded-xl border border-taxi-500/30 hover:bg-taxi-500/20"
          >
            <span>Terms and Conditions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
