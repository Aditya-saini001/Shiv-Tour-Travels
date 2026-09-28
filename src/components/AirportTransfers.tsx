'use client';

import React from 'react';
import { Plane, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AirportTransfers() {
  return (
    <section className="py-20 bg-darkbg-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-darkbg-900 via-darkbg-850 to-darkbg-900 border border-taxi-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle plane background icon */}
          <Plane className="absolute -right-12 -bottom-12 w-80 h-80 text-white/[0.02] -rotate-12 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content Slides from LEFT */}
            <div className="lg:col-span-8 space-y-6">
              <AnimateOnScroll direction="left" duration={0.75}>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-taxi-500/10 border border-taxi-500/30 text-taxi-400 text-xs font-bold uppercase tracking-widest">
                    <Plane className="w-3.5 h-3.5" />
                    <span>Jolly Grant Airport Specialist</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Best Taxi Service in Dehradun for <span className="gold-gradient-text">Airport Transfers</span>
                  </h2>

                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    Shiv Tour & Travels provides dependable taxi service in Dehradun for Jolly Grant Airport pickups and drops, ensuring stress-free travel with supreme comfort, flight tracking, and 100% punctuality. We operate 24 hours a day, 7 days a week for all early-morning and midnight flights — fixed fares, zero night surcharges.
                  </p>

                  {/* 4 Feature Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-sm text-white">Scheduled Pickups & Drops</strong>
                        <span className="text-xs text-slate-400">Guaranteed cab waiting right outside arrivals.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-sm text-white">Fixed Flat Fares</strong>
                        <span className="text-xs text-slate-400">Airport transfers starting from only ₹899 one way.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-sm text-white">Flight Delay Monitoring</strong>
                        <span className="text-xs text-slate-400">We track your flight; no extra charge if flight is delayed.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-sm text-white">All Dehradun Localities</strong>
                        <span className="text-xs text-slate-400">Rajpur Rd, ISBT, Prem Nagar, Clement Town, Ballupur.</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                      href="tel:+917819909454"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-taxi-500/25"
                    >
                      <Phone className="w-4 h-4 fill-black" />
                      <span>Call Airport Helpline: +91 7819909454</span>
                    </a>

                    <a
                      href="https://wa.me/917819909454?text=Hello%20Shiv%20Tour%20%26%20Travels,%20I%20need%20an%20Airport%20Taxi%20for%20Jolly%20Grant%20Airport."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/20"
                    >
                      <span>Book Airport Cab on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Card Slides from RIGHT */}
            <div className="lg:col-span-4">
              <AnimateOnScroll direction="right" duration={0.75}>
                <div className="bg-darkbg-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xl backdrop-blur-md">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                    Fixed Starting Fare
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-taxi-400 font-mono">
                    ₹899
                  </div>
                  <p className="text-xs text-slate-400">
                    Dehradun City &harr; Jolly Grant Airport (Sedan Dzire / Aura AC Cab)
                  </p>
                  <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-300">
                    <p>✔ AC Dzire / Aura (4 Seater)</p>
                    <p>✔ Ertiga SUV available @ ₹1,499</p>
                    <p>✔ Innova Crysta available @ ₹2,200</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
