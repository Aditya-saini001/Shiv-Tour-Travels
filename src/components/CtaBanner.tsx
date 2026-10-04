'use client';

import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function CtaBanner() {
  return (
    <section className="py-16 bg-darkbg-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll direction="up" duration={0.8}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-taxi-600 via-taxi-500 to-amber-500 text-black p-8 sm:p-14 shadow-2xl">
            {/* Subtle geometric pattern overlay */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

            <div className="relative z-10 max-w-3xl space-y-5">
              <span className="inline-block text-xs font-black uppercase tracking-widest bg-black text-white px-3.5 py-1.5 rounded-full shadow">
                24/7 Instant Confirmation
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                Book the Best Taxi Service in Dehradun Today!
              </h2>

              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed max-w-2xl">
                At Shiv Shubh Tour & Travels, we make travel in and around Uttarakhand safe, seamless, and affordable. With guaranteed fixed fares, verified hill drivers, and clean AC cabs, your journey begins with us.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+919084712392"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-black hover:bg-slate-900 text-white font-black text-base transition-all shadow-xl hover:scale-105"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call +91 9084712392</span>
                </a>

                <a
                  href="https://wa.me/919084712392?text=Hello%20Shiv%20Shubh%20Tour%20%26%20Travels,%20I%20want%20to%20book%20a%20taxi%20now."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-black font-black text-base transition-all shadow-xl hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Book via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
