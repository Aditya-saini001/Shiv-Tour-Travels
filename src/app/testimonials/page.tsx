'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Star, Quote, ThumbsUp, ShieldCheck, Phone } from 'lucide-react';

const reviews = [
  {
    name: 'Nilesh Mehta',
    city: 'Surat, Gujarat',
    route: 'Dehradun to Mussoorie Sightseeing',
    date: 'February 2026',
    stars: 5,
    text: 'I booked a sightseeing tour taxi from Dehradun to Mussoorie, and it was one of the best decisions! The driver knew all the best tourist spots and even suggested hidden gems in Mussoorie. Truly the best cab service in Dehradun!',
  },
  {
    name: 'Padam Singh',
    city: 'Karnal, Haryana',
    route: 'Haridwar to Rishikesh Trip',
    date: 'January 2026',
    stars: 5,
    text: 'I’ve tried several taxi services in Haridwar, but Shiv Tour & Travels stands out for its punctuality and professionalism. The vehicle was spotless, comfortable, and the ride from Haridwar to Rishikesh was smooth throughout.',
  },
  {
    name: 'Nitish Saini',
    city: 'Bangalore, Karnataka',
    route: 'Delhi to Dehradun Outstation',
    date: 'January 2026',
    stars: 5,
    text: 'Booked a cab for a weekend trip from Delhi to Dehradun — the pricing was fair, the car was comfortable, and the driver was very knowledgeable about the local area. Smooth experience from start to finish. Five stars!',
  },
  {
    name: 'Sanghamitra',
    city: 'Dubai, UAE',
    route: 'Jolly Grant Airport Transfer',
    date: 'December 2025',
    stars: 5,
    text: 'I needed a last-minute cab from Dehradun to Jolly Grant Airport, and they delivered! The taxi arrived within 15 minutes, and the entire process was hassle-free. Punctual, professional, and great value for money!',
  },
  {
    name: 'Tarun Kumar',
    city: 'Agra, Uttar Pradesh',
    route: 'Char Dham Pilgrimage Circuit',
    date: 'November 2025',
    stars: 5,
    text: 'Amazing experience with the best taxi service in Dehradun! The driver arrived on time, the car was spotless, and the entire ride was incredibly comfortable. Highly recommend Shiv Tour & Travels!',
  },
  {
    name: 'Sudarshan Kumar Mahiya',
    city: 'Bikaner, Rajasthan',
    route: 'Rishikesh to Airport Drop',
    date: 'November 2025',
    stars: 5,
    text: 'I used this taxi service for an airport drop from Rishikesh to Jolly Grant Airport, and it was seamless. The driver was polite, professional, and ensured I reached on time. Great value for money!',
  },
  {
    name: 'Rohan Deshmukh',
    city: 'Mumbai, Maharashtra',
    route: 'Dehradun to Auli Winter Tour',
    date: 'October 2025',
    stars: 5,
    text: 'Traveled to Auli with my family in their Innova Crysta. Outstanding driver who handled snowy mountain turns with extreme skill. Transparent pricing with zero hidden surcharges.',
  },
  {
    name: 'Pooja Agarwal',
    city: 'New Delhi',
    route: 'Dehradun to Delhi Airport Drop',
    date: 'September 2025',
    stars: 5,
    text: 'Booked their sedan for an urgent Delhi flight transfer at 2:00 AM. Driver was ready 20 minutes prior. Very clean car and courteous behaviour.',
  },
];

export default function TestimonialsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Customer Reviews & Testimonials"
        subtitle="Read Authentic Feedback From 10,000+ Delighted Tourists, Pilgrims & Families"
        breadcrumbs={[{ name: 'Reviews' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Score Banner */}
          <AnimateOnScroll direction="down" duration={0.7}>
            <div className="bg-darkbg-850 rounded-3xl p-8 border border-white/10 shadow-2xl mb-14 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-taxi-400 block mb-1">
                  Overall Rating
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono">4.9</span>
                  <div>
                    <div className="flex text-taxi-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-taxi-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">Based on 1,250+ verified Google Reviews</span>
                  </div>
                </div>
              </div>

              <a
                href="tel:+917819909454"
                className="px-6 py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all shadow-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Book a Ride: +91 7819909454</span>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Reviews Grid with Staggered Scroll Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <AnimateOnScroll
                key={idx}
                direction={idx % 3 === 0 ? 'left' : idx % 3 === 1 ? 'up' : 'right'}
                delay={(idx % 3) * 0.15}
                duration={0.65}
              >
                <div className="h-full bg-darkbg-850 rounded-3xl p-7 border border-white/10 hover:border-taxi-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5 relative group">
                  <Quote className="absolute top-6 right-6 w-9 h-9 text-taxi-500/15 group-hover:text-taxi-500/30 transition-colors" />

                  <div>
                    <div className="flex items-center gap-1 text-taxi-400 mb-3">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-taxi-400" />
                      ))}
                    </div>

                    <p className="text-xs text-taxi-400 font-semibold mb-2">{rev.route}</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">&ldquo;{rev.text}&rdquo;</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-taxi-300 transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-slate-400">{rev.city}</p>
                    </div>
                    <span className="text-[10px] text-slate-500">{rev.date}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
