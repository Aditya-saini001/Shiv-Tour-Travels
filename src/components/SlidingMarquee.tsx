'use client';

import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

const destinations = [
  'Jolly Grant Airport',
  'Mussoorie Queen of Hills',
  'Nainital Lake City',
  'Auli Ski Resort',
  'Sahastradhara Springs',
  "Robber's Cave Guchhupani",
  'Char Dham Pilgrimage',
  'Kedarnath Dham',
  'Badrinath Temple',
  'Rishikesh Yoga Capital',
  'Haridwar Ganga Aarti',
  'Delhi NCR Expressways',
];

export default function SlidingMarquee() {
  return (
    <div className="w-full bg-darkbg-900 border-y border-taxi-500/20 py-4 overflow-hidden relative shadow-inner my-12">
      {/* Soft gradient edge fade */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-darkbg-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-darkbg-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee space-x-8">
        {[...destinations, ...destinations].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-3 text-slate-300 text-sm sm:text-base font-bold whitespace-nowrap hover:text-taxi-400 transition-colors cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-taxi-400" />
            <span className="tracking-wide uppercase text-xs sm:text-sm font-extrabold">{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-taxi-500/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
