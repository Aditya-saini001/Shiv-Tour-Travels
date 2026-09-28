'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import QuickBookingBar from '@/components/QuickBookingBar';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Tag, ShieldCheck, CheckCircle2, Phone, MessageSquare, Car, ArrowRight } from 'lucide-react';

const routeFares = [
  { route: 'Dehradun to Delhi (One Way)', sedan: '₹4,000', suv: '₹5,000', innova: '₹10,500' },
  { route: 'Dehradun to Mussoorie (One Way)', sedan: '₹2,000', suv: '₹2,500', innova: '₹3,500' },
  { route: 'Dehradun to Jolly Grant Airport', sedan: '₹899', suv: '₹1,499', innova: '₹2,200' },
  { route: 'Dehradun to Rishikesh (One Way)', sedan: '₹2,000', suv: '₹2,500', innova: '₹3,500' },
  { route: 'Dehradun to Haridwar (One Way)', sedan: '₹2,000', suv: '₹2,500', innova: '₹3,500' },
  { route: 'Dehradun to Saharanpur (One Way)', sedan: '₹1,899', suv: '₹2,400', innova: '₹3,500' },
  { route: 'Delhi to Mussoorie (One Way)', sedan: '₹4,999', suv: '₹6,500', innova: '₹11,500' },
  { route: 'Dehradun to Noida / Greater Noida', sedan: '₹3,899', suv: '₹5,000', innova: '₹10,500' },
  { route: 'Dehradun to Chandigarh', sedan: '₹3,500', suv: '₹4,500', innova: '₹7,500' },
  { route: 'Dehradun to Auli / Joshimath', sedan: '₹9,000', suv: '₹12,000', innova: '₹16,000' },
  { route: 'Dehradun to Chopta / Tungnath', sedan: '₹8,500', suv: '₹11,000', innova: '₹15,000' },
  { route: 'Dehradun to Nainital (Round Trip)', sedan: '₹7,500', suv: '₹10,000', innova: '₹14,000' },
  { route: 'Char Dham Yatra (Full Circuit 10 Days)', sedan: '₹38,000', suv: '₹48,000', innova: '₹62,000' },
];

export default function PricingPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Dehradun Taxi Rates & Fare List 2026"
        subtitle="100% Fixed & Transparent Fares • No Surge Pricing • AC Commercial Vehicles"
        breadcrumbs={[{ name: 'Fares & Rates' }]}
      />

      <div className="pt-10">
        <QuickBookingBar />
      </div>

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="down" duration={0.7}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
                Fare Matrix 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Transparent Fares for <span className="gold-gradient-text">All Popular Routes</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                Compare one-way and outstation taxi fares across Sedans, SUVs, and Innova Crysta. All rates are inclusive of GST and standard allowances.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Table Container with Slide-Up */}
          <AnimateOnScroll direction="up" duration={0.8}>
            <div className="bg-darkbg-850 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-darkbg-900 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="py-4 px-6">Destination Route</th>
                      <th className="py-4 px-6">Sedan (Dzire / Aura)</th>
                      <th className="py-4 px-6">SUV (Ertiga)</th>
                      <th className="py-4 px-6">Innova Crysta</th>
                      <th className="py-4 px-6 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {routeFares.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 font-semibold text-white">{row.route}</td>
                        <td className="py-4 px-6 font-mono font-bold text-taxi-400">{row.sedan}</td>
                        <td className="py-4 px-6 font-mono font-bold text-slate-200">{row.suv}</td>
                        <td className="py-4 px-6 font-mono font-bold text-slate-200">{row.innova}</td>
                        <td className="py-4 px-6 text-center">
                          <a
                            href={`https://wa.me/917819909454?text=${encodeURIComponent(
                              `Hello Shiv Tour & Travels, I want to book: ${row.route}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                          >
                            <span>Book</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Daily Rental Breakdown */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-darkbg-850 p-6 rounded-3xl border border-white/10 text-center space-y-3">
              <span className="text-xs text-taxi-400 font-bold uppercase tracking-widest block">Daily Package</span>
              <h4 className="text-lg font-bold text-white">Sedan (Dzire / Aura)</h4>
              <div className="text-3xl font-black text-taxi-400 font-mono">₹2,200</div>
              <p className="text-xs text-slate-400">8 Hours / 80 KM Included<br />Extra: ₹11/km & ₹120/hr</p>
            </div>

            <div className="bg-darkbg-850 p-6 rounded-3xl border border-white/10 text-center space-y-3">
              <span className="text-xs text-taxi-400 font-bold uppercase tracking-widest block">Daily Package</span>
              <h4 className="text-lg font-bold text-white">SUV (Ertiga)</h4>
              <div className="text-3xl font-black text-taxi-400 font-mono">₹3,500</div>
              <p className="text-xs text-slate-400">8 Hours / 80 KM Included<br />Extra: ₹15/km & ₹150/hr</p>
            </div>

            <div className="bg-darkbg-850 p-6 rounded-3xl border border-white/10 text-center space-y-3">
              <span className="text-xs text-taxi-400 font-bold uppercase tracking-widest block">Daily Package</span>
              <h4 className="text-lg font-bold text-white">Innova Crysta</h4>
              <div className="text-3xl font-black text-taxi-400 font-mono">₹5,000</div>
              <p className="text-xs text-slate-400">8 Hours / 80 KM Included<br />Extra: ₹20/km & ₹200/hr</p>
            </div>

            <div className="bg-darkbg-850 p-6 rounded-3xl border border-white/10 text-center space-y-3">
              <span className="text-xs text-taxi-400 font-bold uppercase tracking-widest block">Daily Package</span>
              <h4 className="text-lg font-bold text-white">Tempo Traveller</h4>
              <div className="text-3xl font-black text-taxi-400 font-mono">₹6,000</div>
              <p className="text-xs text-slate-400">8 Hours / 80 KM Included<br />Extra: ₹26/km & ₹300/hr</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
