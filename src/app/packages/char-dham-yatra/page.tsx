'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Mountain, Check, Phone, MessageSquare, Calendar, Car } from 'lucide-react';

export default function CharDhamPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const shrines = [
    { name: 'Yamunotri Dham', image: '/images/yamunotri.webp', desc: 'Seat of Goddess Yamuna, sacred hot sulphur springs at Surya Kund.' },
    { name: 'Gangotri Dham', image: '/images/gangotri.jpg', desc: 'Origin of River Bhagirathi Ganga, pure white temple nestled in cedar groves.' },
    { name: 'Kedarnath Dham', image: '/images/kedarnath.jpg', desc: 'Ancient Jyotirlinga of Lord Shiva at 3,583m amidst snow-capped peaks.' },
    { name: 'Badrinath Dham', image: '/images/badrinath.jpg', desc: 'Abode of Lord Badri Vishal along the banks of holy Alaknanda river.' },
  ];

  const itinerary = [
    { day: 'Day 01', route: 'Dehradun to Barkot (via Mussoorie & Kempty Falls)', desc: 'Scenic mountain drive to Barkot base camp (approx. 135 km / 5-6 hrs).' },
    { day: 'Day 02', route: 'Barkot to Yamunotri Dham & back to Barkot', desc: 'Drive to Janki Chatti and trek 6 km to Yamunotri Temple for holy darshan & holy bath in Surya Kund.' },
    { day: 'Day 03', route: 'Barkot to Uttarkashi (via Dharasu)', desc: 'Drive to Uttarkashi (approx. 100 km). Visit historic Kashi Vishwanath Temple in the evening.' },
    { day: 'Day 04', route: 'Uttarkashi to Gangotri Dham & back to Uttarkashi', desc: 'Drive along Bhagirathi river to Gangotri temple (approx. 100 km one way), holy dip in Bhagirathi & return.' },
    { day: 'Day 05', route: 'Uttarkashi to Guptkashi / Sitapur', desc: 'Long scenic journey through mountain valleys to the base of Kedarnath (approx. 220 km / 8 hrs).' },
    { day: 'Day 06', route: 'Guptkashi to Sonprayag & Kedarnath Dham Trek', desc: 'Early morning transfer to Sonprayag/Gaurikund. Trek 16 km or take helicopter to Kedarnath Temple for evening Aarti.' },
    { day: 'Day 07', route: 'Kedarnath Darshan & Trek down to Guptkashi', desc: 'Morning darshan of Baba Kedarnath. Trek down to Gaurikund and overnight stay at Guptkashi.' },
    { day: 'Day 08', route: 'Guptkashi to Badrinath (via Joshimath)', desc: 'Drive through Chopta valley or Chamoli to Badrinath Dham. Attend evening Aarti at Badrinath Temple.' },
    { day: 'Day 09', route: 'Badrinath to Rudraprayag / Srinagar', desc: 'Morning bath in Tapt Kund & Badrinath darshan. Visit Mana Village (first village of India) and drive to Rudraprayag.' },
    { day: 'Day 10', route: 'Rudraprayag to Rishikesh & Dehradun Drop', desc: 'Visit Devprayag (Sangam of Alaknanda & Bhagirathi). Drop at Dehradun / Haridwar with sacred memories.' },
  ];

  const cabRates = [
    { vehicle: 'Maruti Suzuki Dzire (Sedan)', capacity: '4 Seater', price: '₹38,000 - ₹42,000', popular: false },
    { vehicle: 'Maruti Ertiga (SUV)', capacity: '6 Seater', price: '₹48,000 - ₹52,000', popular: true },
    { vehicle: 'Toyota Innova Crysta (Luxury MPV)', capacity: '7 Seater', price: '₹62,000 - ₹68,000', popular: true },
    { vehicle: 'Tempo Traveller (12 Seater Luxury)', capacity: '12 Seater', price: '₹92,000 - ₹98,000', popular: false },
  ];

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Char Dham Yatra Taxi Package from Dehradun"
        subtitle="10 to 12 Days Sacred Pilgrimage Covering Yamunotri, Gangotri, Kedarnath & Badrinath"
        breadcrumbs={[{ name: 'Packages', href: '/packages' }, { name: 'Char Dham Yatra' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (Itinerary, Overview) */}
            <div className="lg:col-span-8 space-y-12">
              <AnimateOnScroll direction="left" duration={0.7}>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20">
                    Sacred Pilgrimage Package
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">
                    Complete Char Dham Yatra <span className="gold-gradient-text">By Private Taxi</span>
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    Embark on the divine journey of a lifetime with <strong className="text-white">Shiv Shubh Tour & Travels</strong>. Our Char Dham taxi package offers a private, stress-free pilgrimage across Uttarakhand’s four holiest shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath. You travel at your own pace with a dedicated commercial AC cab and a hill-certified driver who assists you with route timings, parking, and temple visit schedules.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Four Sacred Dhams Photo Showcase */}
              <AnimateOnScroll direction="up" duration={0.7}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Mountain className="w-6 h-6 text-taxi-400" />
                    <span>The Four Sacred Himalayan Shrines</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {shrines.map((shrine, idx) => (
                      <div key={idx} className="bg-darkbg-850 rounded-2xl overflow-hidden border border-white/10 group">
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={shrine.image}
                            alt={shrine.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-darkbg-850 via-transparent to-transparent" />
                          <span className="absolute bottom-3 left-3 text-lg font-black text-white drop-shadow">
                            {shrine.name}
                          </span>
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-slate-300/80 leading-relaxed">{shrine.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Day-by-Day Itinerary */}
              <AnimateOnScroll direction="up" duration={0.7}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-taxi-400" />
                    <span>Detailed 10-Day Itinerary</span>
                  </h3>

                  <div className="space-y-4">
                    {itinerary.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-darkbg-850 p-5 rounded-2xl border border-white/10 hover:border-taxi-500/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-black text-taxi-400 uppercase tracking-wider bg-taxi-500/10 px-2.5 py-0.5 rounded-md">
                            {item.day}
                          </span>
                          <span className="text-[11px] text-slate-400">Fixed Itinerary</span>
                        </div>
                        <h4 className="text-base font-bold text-white">{item.route}</h4>
                        <p className="text-xs text-slate-300/80 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Vehicle Pricing Table */}
              <AnimateOnScroll direction="up" duration={0.7}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Car className="w-6 h-6 text-taxi-400" />
                    <span>Char Dham Yatra Taxi Fares (Full Circuit)</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cabRates.map((c, idx) => (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl border transition-all ${
                          c.popular
                            ? 'bg-darkbg-850 border-taxi-500/50 shadow-xl'
                            : 'bg-darkbg-850/60 border-white/10'
                        }`}
                      >
                        {c.popular && (
                          <span className="text-[10px] font-black uppercase tracking-wider text-taxi-400 bg-taxi-500/10 px-2 py-0.5 rounded mb-2 inline-block">
                            Most Preferred for Hills
                          </span>
                        )}
                        <h4 className="text-lg font-bold text-white">{c.vehicle}</h4>
                        <p className="text-xs text-slate-400 mb-4">{c.capacity}</p>
                        <div className="text-2xl font-black text-taxi-400 font-mono mb-4">{c.price}</div>
                        <a
                          href={`https://wa.me/919084712392?text=${encodeURIComponent(
                            `Hello Shiv Shubh Tour & Travels, I want to book Char Dham Yatra in ${c.vehicle}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Reserve on WhatsApp</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Sidebar: Booking Form & Inclusions */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <AnimateOnScroll direction="right" duration={0.75}>
                <div className="bg-darkbg-850 p-6 sm:p-7 rounded-3xl border border-taxi-500/40 shadow-2xl space-y-6">
                  <div className="text-center pb-4 border-b border-white/10">
                    <span className="text-xs font-bold text-taxi-400 uppercase tracking-widest block">
                      Char Dham Booking Desk
                    </span>
                    <h4 className="text-2xl font-black text-white mt-1">Get Instant Yatra Quote</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Call our pilgrimage specialists anytime 24/7
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="tel:+919084712392"
                      className="w-full py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                    >
                      <Phone className="w-4 h-4 fill-black" />
                      <span>Call: +91 9084712392</span>
                    </a>

                    <a
                      href="https://wa.me/919084712392?text=Hello%20Shiv%20Shubh%20Tour%20%26%20Travels,%20I%20want%20to%20enquire%20about%20Char%20Dham%20Yatra%20package."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Specialist</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">Package Inclusions:</h5>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                        <span>Dedicated vehicle for all 10–12 days</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                        <span>Fuel, state taxes, and toll taxes included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                        <span>Driver allowance, night stay, and food</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                        <span>Parking fees at all temple checkposts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-taxi-400 shrink-0" />
                        <span>Biometric registration guidance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
