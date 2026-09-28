'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { ShieldCheck, Award, Users, Car, CheckCircle2, Phone, ArrowRight, HeartHandshake, Clock } from 'lucide-react';

export default function AboutPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Safety & Sanitized Fleet',
      desc: 'All our commercial vehicles are inspected regularly, GPS-monitored, and sanitized before every trip.',
      direction: 'left' as const,
    },
    {
      icon: Clock,
      title: '100% Punctuality Guaranteed',
      desc: 'We value your schedule. Our drivers arrive at least 15 minutes before your scheduled pickup time.',
      direction: 'up' as const,
    },
    {
      icon: Award,
      title: 'Fixed & Transparent Rates',
      desc: 'No hidden taxes, zero midnight surge pricing, and no cancellation penalties on genuine requests.',
      direction: 'down' as const,
    },
    {
      icon: Users,
      title: 'Local Hill Experts',
      desc: 'Our chauffeurs have over 10+ years of driving experience on Uttarakhand’s mountain terrains and pilgrimage ghats.',
      direction: 'right' as const,
    },
  ];

  const fleet = [
    {
      name: 'Sedan (Maruti Dzire / Hyundai Aura)',
      capacity: '4 Passengers + 1 Driver',
      features: ['Air Conditioning', 'Ample Boot Space (2 Large Bags)', 'USB Charging', 'Music System'],
      rate: 'Starting ₹11/km or ₹2,200/day',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'SUV (Maruti Suzuki Ertiga)',
      capacity: '6 Passengers + 1 Driver',
      features: ['Rear AC Vents', 'Spacious Legroom', 'Carrier on Roof for Luggage', 'Comfortable Suspension'],
      rate: 'Starting ₹15/km or ₹3,500/day',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Premium MPV (Toyota Innova Crysta)',
      capacity: '7 Passengers + 1 Driver',
      features: ['Captain Seats', 'Dual Climate AC', 'Superior Highway Ride', 'Ideal for Char Dham & Long Trips'],
      rate: 'Starting ₹20/km or ₹5,000/day',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="About Shiv Tour & Travels"
        subtitle="Dehradun’s Premier Taxi & Pilgrimage Tour Company Dedicated to Seamless Himalayan Travel"
        breadcrumbs={[{ name: 'About Us' }]}
      />

      {/* Main Story Section */}
      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual with left slide */}
            <div className="lg:col-span-6">
              <AnimateOnScroll direction="left" duration={0.8}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
                      alt="Shiv Tour & Travels Team & Fleet"
                      className="w-full h-[420px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-taxi-400 to-taxi-600 text-black p-6 rounded-2xl shadow-2xl border border-white/20 hidden sm:block">
                    <span className="block text-4xl font-black font-mono">10,000+</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Happy Travelers Served</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Story with right slide */}
            <div className="lg:col-span-6 space-y-6">
              <AnimateOnScroll direction="right" duration={0.8}>
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20">
                    Our Heritage & Mission
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                    Making Travel in Uttarakhand <span className="gold-gradient-text">Safe, Affordable & Joyful</span>
                  </h2>

                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    Founded with the vision to eliminate erratic pricing and unreliable cab services in Dehradun, <strong className="text-white">Shiv Tour & Travels</strong> has grown into the region&apos;s most reliable taxi partner for locals, corporate visitors, tourists, and pilgrims alike.
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    Headquartered near the iconic Clock Tower on Rajpur Road, Dehradun, our operations run 24 hours a day, 7 days a week. We take immense pride in our team of professional chauffeurs who possess comprehensive knowledge of every mountain pass, weather pattern, and local attraction throughout Uttarakhand.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <a
                      href="tel:+917819909454"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm transition-all shadow-lg"
                    >
                      <Phone className="w-4 h-4 fill-black" />
                      <span>Direct Call: +91 7819909454</span>
                    </a>
                    <a
                      href="https://wa.me/917819909454?text=Hello%20Shiv%20Tour%20%26%20Travels,%20I%20want%20to%20know%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
                    >
                      <span>WhatsApp Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-20 bg-darkbg-900 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="down" duration={0.7}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                The 4 Pillars of <span className="gold-gradient-text">Shiv Tour & Travels</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <AnimateOnScroll key={idx} direction={p.direction} delay={idx * 0.12} duration={0.65}>
                  <div className="h-full bg-darkbg-850 p-7 rounded-3xl border border-white/10 hover:border-taxi-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1.5">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-taxi-500/10 text-taxi-400 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                      <p className="text-xs text-slate-300/80 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Main Fleet Overview */}
      <section className="py-20 bg-darkbg-950 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="down" duration={0.7}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
                Our Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Well-Maintained, Sanitized <span className="gold-gradient-text">Vehicles</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fleet.map((car, idx) => (
              <AnimateOnScroll key={idx} direction="up" delay={idx * 0.15} duration={0.65}>
                <div className="bg-darkbg-850 rounded-3xl overflow-hidden border border-white/10 hover:border-taxi-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkbg-850 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{car.name}</h3>
                      <p className="text-xs text-taxi-400 font-semibold mb-4">{car.capacity}</p>

                      <ul className="space-y-2 mb-6">
                        {car.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-center text-xs text-slate-300 gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-taxi-400 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-taxi-300 font-mono">{car.rate}</span>
                      <a
                        href="tel:+917819909454"
                        className="px-4 py-2 rounded-xl bg-taxi-500 text-black text-xs font-bold hover:bg-taxi-400 transition-colors"
                      >
                        Book Car
                      </a>
                    </div>
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
