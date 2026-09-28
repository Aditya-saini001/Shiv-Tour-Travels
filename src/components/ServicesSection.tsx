'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Mountain, Briefcase, Plane, ArrowRight, Check } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    icon: Compass,
    tag: 'City & Highways',
    title: 'Local & Outstation Rides',
    description:
      'We cover local city sightseeing and long-distance trips across Dehradun and Uttarakhand. Popular routes include Delhi, Mussoorie, and Haridwar with fixed fares and 24/7 doorstep pickup.',
    features: ['Fixed Fares, No Surge', '24/7 Doorstep Pickup', 'Clean & Sanitized Cabs'],
    actionText: 'Book Outstation Cab',
    routeTarget: '/packages/dehradun-to-delhi-taxi',
    highlight: false,
    direction: 'left' as const,
  },
  {
    icon: Mountain,
    tag: 'Pilgrimage Special',
    title: 'Char Dham Yatra Taxi & Tour Packages',
    description:
      'Plan your sacred pilgrimage with Shiv Tour & Travels — the premier taxi service in Dehradun for Char Dham Yatra. Well-maintained vehicles for Kedarnath, Badrinath, Gangotri, and Yamunotri.',
    features: ['10–12 Day Full Circuit', 'Innova Crysta & Ertiga', 'Hill-Certified Chauffeurs'],
    actionText: 'View Packages from ₹38,000',
    routeTarget: '/packages/char-dham-yatra',
    highlight: true,
    direction: 'down' as const,
  },
  {
    icon: Briefcase,
    tag: 'Executive Mobility',
    title: 'Business & Corporate Travel in Dehradun',
    description:
      'Shiv Tour & Travels is your trusted mobility partner for business meetings, conferences, and executive transfers with GST invoicing, punctual pickups, and zero last-minute cancellations.',
    features: ['GST Billing Available', 'Spotless Executive Sedans', 'Priority Corporate Support'],
    actionText: 'Enquire Corporate Rates',
    routeTarget: '/contact',
    highlight: false,
    direction: 'up' as const,
  },
  {
    icon: Plane,
    tag: 'Jolly Grant 24/7',
    title: 'Airport Transfers & Train Pickups',
    description:
      'Need an early-morning or midnight airport transfer? Shiv Tour & Travels delivers dependable airport pickups and drops to Jolly Grant Airport and Dehradun Railway Station at flat rates.',
    features: ['Starting from ₹899 Only', 'Flight Delay Monitoring', 'Luggage Assistance'],
    actionText: 'Airport Taxi from ₹899',
    routeTarget: '/pricing',
    highlight: false,
    direction: 'right' as const,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-darkbg-950 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-taxi-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with scroll animation */}
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
              What We&apos;re Offering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Services We Offer in <span className="gold-gradient-text">Dehradun</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Reliable local, airport, outstation, and Char Dham taxi services trusted by thousands of travelers — fixed fares, transparent pricing, and 24/7 availability.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Services 4-Column Grid with Directional Slide Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={idx}
                direction={item.direction}
                delay={idx * 0.12}
                duration={0.65}
                className="h-full"
              >
                <div
                  className={`h-full relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2 ${
                    item.highlight
                      ? 'bg-gradient-to-b from-darkbg-800 to-darkbg-850 border-2 border-taxi-500/60 shadow-xl shadow-taxi-500/15'
                      : 'bg-darkbg-850/80 border border-white/10 hover:border-taxi-500/40 shadow-lg'
                  }`}
                >
                  {item.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-taxi-500 text-black text-[11px] font-extrabold uppercase tracking-wider shadow">
                      Most Popular
                    </div>
                  )}

                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                          item.highlight
                            ? 'bg-taxi-500 text-black shadow-lg shadow-taxi-500/30'
                            : 'bg-white/5 text-taxi-400 group-hover:bg-taxi-500 group-hover:text-black'
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-taxi-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300/80 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Bullet features */}
                    <ul className="space-y-2 mb-6 pt-4 border-t border-white/5">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center text-xs text-slate-300 gap-2">
                          <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Link */}
                  <Link
                    href={item.routeTarget}
                    className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                      item.highlight
                        ? 'bg-taxi-500 hover:bg-taxi-400 text-black shadow-md'
                        : 'bg-white/5 hover:bg-taxi-500 hover:text-black text-white'
                    }`}
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
