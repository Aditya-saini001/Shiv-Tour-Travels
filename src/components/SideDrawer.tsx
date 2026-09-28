'use client';

import React from 'react';
import Link from 'next/link';
import { X, Phone, Mail, MapPin, Instagram, Clock, Car, ArrowRight } from 'lucide-react';

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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-taxi-400 to-taxi-600 flex items-center justify-center text-black font-extrabold shadow-md shadow-taxi-500/30">
                  <Car className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">SHIV TOUR & TRAVELS</h3>
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
                Shiv Tour & Travels offers premier, trusted taxi and tour services in Dehradun, catering to pilgrims, tourists, corporate clients, and families. Explore Uttarakhand&apos;s holy shrines, scenic hill stations, and valleys with our comfortable, sanitized cabs and courteous local drivers.
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
                  <p className="text-xs text-slate-400">Near Clock Tower, Rajpur Road, Dehradun, Uttarakhand - 248001</p>
                </div>
              </div>

              <a
                href="tel:+917819909454"
                className="flex items-start space-x-3.5 text-slate-300 hover:text-taxi-400 transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5 group-hover:bg-taxi-500 group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-taxi-400">Direct Phone Booking</p>
                  <p className="text-xs text-slate-300 font-mono">+91 7819909454</p>
                </div>
              </a>

              <a
                href="mailto:shivtravelsdehradun@gmail.com"
                className="flex items-start space-x-3.5 text-slate-300 hover:text-taxi-400 transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5 group-hover:bg-taxi-500 group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-taxi-400">Email Enquiries</p>
                  <p className="text-xs text-slate-400">shivtravelsdehradun@gmail.com</p>
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
              href="tel:+917819909454"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-taxi-500/20"
            >
              <Phone className="w-4 h-4 fill-black" />
              Call Now: +91 7819909454
            </a>
            <a
              href="https://wa.me/917819909454?text=Hello%20Shiv%20Tour%20%26%20Travels,%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking."
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
