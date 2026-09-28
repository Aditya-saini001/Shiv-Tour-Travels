'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Car, Clock, ShieldCheck, MapPin, Phone, MessageSquare, Check, ArrowRight } from 'lucide-react';

export default function DehradunToDelhiPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const rates = [
    { model: 'Maruti Suzuki Dzire / Hyundai Aura (Sedan)', price: '₹4,000', seats: '4 Passengers', tag: 'Most Popular' },
    { model: 'Maruti Suzuki Ertiga (Spacious SUV)', price: '₹5,000', seats: '6 Passengers', tag: 'Family Travel' },
    { model: 'Toyota Innova Crysta (Luxury Chauffeur)', price: '₹10,500', seats: '7 Passengers', tag: 'VIP Comfort' },
  ];

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Dehradun to Delhi Taxi Service"
        subtitle="Fixed ₹4,000 One-Way Ride • 24/7 Door-to-Door Pickup • Zero Surge Pricing"
        breadcrumbs={[{ name: 'Packages', href: '/packages' }, { name: 'Dehradun to Delhi' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <AnimateOnScroll direction="left" duration={0.7}>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20">
                    Expressway Cab Booking
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">
                    Reliable Dehradun to Delhi <span className="gold-gradient-text">Cab Booking</span>
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    Looking for a dependable, fixed-rate cab from Dehradun to Delhi? <strong className="text-white">Shiv Tour & Travels</strong> offers the best one-way and round-trip taxi service between Dehradun and Delhi NCR. Whether you have an early morning flight at IGI Terminal 3, a business meeting in Connaught Place, or a family visit to Noida/Gurugram, our professional drivers ensure a relaxed, comfortable journey.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Route Details Box */}
              <AnimateOnScroll direction="up" duration={0.7}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-darkbg-850 p-5 rounded-2xl border border-white/10 text-center">
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Distance</span>
                    <span className="text-2xl font-black text-white mt-1 block">~245 KM</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Via Delhi-Dehradun Exp.</span>
                  </div>
                  <div className="bg-darkbg-850 p-5 rounded-2xl border border-white/10 text-center">
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Travel Time</span>
                    <span className="text-2xl font-black text-white mt-1 block">4.5 - 5.5 Hrs</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Smooth Highway Route</span>
                  </div>
                  <div className="bg-darkbg-850 p-5 rounded-2xl border border-white/10 text-center">
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Sedan Fare</span>
                    <span className="text-2xl font-black text-taxi-400 font-mono mt-1 block">₹4,000</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block">No Hidden Surcharge</span>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Vehicle Options */}
              <AnimateOnScroll direction="up" duration={0.7}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Select Your Preferred Cab</h3>
                  <div className="space-y-3">
                    {rates.map((r, idx) => (
                      <div
                        key={idx}
                        className="bg-darkbg-850 p-6 rounded-2xl border border-white/10 hover:border-taxi-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold text-white">{r.model}</h4>
                            <span className="text-[10px] font-bold text-taxi-400 bg-taxi-500/10 px-2.5 py-0.5 rounded-full border border-taxi-500/20">
                              {r.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">Comfortable seating for {r.seats}</p>
                        </div>

                        <div className="flex items-center gap-4 self-end sm:self-auto">
                          <span className="text-2xl font-black text-taxi-400 font-mono">{r.price}</span>
                          <a
                            href={`https://wa.me/917819909454?text=${encodeURIComponent(
                              `Hello Shiv Tour & Travels, I want to book Dehradun to Delhi Taxi in ${r.model} (${r.price}).`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                          >
                            Book Cab
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-4 sticky top-28">
              <AnimateOnScroll direction="right" duration={0.75}>
                <div className="bg-darkbg-850 p-7 rounded-3xl border border-taxi-500/40 shadow-2xl space-y-6">
                  <div className="text-center pb-4 border-b border-white/10">
                    <span className="text-xs font-bold text-taxi-400 uppercase tracking-widest block">
                      Delhi Cab Helpline
                    </span>
                    <h4 className="text-2xl font-black text-white mt-1">Instant Delhi Booking</h4>
                    <p className="text-xs text-slate-400 mt-1">Doorstep pickup across all areas of Dehradun</p>
                  </div>

                  <a
                    href="tel:+917819909454"
                    className="w-full py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone className="w-4 h-4 fill-black" />
                    <span>Call +91 7819909454</span>
                  </a>

                  <a
                    href="https://wa.me/917819909454?text=Hello%20Shiv%20Tour%20%26%20Travels,%20I%20want%20to%20book%20a%20Dehradun%20to%20Delhi%20Taxi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                    <p className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                      <span>Pick up from anywhere in Dehradun</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                      <span>Drop to IGI Airport, Railway Stations or Home</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                      <span>Zero night charges or cancellation fees</span>
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
