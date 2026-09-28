'use client';

import React from 'react';
import Link from 'next/link';
import { Star, Quote, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const testimonials = [
  {
    name: 'Nilesh Mehta',
    city: 'Surat, Gujarat',
    route: 'Dehradun to Mussoorie Sightseeing',
    review:
      'I booked a sightseeing tour taxi from Dehradun to Mussoorie, and it was one of the best decisions! The driver knew all the best tourist spots and even suggested hidden gems in Mussoorie. Truly the best cab service in Dehradun!',
    rating: 5,
    direction: 'left' as const,
  },
  {
    name: 'Padam Singh',
    city: 'Karnal, Haryana',
    route: 'Haridwar to Rishikesh Trip',
    review:
      'I’ve tried several taxi services in Haridwar, but Shiv Tour & Travels stands out for its punctuality and professionalism. The vehicle was spotless, comfortable, and the ride was smooth throughout.',
    rating: 5,
    direction: 'up' as const,
  },
  {
    name: 'Nitish Saini',
    city: 'Bangalore, Karnataka',
    route: 'Delhi to Dehradun Outstation',
    review:
      'Booked a cab for a weekend trip from Delhi to Dehradun — the pricing was fair, the car was comfortable, and the driver was very knowledgeable about the local area. Smooth experience from start to finish. Five stars!',
    rating: 5,
    direction: 'right' as const,
  },
  {
    name: 'Sanghamitra',
    city: 'Dubai, UAE',
    route: 'Jolly Grant Airport Transfer',
    review:
      'I needed a last-minute cab from Dehradun to Jolly Grant Airport, and they delivered! The taxi arrived within 15 minutes, and the entire process was hassle-free. Punctual, professional, and great value for money!',
    rating: 5,
    direction: 'left' as const,
  },
  {
    name: 'Tarun Kumar',
    city: 'Agra, Uttar Pradesh',
    route: 'Char Dham Pilgrimage Circuit',
    review:
      'Amazing experience with the best taxi service in Dehradun! The driver arrived on time, the car was spotless, and the entire ride was incredibly comfortable. Highly recommend Shiv Tour & Travels!',
    rating: 5,
    direction: 'up' as const,
  },
  {
    name: 'Sudarshan Kumar Mahiya',
    city: 'Bikaner, Rajasthan',
    route: 'Rishikesh to Airport Drop',
    review:
      'I used this taxi service for an airport drop from Rishikesh to Jolly Grant Airport, and it was seamless. The driver was polite, professional, and ensured I reached well on time. Great value for money!',
    rating: 5,
    direction: 'right' as const,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-darkbg-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
              Our Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              What People Say About <span className="gold-gradient-text">Shiv Tour & Travels</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              Real feedback from thousands of satisfied tourists, pilgrims, and families across India and abroad.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 3-Column Reviews Grid with Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <AnimateOnScroll key={idx} direction={item.direction} delay={(idx % 3) * 0.15} duration={0.65}>
              <div className="h-full bg-darkbg-850/80 rounded-3xl p-7 border border-white/10 hover:border-taxi-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5 relative group">
                <Quote className="absolute top-6 right-6 w-9 h-9 text-taxi-500/15 group-hover:text-taxi-500/30 transition-colors" />

                <div>
                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1 text-taxi-400 mb-4">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-taxi-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-400 ml-2">5.0 / 5.0</span>
                  </div>

                  <p className="text-sm text-slate-300/90 leading-relaxed mb-6 italic">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-taxi-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">{item.city}</p>
                  </div>
                  <span className="text-[10px] text-taxi-400/90 font-semibold bg-taxi-500/10 px-2.5 py-1 rounded-full border border-taxi-500/20">
                    Verified Trip
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-taxi-500 hover:text-black text-white text-sm font-bold border border-white/10 transition-all shadow-lg"
          >
            <span>Read All Verified Customer Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
