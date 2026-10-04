'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-darkbg-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage with Slide-In from LEFT */}
          <div className="lg:col-span-6 relative">
            <AnimateOnScroll direction="left" duration={0.75}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/innova-crysta.jpg"
                    alt="Shiv Shubh Tour & Travels Luxury Cab in Dehradun"
                    className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkbg-950 via-transparent to-transparent" />
                </div>

                {/* Secondary Floating Thumbnail */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 w-48 sm:w-60 rounded-2xl overflow-hidden border-2 border-taxi-500/50 shadow-2xl hidden sm:block">
                  <img
                    src="/images/mussoorie.jpg"
                    alt="Uttarakhand Tour Cab Mussoorie"
                    className="w-full h-36 sm:h-44 object-cover"
                  />
                </div>

                {/* Floating 05+ Years Experience Badge */}
                <div className="absolute -top-6 -left-4 sm:-left-6 bg-gradient-to-br from-taxi-400 via-taxi-500 to-taxi-600 text-black p-5 rounded-3xl shadow-2xl shadow-taxi-500/30 flex items-center gap-3.5 border border-white/20 animate-bounce duration-1000">
                  <div className="text-3xl sm:text-4xl font-black font-mono leading-none">05+</div>
                  <div className="text-xs font-black uppercase tracking-wider leading-tight">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: About Content with Slide-In from RIGHT */}
          <div className="lg:col-span-6 space-y-6">
            <AnimateOnScroll direction="right" duration={0.75}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-taxi-500/10 border border-taxi-500/20 text-taxi-400 text-xs font-bold uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5" />
                  <span>About Shiv Shubh Tour & Travels</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Welcome to <span className="gold-gradient-text">Shiv Shubh Tour & Travels</span>
                </h2>

                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  Welcome to <strong className="text-white">Shiv Shubh Tour & Travels</strong>, your trusted travel partner in Dehradun for local city tours, airport transfers, and outstation cab bookings. Whether you&apos;re a tourist exploring the queen of hills Mussoorie, a pilgrim heading to Haridwar, Rishikesh and the holy Char Dham, or a business traveler needing a prompt airport pickup at Jolly Grant Airport, we are dedicated to making every journey smooth, comfortable, and memorable.
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  As a locally based operator in Dehradun, we pride ourselves on offering 100% fixed fares with zero surge pricing, verified courteous chauffeurs with deep mountain-route expertise, and clean commercial vehicles.
                </p>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0" />
                    <span className="font-semibold">Fixed Pricing (No Hidden Fees)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0" />
                    <span className="font-semibold">24/7 Doorstep Service</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0" />
                    <span className="font-semibold">Clean, Sanitized Cabs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0" />
                    <span className="font-semibold">Experienced Hill Drivers</span>
                  </div>
                </div>

                {/* Bottom Call Box & Action */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
                  <a
                    href="tel:+919084712392"
                    className="flex items-center space-x-3.5 bg-taxi-500/15 border border-taxi-500/30 hover:bg-taxi-500/25 px-5 py-3 rounded-2xl transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-taxi-500 flex items-center justify-center text-black font-extrabold shadow group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 fill-black" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-taxi-400 font-bold uppercase tracking-wider">
                        Call Anytime 24/7
                      </span>
                      <span className="block text-base font-black text-white font-mono">
                        +91 9084712392
                      </span>
                    </div>
                  </a>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-taxi-500 hover:text-black text-white text-sm font-bold border border-white/10 transition-all duration-300"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
