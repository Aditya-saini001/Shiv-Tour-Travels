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
import { Mountain, Compass, Calendar, ArrowRight, MessageSquare, Phone, Check, Clock } from 'lucide-react';

const tourPackages = [
  {
    title: 'Complete Char Dham Yatra Tour Package',
    subtitle: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
    duration: '10 to 12 Days (Full Circuit)',
    pickup: 'Dehradun / Haridwar / Rishikesh',
    price: '₹38,000',
    vehicle: 'Sedan Dzire (SUV & Crysta Available)',
    desc: 'The most sacred Himalayan pilgrimage. Includes full circuit transportation, experienced hill drivers, halt arrangements, and permit guidance.',
    image: '/images/kedarnath.jpg',
    popular: true,
    link: '/packages/char-dham-yatra',
    direction: 'left' as const,
  },
  {
    title: 'Do Dham Yatra (Kedarnath & Badrinath)',
    subtitle: 'Guptkashi • Sonprayag • Kedarnath • Joshimath • Badrinath',
    duration: '5 to 6 Days Package',
    pickup: 'Dehradun / Haridwar',
    price: '₹24,000',
    vehicle: 'AC Sedan / Ertiga SUV',
    desc: 'Focus on the two holiest Dhams. Safe driving through Rudraprayag and Sonprayag with timely darshan assistance.',
    image: '/images/badrinath.jpg',
    popular: false,
    link: '/packages/char-dham-yatra',
    direction: 'up' as const,
  },
  {
    title: 'Mussoorie Queen of Hills Sightseeing',
    subtitle: 'Kempty Falls • Gun Hill • Camel\'s Back • Mall Road',
    duration: 'Full Day Sightseeing (Same Day Return)',
    pickup: 'Anywhere in Dehradun',
    price: '₹3,500',
    vehicle: 'Private AC Sedan',
    desc: 'Scenic drive up the Garhwal hills to Mussoorie. Enjoy iconic viewpoints, company garden, George Everest Peak, and Mall Road.',
    image: '/images/mussoorie.jpg',
    popular: true,
    link: '/packages/dehradun-to-mussoorie-taxi',
    direction: 'right' as const,
  },
  {
    title: 'Haridwar & Rishikesh Divine Spiritual Tour',
    subtitle: 'Har Ki Pauri • Ram Jhula • Laxman Jhula • Ganga Aarti',
    duration: 'Full Day (Morning to Night Aarti)',
    pickup: 'Dehradun City / Airport',
    price: '₹3,800',
    vehicle: 'Private AC Cab',
    desc: 'Immerse yourself in spirituality. Experience the world-renowned evening Ganga Aarti at Har Ki Pauri and Rishikesh ashrams in peace.',
    image: '/images/haridwar.jpg',
    popular: false,
    link: '/packages/dehradun-to-rishikesh-taxi',
    direction: 'left' as const,
  },
  {
    title: 'Auli Skiing & Joshimath Snow Tour',
    subtitle: 'Auli Ropeway • Gorson Bugyal • Nanda Devi Views',
    duration: '3 Nights / 4 Days Tour',
    pickup: 'Dehradun / Rishikesh',
    price: '₹14,000',
    vehicle: 'Rugged SUV (Ertiga / Innova)',
    desc: 'Witness pristine snow slopes and panoramic views of Nanda Devi. Reliable SUV cab for high-altitude mountain passes.',
    image: '/images/auli.webp',
    popular: true,
    link: '/contact',
    direction: 'up' as const,
  },
  {
    title: 'Chopta, Tungnath & Deoriatal Expedition',
    subtitle: 'Mini Switzerland of India • Highest Shiva Temple',
    duration: '2 Nights / 3 Days',
    pickup: 'Dehradun / Haridwar',
    price: '₹11,000',
    vehicle: 'SUV / Commercial Cab',
    desc: 'Trek to the highest temple of Lord Shiva at Tungnath and marvel at Chandrashila peak sunrise views with our experienced driver.',
    image: '/images/chopta.jpg',
    popular: false,
    link: '/contact',
    direction: 'right' as const,
  },
];

export default function PackagesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Uttarakhand Tour Packages from Dehradun"
        subtitle="Curated Pilgrimage, Hill Station & Adventure Taxi Packages with Guaranteed Fixed Rates"
        breadcrumbs={[{ name: 'Packages' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="down" duration={0.7}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
                All-Inclusive Packages
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Discover Uttarakhand with <span className="gold-gradient-text">Shiv Shubh Tour & Travels</span>
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
                Choose from our popular customized tour itineraries below. All packages include dedicated commercial cabs, hill-trained chauffeurs, fuel, and toll assistance.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Packages 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tourPackages.map((pkg, idx) => {
              const encodedMsg = encodeURIComponent(
                `Hello Shiv Shubh Tour & Travels, I am interested in booking the tour package: ${pkg.title} (${pkg.price}). Please share details.`
              );

              return (
                <AnimateOnScroll key={idx} direction={pkg.direction} delay={(idx % 2) * 0.15} duration={0.7}>
                  <div className="h-full bg-darkbg-850 rounded-3xl overflow-hidden border border-white/10 hover:border-taxi-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between hover:-translate-y-1.5 group">
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-darkbg-850 via-darkbg-850/40 to-transparent" />

                      {pkg.popular && (
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-taxi-500 text-black text-[10px] font-black uppercase tracking-wider shadow">
                          Bestseller
                        </span>
                      )}

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
                        <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          <Clock className="w-3.5 h-3.5 text-taxi-400" />
                          <span>{pkg.duration}</span>
                        </span>
                        <span className="text-xl font-black text-taxi-400 font-mono bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-xl border border-taxi-500/30">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-taxi-300 transition-colors">
                          {pkg.title}
                        </h3>
                        <p className="text-xs font-bold text-taxi-400 mb-3">{pkg.subtitle}</p>
                        <p className="text-sm text-slate-300/80 leading-relaxed mb-6 font-normal">
                          {pkg.desc}
                        </p>

                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5 text-xs text-slate-300 mb-6">
                          <p>
                            <strong className="text-white">Pickup Location:</strong> {pkg.pickup}
                          </p>
                          <p>
                            <strong className="text-white">Vehicle Option:</strong> {pkg.vehicle}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                        <a
                          href={`https://wa.me/919084712392?text=${encodedMsg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>WhatsApp Quote</span>
                        </a>

                        <a
                          href="tel:+919084712392"
                          className="py-3 px-5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                        >
                          <Phone className="w-4 h-4 fill-black" />
                          <span>Book Call</span>
                        </a>

                        <Link
                          href={pkg.link}
                          className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 flex items-center justify-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
