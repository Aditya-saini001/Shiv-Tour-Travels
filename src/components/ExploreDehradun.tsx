'use client';

import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const spots = [
  {
    title: 'Sahastradhara Springs',
    desc: 'Famous for cascading waterfalls and therapeutic natural sulphur springs, easily accessible with our local city taxi package.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',
    tag: 'Waterfalls & Healing Springs',
    direction: 'left' as const,
  },
  {
    title: "Robber's Cave (Guchhupani)",
    desc: 'A magnificent natural cave formation where water flows underground. Perfect for families and nature enthusiasts.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop',
    tag: 'Adventure & Caves',
    direction: 'up' as const,
  },
  {
    title: 'Mindrolling Monastery',
    desc: 'One of the largest Buddhist centers in India, featuring peaceful stupas, lush gardens, and rich Tibetan art and heritage.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop',
    tag: 'Peace & Spirituality',
    direction: 'down' as const,
  },
  {
    title: 'Tapkeshwar Temple',
    desc: 'A revered historic temple dedicated to Lord Shiva situated along the banks of the Asan river within a natural cave.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop',
    tag: 'Sacred Lord Shiva Shrine',
    direction: 'right' as const,
  },
];

export default function ExploreDehradun() {
  return (
    <section className="py-20 bg-darkbg-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
                Shiv Tour & Travels Sightseeing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Explore Dehradun with the <span className="gold-gradient-text">Best Taxi Service</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                Dehradun is an enchanting valley rich in scenic beauty, colonial heritage, and spiritual landmarks. Whether you need a local city tour, an outstation getaway, or an airport drop, our experienced drivers ensure safety, comfort, and timely arrival.
              </p>
            </div>

            <a
              href="tel:+917819909454"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all self-start lg:self-auto shadow-lg shadow-taxi-500/20"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Book City Tour: +91 7819909454</span>
            </a>
          </div>
        </AnimateOnScroll>

        {/* 4 Sightseeing Cards with Directional Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spots.map((spot, idx) => (
            <AnimateOnScroll key={idx} direction={spot.direction} delay={idx * 0.12} duration={0.65}>
              <div className="h-full bg-darkbg-850 rounded-3xl overflow-hidden border border-white/10 hover:border-taxi-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkbg-850 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-bold text-taxi-300 uppercase tracking-wider border border-white/10">
                    {spot.tag}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-taxi-300 transition-colors">
                      {spot.title}
                    </h3>
                    <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                      {spot.desc}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/917819909454?text=${encodeURIComponent(
                      `Hello Shiv Tour & Travels, I want to book a taxi for sightseeing to ${spot.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-taxi-400 hover:text-taxi-300 gap-1.5 pt-3 border-t border-white/5"
                  >
                    <span>Book Cab for This Spot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
