'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Compass, Mountain, Briefcase, Plane, Train, Building, Check, ArrowRight, Phone } from 'lucide-react';

export default function ServicesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const allServices = [
    {
      icon: Compass,
      tag: 'City Mobility',
      title: 'Local City Cab & Sightseeing',
      desc: 'Explore Dehradun’s highlights — Sahastradhara, Robber’s Cave, Mindrolling Monastery, FRI, Tapkeshwar Temple, and Clock Tower with customized 4-hour and 8-hour city packages.',
      rate: 'Starting ₹2,200 (8 Hrs / 80 Km)',
      link: '/packages',
      direction: 'left' as const,
    },
    {
      icon: Plane,
      tag: 'Airport Specialist',
      title: 'Jolly Grant Airport Transfers',
      desc: 'Guaranteed 24/7 airport pickups and drop-offs to Jolly Grant Airport with live flight delay monitoring. Transparent fixed fare with zero late-night or early-morning surcharges.',
      rate: 'Starting ₹899 One Way',
      link: '/pricing',
      direction: 'up' as const,
    },
    {
      icon: Mountain,
      tag: 'Sacred Pilgrimage',
      title: 'Char Dham Yatra Tour Packages',
      desc: 'Comprehensive 10–12 day sacred pilgrimage circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Safe mountain-certified drivers, clean SUVs, and flexible halts.',
      rate: 'Full Circuit from ₹38,000',
      link: '/packages/char-dham-yatra',
      direction: 'right' as const,
    },
    {
      icon: Compass,
      tag: 'NCR & Inter-State',
      title: 'Dehradun to Delhi NCR Outstation',
      desc: 'Comfortable doorstep pickup from any part of Dehradun to Delhi Airport, New Delhi, Noida, and Gurugram via Delhi-Dehradun expressway. Clean AC Sedans and luxury Innova Crysta.',
      rate: 'Fixed ₹4,000 One Way',
      link: '/packages/dehradun-to-delhi-taxi',
      direction: 'left' as const,
    },
    {
      icon: Briefcase,
      tag: 'Corporate Accounts',
      title: 'Corporate & Business Travel',
      desc: 'Executive transportation for corporate delegations, meetings, conference attendees, and VIP guests in Dehradun with formal GST billing and reliable on-demand scheduling.',
      rate: 'Custom Corporate Quotes',
      link: '/contact',
      direction: 'down' as const,
    },
    {
      icon: Train,
      tag: 'Transit Transfer',
      title: 'Railway Station & Hotel Pickups',
      desc: 'Timely transfers to and from Dehradun Railway Station (DDN) to all hotels, resorts, and boarding schools across Dehradun, Mussoorie, and Rajpur Road.',
      rate: 'Starting ₹599 One Way',
      link: '/pricing',
      direction: 'right' as const,
    },
  ];

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Taxi & Travel Services in Dehradun"
        subtitle="Comprehensive Local Cabs, Airport Transfers, Outstation Trips, and Pilgrimage Packages"
        breadcrumbs={[{ name: 'Services' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="down" duration={0.7}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
                Full Service Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Designed for <span className="gold-gradient-text">Complete Comfort & Reliability</span>
              </h2>
            </div>
          </AnimateOnScroll>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <AnimateOnScroll key={idx} direction={service.direction} delay={(idx % 3) * 0.15} duration={0.65}>
                  <div className="h-full bg-darkbg-850 rounded-3xl p-7 border border-white/10 hover:border-taxi-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-2 group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-13 h-13 rounded-2xl bg-white/5 flex items-center justify-center text-taxi-400 group-hover:bg-taxi-500 group-hover:text-black transition-colors p-3.5">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-taxi-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-300/80 leading-relaxed mb-6 font-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold uppercase">Pricing</span>
                        <span className="text-sm font-bold text-taxi-400 font-mono">{service.rate}</span>
                      </div>

                      <Link
                        href={service.link}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-taxi-500 hover:text-black text-white transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Quick Booking Callout */}
          <AnimateOnScroll direction="up" delay={0.2} duration={0.7}>
            <div className="mt-16 bg-gradient-to-r from-darkbg-900 to-darkbg-850 border border-taxi-500/30 p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <h3 className="text-2xl font-black text-white">Need a customized itinerary or special pickup?</h3>
                <p className="text-sm text-slate-300 mt-1">
                  Our dispatch desk is available 24/7 to arrange special cabs, multi-city drops, or luxury Tempo Travellers.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919084712392"
                  className="px-6 py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  <span>Call +91 9084712392</span>
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
