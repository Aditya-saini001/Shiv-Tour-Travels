'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function MapSection() {
  return (
    <section id="contact" className="py-20 bg-darkbg-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
              Find Our Location
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Visit Our <span className="gold-gradient-text">Dehradun Office</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              Centrally situated at Union Bank Road, Chandrabani, Pithuwala, Dehradun. Reach out anytime for instant bookings or 24/7 phone assistance.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card: Slide from LEFT */}
          <div className="lg:col-span-5">
            <AnimateOnScroll direction="left" duration={0.75} className="h-full">
              <div className="h-full bg-darkbg-850 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-taxi-400" />
                    Shiv Shubh Tour & Travels Headquarters
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-taxi-400 uppercase tracking-wider">Office Address</h4>
                        <p className="text-sm text-slate-200 mt-0.5">
                          Union Bank Road, Chandrabani, Pithuwala, Dehradun, Uttarakhand - 248002
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-taxi-400 uppercase tracking-wider">Direct Phone</h4>
                        <a
                          href="tel:+919084712392"
                          className="text-sm font-bold text-white hover:text-taxi-400 transition-colors block mt-0.5 font-mono"
                        >
                          +91 9084712392
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-taxi-400 uppercase tracking-wider">Email Assistance</h4>
                        <a
                          href="mailto:shivshubhtourtravel@gmail.com"
                          className="text-sm text-slate-200 hover:text-taxi-400 transition-colors block mt-0.5"
                        >
                          shivshubhtourtravel@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Operations</h4>
                        <p className="text-sm text-slate-200 mt-0.5">
                          Open 24 Hours / 7 Days a Week (All 365 Days)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=Union+Bank+Road+Chandrabani+Pithuwala+Dehradun+Uttarakhand+248002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-taxi-400" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="tel:+919084712392"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black text-xs font-extrabold transition-colors shadow"
                  >
                    <Phone className="w-3.5 h-3.5 fill-black" />
                    <span>Call Us Now</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Embedded Google Map: Slide from RIGHT */}
          <div className="lg:col-span-7">
            <AnimateOnScroll direction="right" duration={0.75} className="h-full">
              <div className="h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[380px] bg-darkbg-900">
                <iframe
                  title="Shiv Shubh Tour & Travels Dehradun Location"
                  src="https://maps.google.com/maps?q=Union+Bank+Road,+Chandrabani,+Pithuwala,+Dehradun,+Uttarakhand+248002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.05]"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
