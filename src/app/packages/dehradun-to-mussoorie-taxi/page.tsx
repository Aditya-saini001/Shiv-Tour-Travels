'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Mountain, Phone, MessageSquare, Check, ArrowRight, MapPin, Clock } from 'lucide-react';

export default function DehradunToMussooriePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Dehradun to Mussoorie Taxi Service"
        subtitle="Fixed ₹2,000 One-Way Ride • Scenic Mountain Chauffeurs • Kempty Falls Sightseeing"
        breadcrumbs={[{ name: 'Packages', href: '/packages' }, { name: 'Dehradun to Mussoorie' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <AnimateOnScroll direction="left" duration={0.7}>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20">
                    Queen of Hills Tour
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">
                    Scenic Hill Cab to <span className="gold-gradient-text">Mussoorie</span>
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    Experience an enchanting journey up the Garhwal Himalayas with <strong className="text-white">Shiv Tour & Travels</strong>. Mussoorie is just 35 kilometers from Dehradun, and our skilled mountain drivers ensure a smooth, comfortable drive across winding turns and breathtaking viewpoints.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="up" duration={0.7}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-darkbg-850 p-5 rounded-2xl border border-white/10 text-center">
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Distance</span>
                    <span className="text-2xl font-black text-white mt-1 block">~35 KM</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Uphill Mountain Road</span>
                  </div>
                  <div className="bg-darkbg-850 p-5 rounded-2xl border border-white/10 text-center">
                    <span className="text-xs text-slate-400 block font-semibold uppercase">Driving Time</span>
                    <span className="text-2xl font-black text-white mt-1 block">1 to 1.5 Hrs</span>
                    <span className="text-[11px] text-slate-500 mt-1 block">Scenic Valley Views</span>
                  </div>
                  <div className="bg-darkbg-850 p-5 rounded-2xl border border-white/10 text-center">
                    <span className="text-xs text-slate-400 block font-semibold uppercase">One-Way Fare</span>
                    <span className="text-2xl font-black text-taxi-400 font-mono mt-1 block">₹2,000</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block">Fixed Sedan Fare</span>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="up" duration={0.7}>
                <div className="bg-darkbg-850 p-7 rounded-3xl border border-white/10 space-y-4">
                  <h3 className="text-xl font-bold text-white">Mussoorie Sightseeing Packages Available:</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <strong className="block text-white">One-Way Drop (Dehradun to Mussoorie Mall Road)</strong>
                        <span className="text-xs text-slate-400">Doorstep pickup anywhere in Dehradun</span>
                      </div>
                      <span className="text-xl font-bold text-taxi-400 font-mono">₹2,000</span>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <strong className="block text-white">Full Day Round Trip Sightseeing (Kempty Falls + Mall Road)</strong>
                        <span className="text-xs text-slate-400">Covers Kempty, Company Garden, Gun Hill & return to Dehradun</span>
                      </div>
                      <span className="text-xl font-bold text-taxi-400 font-mono">₹3,500</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 sticky top-28">
              <AnimateOnScroll direction="right" duration={0.75}>
                <div className="bg-darkbg-850 p-7 rounded-3xl border border-taxi-500/40 shadow-2xl space-y-6">
                  <div className="text-center pb-4 border-b border-white/10">
                    <span className="text-xs font-bold text-taxi-400 uppercase tracking-widest block">
                      Mussoorie Taxi Desk
                    </span>
                    <h4 className="text-2xl font-black text-white mt-1">Book Mussoorie Cab</h4>
                    <p className="text-xs text-slate-400 mt-1">Available 24/7 for instant or scheduled trips</p>
                  </div>

                  <a
                    href="tel:+917819909454"
                    className="w-full py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone className="w-4 h-4 fill-black" />
                    <span>Call +91 7819909454</span>
                  </a>

                  <a
                    href="https://wa.me/917819909454?text=Hello%20Shiv%20Tour%20%26%20Travels,%20I%20want%20to%20book%20a%20Dehradun%20to%20Mussoorie%20Taxi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>
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
