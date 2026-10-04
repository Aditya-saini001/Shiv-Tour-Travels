'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Backdrop Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-darkbg-900 border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl relative animate-in slide-in-from-right duration-300">
          <div>
            {/* Header & Close */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link href="/" onClick={onClose} className="flex items-center space-x-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-taxi-500 shadow-md shadow-taxi-500/30 shrink-0">
                  <Image
                    src="/images/logo.jpg"
                    alt="Shiv Shubh Tour & Travels Logo"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-black text-white leading-tight">SHIV SHUBH TOUR & TRAVELS</h3>
                  <p className="text-[11px] text-taxi-400 font-semibold tracking-wider uppercase">Dehradun, Uttarakhand</p>
                </div>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close sidebar"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-taxi-500 hover:text-black flex items-center justify-center text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* About Box */}
            <div className="my-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-taxi-400 mb-2">About Us</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Shiv Shubh Tour & Travels offers premier, trusted taxi and tour services in Dehradun, catering to pilgrims, tourists, corporate clients, and families. Explore Uttarakhand&apos;s holy shrines, scenic hill stations, and valleys with our comfortable, sanitized cabs and courteous local drivers.
              </p>
              <Link
                href="/about"
                onClick={onClose}
                className="inline-flex items-center text-xs font-bold text-taxi-400 hover:text-taxi-300 gap-1 mt-2"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="my-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-taxi-400 mb-3">Contact Information</h4>

              <div className="flex items-start space-x-3.5 text-slate-300 text-sm">
                <div className="w-8 h-8 rounded-lg bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white">Our Office</p>
                  <p className="text-xs text-slate-400">Union Bank Road, Chandrabani, Pithuwala, Dehradun, Uttarakhand - 248002</p>
                </div>
              </div>

              <a
                href="tel:+919084712392"
                className="flex items-start space-x-3.5 text-slate-300 hover:text-taxi-400 transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5 group-hover:bg-taxi-500 group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-taxi-400">Direct Phone Booking</p>
                  <p className="text-xs text-slate-300 font-mono">+91 9084712392</p>
                </div>
              </a>

              <a
                href="mailto:shivshubhtourtravel@gmail.com"
                className="flex items-start space-x-3.5 text-slate-300 hover:text-taxi-400 transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5 group-hover:bg-taxi-500 group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-taxi-400">Email Enquiries</p>
                  <p className="text-xs text-slate-400">shivshubhtourtravel@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start space-x-3.5 text-slate-300 text-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white">Working Hours</p>
                  <p className="text-xs text-emerald-400 font-medium">24 Hours / 7 Days Available (No Surge)</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="my-6 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-taxi-400 mb-3">Connect With Us</h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-black hover:border hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Popular Routes List in Drawer */}
            <div className="my-6 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-taxi-400 mb-3">Popular Cab Routes</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link href="/packages/dehradun-to-delhi-taxi" onClick={onClose} className="p-2 rounded-lg bg-white/5 hover:bg-taxi-500/15 text-slate-300 hover:text-taxi-400 transition-colors">Dehradun to Delhi</Link>
                <Link href="/packages/dehradun-to-mussoorie-taxi" onClick={onClose} className="p-2 rounded-lg bg-white/5 hover:bg-taxi-500/15 text-slate-300 hover:text-taxi-400 transition-colors">Dehradun to Mussoorie</Link>
                <Link href="/pricing" onClick={onClose} className="p-2 rounded-lg bg-white/5 hover:bg-taxi-500/15 text-slate-300 hover:text-taxi-400 transition-colors">Jolly Grant Airport</Link>
                <Link href="/packages/char-dham-yatra" onClick={onClose} className="p-2 rounded-lg bg-white/5 hover:bg-taxi-500/15 text-slate-300 hover:text-taxi-400 transition-colors">Char Dham Yatra</Link>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href="tel:+919084712392"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-taxi-500/20"
            >
              <Phone className="w-4 h-4 fill-black" />
              Call Now: +91 9084712392
            </a>
            <a
              href="https://wa.me/919084712392?text=Hello%20Shiv%20Shubh%20Tour%20%26%20Travels,%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition-all"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
