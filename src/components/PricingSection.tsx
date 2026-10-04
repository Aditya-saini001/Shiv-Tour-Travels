'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, ArrowRight, Phone, MessageSquare, Car } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface RouteCard {
  title: string;
  desc: string;
  price: string;
  type: string;
  popular?: boolean;
  link: string;
  image?: string;
}

const routes: RouteCard[] = [
  {
    title: 'Dehradun to Delhi Taxi',
    desc: 'Travel comfortably with our trusted Dehradun to Delhi taxi service. Ideal for business, family and long-distance travel with fixed one-way pricing and professional drivers.',
    price: '₹4,000',
    type: 'One Way Pick/Drop',
    popular: true,
    link: '/packages/dehradun-to-delhi-taxi',
    image: '/images/delhi.jpg',
  },
  {
    title: 'Dehradun to Mussoorie Taxi',
    desc: 'Book a reliable Dehradun to Mussoorie cab at a fixed price. Perfect for tourists and weekend trips with experienced local drivers and transparent pricing — no hidden charges.',
    price: '₹2,000',
    type: 'One Way Pick/Drop',
    popular: true,
    link: '/packages/dehradun-to-mussoorie-taxi',
    image: '/images/mussoorie.jpg',
  },
  {
    title: 'Dehradun Airport Taxi (Jolly Grant)',
    desc: 'Shiv Shubh Tour & Travels provides the best taxi service in Dehradun for airport pickups and drops — 24/7, fixed fares, no surge pricing for early-morning or late-night flights.',
    price: '₹899',
    type: 'One Way Pick/Drop',
    popular: true,
    link: '/pricing',
    image: '/images/airport.jpg',
  },
  {
    title: 'Dehradun to Saharanpur Taxi',
    desc: 'Enjoy a safe and economical cab from Dehradun to Saharanpur. Suitable for daily commuters and short outstation travel with comfort, punctuality and reliable service.',
    price: '₹1,899',
    type: 'One Way Pick/Drop',
    link: '/pricing',
    image: '/images/saharanpur.jpg',
  },
  {
    title: 'Delhi to Mussoorie Taxi',
    desc: 'Our Delhi to Mussoorie taxi offers a relaxed and scenic ride with clean cars and skilled drivers, making it a preferred option for tourists heading straight to the hills from Delhi.',
    price: '₹4,999',
    type: 'One Way Pick/Drop',
    link: '/packages/dehradun-to-mussoorie-taxi',
    image: '/images/mussoorie.jpg',
  },
  {
    title: 'Dehradun to Noida Taxi',
    desc: 'Book our professional Dehradun to Noida cab for business or personal travel. Affordable one-way options with timely pickups and comfortable vehicles for a hassle-free NCR journey.',
    price: '₹3,899',
    type: 'One Way Pick/Drop',
    link: '/pricing',
    image: '/images/noida.jpg',
  },
  {
    title: 'Dehradun to Haridwar Taxi',
    desc: 'Our Dehradun to Haridwar taxi is perfect for spiritual trips, Ganga Aarti visits and same-day travel. Enjoy a peaceful ride with reliable local drivers and fixed fares.',
    price: '₹2,000',
    type: 'One Way Pick/Drop',
    link: '/pricing',
    image: '/images/haridwar.jpg',
  },
  {
    title: 'Dehradun to Rishikesh Taxi',
    desc: 'Travel easily with our Dehradun to Rishikesh taxi, ideal for yoga retreats, river rafting tourism, and short outstation trips. Safe travel, clean vehicles and fixed pricing.',
    price: '₹2,000',
    type: 'One Way Pick/Drop',
    link: '/packages/dehradun-to-rishikesh-taxi',
    image: '/images/rishikesh.jpg',
  },
  {
    title: 'Char Dham Yatra Taxi Package',
    desc: 'Book a complete Char Dham taxi from Dehradun covering Yamunotri, Gangotri, Kedarnath, and Badrinath. 10–12 day pilgrimage package with Innova Crysta, Ertiga & Dzire.',
    price: '₹38,000+',
    type: 'Full Circuit / Custom Quote',
    popular: true,
    link: '/packages/char-dham-yatra',
    image: '/images/kedarnath.jpg',
  },
  {
    title: 'Dehradun to Chandigarh Taxi',
    desc: 'Comfortable intercity cab from Dehradun to Chandigarh, Mohali, and Panchkula. Punctual, sanitized AC sedans and SUVs with fixed pricing.',
    price: '₹3,500',
    type: 'One Way Pick/Drop',
    link: '/pricing',
    image: '/images/chandigarh.jpg',
  },
  {
    title: 'Dehradun to Auli Skiing Taxi',
    desc: 'Breathtaking snow journey to Auli and Joshimath. Rugged SUVs for mountain snow roads and cable car stations.',
    price: '₹9,000',
    type: 'One Way Pick/Drop',
    link: '/packages',
    image: '/images/auli.webp',
  },
  {
    title: 'Dehradun to Chopta Tungnath Taxi',
    desc: 'Scenic taxi service to the Switzerland of India, Chopta, and base of the sacred Tungnath Shiva Temple.',
    price: '₹8,500',
    type: 'One Way Pick/Drop',
    link: '/packages',
    image: '/images/chopta.jpg',
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'outstation' | 'spiritual'>('all');

  const filteredRoutes = routes.filter((r) => {
    if (activeTab === 'outstation') return r.title.includes('Delhi') || r.title.includes('Noida') || r.title.includes('Saharanpur') || r.title.includes('Chandigarh');
    if (activeTab === 'spiritual') return r.title.includes('Dham') || r.title.includes('Haridwar') || r.title.includes('Rishikesh');
    return true;
  });

  return (
    <section id="pricing" className="py-20 bg-darkbg-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Slide-Down Animation */}
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
              Pricing & Plan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Best Taxi Service in Dehradun — <span className="gold-gradient-text">Our Fixed Fares</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Shiv Shubh Tour & Travels offers transparent, guaranteed fixed fares for every major destination. All base prices below are for comfortable AC Sedans (Dzire / Aura). Higher segment SUVs (Ertiga & Innova Crysta) and Tempo Travellers are readily available upon request.
            </p>

            {/* Quick Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-taxi-500 text-black shadow-lg shadow-taxi-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                All Popular Routes
              </button>
              <button
                onClick={() => setActiveTab('outstation')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'outstation'
                    ? 'bg-taxi-500 text-black shadow-lg shadow-taxi-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                NCR & Outstation
              </button>
              <button
                onClick={() => setActiveTab('spiritual')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'spiritual'
                    ? 'bg-taxi-500 text-black shadow-lg shadow-taxi-500/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Pilgrimage & Sacred Hubs
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Routes Grid with Staggered Scroll Animations (left, up, right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map((route, idx) => {
            const encodedMsg = encodeURIComponent(
              `Hello Shiv Shubh Tour & Travels, I want to book: ${route.title} (${route.price} - ${route.type}). Please confirm availability.`
            );

            // Alternate directions for eye-catching slide effect
            const dir = idx % 3 === 0 ? 'left' : idx % 3 === 1 ? 'up' : 'right';

            return (
              <AnimateOnScroll key={idx} direction={dir} delay={(idx % 3) * 0.15} duration={0.6}>
                <div
                  className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative ${
                    route.popular
                      ? 'bg-darkbg-850 border border-taxi-500/40 shadow-xl shadow-taxi-500/10'
                      : 'bg-darkbg-850/60 border border-white/10 hover:border-taxi-500/30'
                  }`}
                >
                  {route.popular && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-taxi-500 text-black text-[10px] font-black uppercase tracking-wider shadow">
                      High Demand
                    </div>
                  )}

                  <div>
                    {route.image && (
                      <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 border border-white/10">
                        <img
                          src={route.image}
                          alt={route.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-darkbg-900/80 via-transparent to-transparent" />
                      </div>
                    )}

                    <Link href={route.link}>
                      <h3 className="text-xl font-black text-white mb-2 pr-12 hover:text-taxi-300 transition-colors">
                        {route.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-slate-300/80 leading-relaxed mb-6 font-normal">
                      {route.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    {/* Price Row */}
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-2xl sm:text-3xl font-black text-taxi-400 font-mono">
                          {route.price}
                        </span>
                        <span className="block text-[11px] text-slate-400 font-medium">
                          {route.type}
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
                        No Surge
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={`https://wa.me/919084712392?text=${encodedMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href="tel:+919084712392"
                        className="py-2.5 px-3 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                      >
                        <Phone className="w-3.5 h-3.5 fill-black" />
                        <span>Book Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Fleet Model Rates Callout with Slide-Up */}
        <AnimateOnScroll direction="up" delay={0.2} duration={0.7}>
          <div className="mt-12 bg-darkbg-900 border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <h4 className="text-lg font-bold text-white flex items-center justify-center lg:justify-start gap-2">
                  <Car className="w-5 h-5 text-taxi-400" />
                  <span>Daily Rental Packages (8 Hours / 80 Kilometers)</span>
                </h4>
                <p className="text-sm text-slate-400">
                  Sedan (Dzire): <strong className="text-taxi-300">₹2,200</strong> &bull; SUV (Ertiga): <strong className="text-taxi-300">₹3,500</strong> &bull; Innova Crysta: <strong className="text-taxi-300">₹5,000</strong> &bull; Tempo Traveller: <strong className="text-taxi-300">₹6,000</strong>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/pricing"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all"
                >
                  View Full Fare Matrix
                </Link>
                <a
                  href="tel:+919084712392"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-xs sm:text-sm transition-all shadow-md shrink-0"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  <span>Call: +91 9084712392</span>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
