'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Website Inquiry - Shiv Tour & Travels*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Pickup:* ${formData.pickup}%0A*Drop:* ${formData.drop}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/917819909454?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Contact Shiv Tour & Travels"
        subtitle="24/7 Customer Support & Rapid Taxi Booking Desk in Dehradun"
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Interactive Booking Inquiry Form */}
            <div className="lg:col-span-7">
              <AnimateOnScroll direction="left" duration={0.75}>
                <div className="bg-darkbg-850 p-7 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20">
                      Send a Message
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
                      Book or Request a <span className="gold-gradient-text">Custom Quote</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Fill out this quick form to instantly send your travel request to our WhatsApp dispatch team!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">Pickup Location *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dehradun ISBT / Rajpur Road"
                          value={formData.pickup}
                          onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                          className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1">Drop Destination *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Delhi / Mussoorie / Kedarnath"
                          value={formData.drop}
                          onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                          className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Travel Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Special Requirements / Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Car preference (Sedan, Ertiga, Crysta), passenger count, timing..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-darkbg-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-taxi-400 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-taxi-500 hover:bg-taxi-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-taxi-500/20 transition-all hover:scale-[1.02]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Booking Request via WhatsApp</span>
                    </button>
                  </form>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Contact Information & Hours */}
            <div className="lg:col-span-5 space-y-6">
              <AnimateOnScroll direction="right" duration={0.75}>
                <div className="bg-darkbg-850 p-7 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-taxi-400" />
                    Office Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-taxi-400 uppercase tracking-wider">Office Location</h4>
                        <p className="text-sm text-slate-200 mt-0.5">
                          Near Clock Tower, Rajpur Road, Dehradun, Uttarakhand - 248001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-taxi-400 uppercase tracking-wider">24/7 Phone Number</h4>
                        <a
                          href="tel:+917819909454"
                          className="text-base font-bold text-white hover:text-taxi-400 transition-colors block mt-0.5 font-mono"
                        >
                          +91 7819909454
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-taxi-500/10 flex items-center justify-center text-taxi-400 shrink-0 mt-0.5">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-taxi-400 uppercase tracking-wider">Email Enquiries</h4>
                        <a
                          href="mailto:shivtravelsdehradun@gmail.com"
                          className="text-sm text-slate-200 hover:text-taxi-400 transition-colors block mt-0.5"
                        >
                          shivtravelsdehradun@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Working Hours</h4>
                        <p className="text-sm text-slate-200 mt-0.5">
                          24 Hours a Day / 7 Days a Week (All 365 Days)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href="https://wa.me/917819909454?text=Hello%20Shiv%20Tour%20%26%20Travels,%20I%20have%20an%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Instantly</span>
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Embedded Google Map Section */}
          <div className="mt-16">
            <AnimateOnScroll direction="up" duration={0.75}>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[420px] bg-darkbg-900">
                <iframe
                  title="Shiv Tour & Travels Dehradun Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.60636845347!2d77.94709405!3d30.32556465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sClock%20Tower%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.05]"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidgets />
    </main>
  );
}
