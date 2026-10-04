'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Which is the best taxi service in Dehradun?',
    answer:
      'Shiv Shubh Tour & Travels delivers the best taxi service in Dehradun — fixed fares, professional drivers, clean vehicles, and 24/7 availability for city rides, airport transfers, and outstation trips across Uttarakhand. Unlike app-based aggregators, there is zero surge pricing. Call +91 9084712392 to book your ride instantly.',
  },
  {
    question: 'What is the cheapest cab service in Dehradun?',
    answer:
      'Shiv Shubh Tour & Travels offers the best taxi service in Dehradun at fixed, transparent fares — airport transfers from ₹899, Mussoorie/Rishikesh/Haridwar from ₹2,000, and Delhi from ₹4,000. No hidden charges, no cancellation penalties, and no surge pricing, ever.',
  },
  {
    question: 'What are the Dehradun taxi rates per day?',
    answer:
      'Dehradun taxi rates per day at Shiv Shubh Tour & Travels (8 hours / 80 km package): Sedan (Dzire / Aura) ₹2,200, SUV (Ertiga) ₹3,500, Innova Crysta ₹5,000, Tempo Traveller 12-seater ₹6,000, and Tempo Traveller 17-seater ₹7,500. Standard extra km and hour rates apply for longer durations.',
  },
  {
    question: 'What is the best taxi service in Dehradun to Delhi?',
    answer:
      'For Dehradun to Delhi, Shiv Shubh Tour & Travels offers guaranteed one-way fixed fares starting at ₹4,000 for a Sedan, ₹5,000 for an SUV, and ₹10,500 for an Innova Crysta. Punctual doorstep pickup, express toll route navigation, and courteous drivers.',
  },
  {
    question: 'How do I find a taxi service near me in Dehradun?',
    answer:
      'Shiv Shubh Tour & Travels operates across all localities of Dehradun — Chandrabani, Pithuwala, ISBT, Clock Tower, Rajpur Road, Prem Nagar, Clement Town, Sahastradhara Road, Ballupur, and Jakhan. Simply call or WhatsApp +91 9084712392 for cab arrival in 15 to 20 minutes.',
  },
  {
    question: 'What is the outstation taxi service fare from Dehradun?',
    answer:
      'Outstation fares from Dehradun: Mussoorie ₹2,000 | Rishikesh ₹2,000 | Haridwar ₹2,000 | Delhi ₹4,000 | Chandigarh ₹3,500 | Auli ₹9,000 | Kedarnath ₹9,000 | Badrinath ₹10,500 | Char Dham Yatra from ₹38,000. All base fares apply for Sedan (Dzire).',
  },
  {
    question: 'What is the Dehradun taxi service contact number?',
    answer:
      'You can contact Shiv Shubh Tour & Travels directly at +91 9084712392 by phone call or WhatsApp, or by email at shivshubhtourtravel@gmail.com. Our helpline is open 24/7, 365 days a year for urgent rides and advance bookings.',
  },
  {
    question: 'What is the Char Dham Yatra package from Dehradun?',
    answer:
      'Char Dham Yatra covers the four holy Himalayan shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath. Shiv Shubh Tour & Travels offers a complete 10–12 day pilgrimage package from Dehradun. Prices start at ₹38,000 for Sedan Dzire, ₹48,000 for Ertiga, and ₹62,000 for Innova Crysta. Call +91 9084712392 for customized itineraries.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-darkbg-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll direction="down" duration={0.7}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-taxi-400 bg-taxi-500/10 px-3.5 py-1.5 rounded-full border border-taxi-500/20 mb-3">
              Our FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
              Everything you need to know about our taxi fares, cab booking, outstation trips, and Char Dham pilgrimage packages.
            </p>
          </div>
        </AnimateOnScroll>

        {/* FAQ Accordion List with Staggered Scroll Animations */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const dir = idx % 2 === 0 ? 'left' : 'right';

            return (
              <AnimateOnScroll key={idx} direction={dir} delay={(idx % 4) * 0.1} duration={0.6}>
                <div className="bg-darkbg-850 rounded-2xl border border-white/10 hover:border-taxi-500/30 transition-colors overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-taxi-300 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-taxi-400 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-taxi-500 text-black' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                      <p>{faq.answer}</p>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-4 text-xs font-semibold">
                        <a
                          href="tel:+919084712392"
                          className="text-taxi-400 hover:text-taxi-300 flex items-center gap-1.5"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Book by calling +91 9084712392</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* View All FAQs link */}
        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-taxi-500 hover:text-black text-white text-xs font-bold transition-all"
          >
            <span>Visit Complete FAQ Knowledgebase</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
