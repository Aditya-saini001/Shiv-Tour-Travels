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
import { 
  FileText, 
  ListChecks, 
  AlertTriangle, 
  CalendarCheck, 
  ShieldAlert, 
  Phone, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function TermsConditionsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Terms and Conditions"
        subtitle="Please read our service guidelines, booking, cancellation, and pilgrimage policies carefully"
        breadcrumbs={[{ name: 'Terms and Conditions' }]}
      />

      <section className="py-16 sm:py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Intro Card */}
          <AnimateOnScroll direction="down" duration={0.6}>
            <div className="bg-darkbg-850 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl mb-10 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-taxi-500/10 border border-taxi-500/30 text-taxi-400 text-xs font-bold uppercase tracking-widest mb-4">
                <FileText className="w-4 h-4" />
                <span>Service Agreement</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Welcome to <span className="gold-gradient-text">Shiv Shubh Tour & Travels!</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                We&apos;re excited to assist you with your travel needs. Please take a moment to read the terms and conditions below carefully. By using our services, you agree to comply with these terms, which help ensure a smooth, safe, and enjoyable experience for all passengers.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Section 1: General Guidelines */}
          <AnimateOnScroll direction="up" duration={0.65}>
            <div className="bg-darkbg-850 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl mb-8 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <ListChecks className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">General Guidelines</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Inclusions:</strong> All quoted fares include fuel, driver allowance, state taxes, and toll taxes unless specifically mentioned otherwise in a custom package.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Hill Ascent AC Policy:</strong> Air conditioning will be switched off while driving uphill on steep mountain terrains and ghat ascents for engine safety, passenger safety, and optimal vehicle performance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Night Driving Regulations:</strong> Night driving on high-altitude mountain routes and Char Dham pilgrimage ghats is strictly restricted after 8:00 PM in strict adherence to Uttarakhand government road safety mandates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Seating Capacity:</strong> The number of passengers must strictly comply with the government registered legal seating capacity of the booked vehicle (Sedan: 4 passengers, SUV: 6 passengers, Innova: 7 passengers).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Punctuality:</strong> Please communicate your exact pickup address and landmark clearly. Our chauffeurs arrive 15 minutes before the scheduled time.
                  </span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Section 2: Special Tours and Chardham Yatra */}
          <AnimateOnScroll direction="up" duration={0.65}>
            <div className="bg-darkbg-850 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl mb-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Special Tours and Chardham Yatra</h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-taxi-400" />
                    Minimum booking durations are as follows:
                  </p>
                  <div className="ml-4 space-y-2.5 pl-3 border-l-2 border-taxi-500/30">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-taxi-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Chardham Yatra & Kedarnath-Badrinath Yatra:</strong> 12 days (Ex-Delhi) or 10 days (Ex-Haridwar/Dehradun).
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-taxi-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Yamunotri-Gangotri Yatra:</strong> 8 days (Ex-Delhi) or 6 days (Ex-Haridwar/Dehradun).
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-taxi-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Single Dham Yatra:</strong> 6 days (Ex-Delhi) or 4 days (Ex-Haridwar/Dehradun).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>
                    A <strong className="text-white">50% advance payment</strong> is required to confirm your booking. The remaining amount must be paid before the last day of the drop.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>
                    Additional charges will apply for changes to the itinerary or added sightseeing trips beyond the original agreed tour plan.
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Section 3: Booking and Cancellation Policy */}
          <AnimateOnScroll direction="up" duration={0.65}>
            <div className="bg-darkbg-850 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl mb-8 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Booking and Cancellation Policy</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>Bookings are confirmed only after the advance payment is received. All bookings are subject to vehicle availability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>Cancellations made within <strong className="text-white">48 hours</strong> of the scheduled travel date will incur a <strong className="text-white">50% penalty</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">No refunds</strong> will be issued for cancellations on the day of travel or in case of no-shows.</span>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Section 4: Responsibilities and Safety */}
          <AnimateOnScroll direction="up" duration={0.65}>
            <div className="bg-darkbg-850 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl mb-8 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Responsibilities and Safety</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>In the event of landslides, roadblocks, severe bad weather, or natural disasters, any additional accommodation, meal, or alternate transfer costs must be borne by the customer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>We ensure our vehicles are thoroughly serviced and well-maintained; however, unforeseen delays or breakdowns due to severe mountain weather or road conditions may occur. In such cases, backup assistance is arranged as quickly as feasible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-taxi-400 shrink-0 mt-0.5" />
                  <span>Travel insurance is not included in our cab services. We strongly recommend that customers arrange their own comprehensive personal travel and health insurance for personal safety and belongings.</span>
                </li>
              </ul>

              {/* Note Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3.5 mt-6">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-red-200 leading-relaxed font-medium">
                  <strong className="text-red-400 font-bold uppercase tracking-wider block mb-0.5">Strict Policy Note:</strong>
                  Smoking and alcohol consumption are strictly prohibited inside all commercial vehicles. Please ensure the safety of your personal luggage and belongings, as we are not responsible for loss, damage, or theft.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Need Help CTA */}
          <AnimateOnScroll direction="up" duration={0.65}>
            <div className="bg-gradient-to-r from-darkbg-900 via-darkbg-850 to-darkbg-900 border border-taxi-500/30 rounded-3xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <h4 className="text-lg font-bold text-white">Have questions about our terms or bookings?</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Our customer desk is available 24/7 to clarify any questions.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919084712392"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-xs sm:text-sm transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  <span>Call +91 9084712392</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-bold border border-white/10 transition-colors"
                >
                  <span>Contact Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
