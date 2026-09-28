'use client';

import React from 'react';
import Link from 'next/link';
import { Mountain, Compass, Sun, Map, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const packages = [
  {
    icon: Compass,
    title: 'Dehradun City Full-Day Tour',
    desc: 'Cover Sahastradhara, Robber\'s Cave, Tapkeshwar Temple, FRI Forest Research Institute, and Clock Tower in a private AC cab.',
    duration: '8 Hours / 80 KM',
    price: '₹2,200',
    popular: false,
    link: '/packages',
    direction: 'left' as const,
  },
  {
    icon: Mountain,
    title: 'Mussoorie Queen of Hills Package',
    desc: 'Breathtaking day-trip to Kempty Falls, Gun Hill, Company Garden, Camel\'s Back Road, and Mall Road with scenic viewpoints.',
    duration: 'Full Day / Round Trip',
    price: '₹3,500',
    popular: true,
    link: '/packages/dehradun-to-mussoorie-taxi',
    direction: 'up' as const,
  },
  {
    icon: Sun,
    title: 'Haridwar & Rishikesh Spiritual Tour',
    desc: 'Experience divine Ganga Aarti at Har Ki Pauri, Ram Jhula, Laxman Jhula, Triveni Ghat, and Parmarth Niketan Ashram in comfort.',
    duration: 'Full Day / Same Day Return',
    price: '₹3,800',
    popular: false,
    link: '/packages/dehradun-to-rishikesh-taxi',
    direction: 'down' as const,
  },
  {
    icon: Map,
    title: 'Auli, Chopta & Trekking Expeditions',
    desc: 'Rugged hill-terrain SUVs for high-altitude snow trips, skiing slopes in Auli, and Switzerland of India Tungnath Chopta treks.',
    duration: '3 to 5 Days Customized',
    price: 'From ₹9,000',
    popular: true,
    link: '/packages',
    direction: 'right' as const,
  },
];

export default function CustomizedPackages() {
  return (
    <section className="py-20 bg-darkbg-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
              Tailored Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Customized Taxi Packages in <span className="gold-gradient-text">Dehradun</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              At Shiv Tour & Travels, we craft tailored tour itineraries for families, corporate delegations, and solo backpackers across Uttarakhand — transparent packages with zero hidden fees.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 4 Custom Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <AnimateOnScroll key={idx} direction={pkg.direction} delay={idx * 0.12} duration={0.65}>
                <div
                  className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 relative ${
                    pkg.popular
                      ? 'bg-darkbg-850 border-2 border-taxi-500/60 shadow-xl shadow-taxi-500/10'
                      : 'bg-darkbg-850/80 border border-white/10 hover:border-taxi-500/40'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-taxi-500 text-black text-[10px] font-extrabold uppercase tracking-wider shadow">
                      Top Recommended
                    </div>
                  )}

                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-taxi-400 mb-5 group-hover:bg-taxi-500 group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Link href={pkg.link}>
                      <h3 className="text-lg font-bold text-white mb-2 hover:text-taxi-300 transition-colors">
                        {pkg.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-300/80 leading-relaxed mb-4">{pkg.desc}</p>
                    <div className="inline-block px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-semibold text-slate-400 mb-6">
                      Duration: {pkg.duration}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Fixed Rate:</span>
                      <span className="text-lg font-black text-taxi-400 font-mono">{pkg.price}</span>
                    </div>

                    <a
                      href={`https://wa.me/917819909454?text=${encodeURIComponent(
                        `Hello Shiv Tour & Travels, I want to book the customized package: ${pkg.title} (${pkg.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-xs transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* View All Packages button */}
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-taxi-500 hover:text-black text-white text-sm font-bold border border-white/10 transition-all shadow-lg"
          >
            <span>View All Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
