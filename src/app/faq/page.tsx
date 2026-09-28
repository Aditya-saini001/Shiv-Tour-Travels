'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { ChevronDown, Phone, MessageSquare, HelpCircle, ArrowRight } from 'lucide-react';

const allFaqs = [
  {
    category: 'Booking & Fares',
    q: 'Which is the best taxi service in Dehradun?',
    a: 'Shiv Tour & Travels delivers the best taxi service in Dehradun — fixed fares, professional drivers, clean vehicles, and 24/7 availability for city rides, airport transfers, and outstation trips across Uttarakhand. Unlike app-based aggregators, there is zero surge pricing. Call +91 7819909454 to book your ride instantly.',
  },
  {
    category: 'Booking & Fares',
    q: 'What is the cheapest cab service in Dehradun?',
    a: 'Shiv Tour & Travels offers the best taxi service in Dehradun at fixed, transparent fares — airport transfers from ₹899, Mussoorie/Rishikesh/Haridwar from ₹2,000, and Delhi from ₹4,000. No hidden charges, no cancellation penalties, and no surge pricing, ever.',
  },
  {
    category: 'Daily Rentals',
    q: 'What are the Dehradun taxi rates per day?',
    a: 'Dehradun taxi rates per day at Shiv Tour & Travels (8 hours / 80 km package): Sedan (Dzire / Aura) ₹2,200, SUV (Ertiga) ₹3,500, Innova Crysta ₹5,000, Tempo Traveller 12-seater ₹6,000, and Tempo Traveller 17-seater ₹7,500. Standard extra km and hour rates apply for longer durations.',
  },
  {
    category: 'Outstation Routes',
    q: 'What is the best taxi service in Dehradun to Delhi?',
    a: 'For Dehradun to Delhi, Shiv Tour & Travels offers guaranteed one-way fixed fares starting at ₹4,000 for a Sedan, ₹5,000 for an SUV, and ₹10,500 for an Innova Crysta. Punctual doorstep pickup, express toll route navigation, and courteous drivers.',
  },
  {
    category: 'Local Pickup',
    q: 'How do I find a taxi service near me in Dehradun?',
    a: 'Shiv Tour & Travels operates across all localities of Dehradun — Clock Tower, Rajpur Road, ISBT, Prem Nagar, Clement Town, Sahastradhara Road, Ballupur, and Jakhan. Simply call or WhatsApp +91 7819909454 for cab arrival in 15 to 20 minutes.',
  },
  {
    category: 'Outstation Routes',
    q: 'What is the outstation taxi service fare from Dehradun?',
    a: 'Outstation fares from Dehradun: Mussoorie ₹2,000 | Rishikesh ₹2,000 | Haridwar ₹2,000 | Delhi ₹4,000 | Chandigarh ₹3,500 | Auli ₹9,000 | Kedarnath ₹9,000 | Badrinath ₹10,500 | Char Dham Yatra from ₹38,000. All base fares apply for Sedan (Dzire).',
  },
  {
    category: 'Contact & Support',
    q: 'What is the Dehradun taxi service contact number?',
    a: 'You can contact Shiv Tour & Travels directly at +91 7819909454 by phone call or WhatsApp, or by email at shivtravelsdehradun@gmail.com. Our helpline is open 24/7, 365 days a year for urgent rides and advance bookings.',
  },
  {
    category: 'Char Dham Pilgrimage',
    q: 'What is the Char Dham Yatra package from Dehradun?',
    a: 'Char Dham Yatra covers the four holy Himalayan shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath. Shiv Tour & Travels offers a complete 10–12 day pilgrimage package from Dehradun. Prices start at ₹38,000 for Sedan Dzire, ₹48,000 for Ertiga, and ₹62,000 for Innova Crysta. Call +91 7819909454 for customized itineraries.',
  },
  {
    category: 'Airport Transfer',
    q: 'How much does a taxi from Dehradun to Jolly Grant Airport cost?',
    a: 'A direct AC Sedan taxi from Dehradun city center to Jolly Grant Airport costs a fixed ₹899 one-way with zero night surcharge. For Ertiga SUV the fare is ₹1,499 and Innova Crysta is ₹2,200.',
  },
  {
    category: 'Payment & Cancellation',
    q: 'What payment modes are accepted and are there cancellation charges?',
    a: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), and Net Banking. You can pay directly to the driver at the end of the trip or advance for multi-day outstation packages. We have zero cancellation fees if informed in advance.',
  },
];

export default function FaqPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Booking & Fares', 'Outstation Routes', 'Daily Rentals', 'Char Dham Pilgrimage'];

  const filteredFaqs = allFaqs.filter((f) => {
    if (activeCategory === 'All') return true;
    return f.category === activeCategory;
  });

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      <TopBar />
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Clear Answers on Taxi Fares, Booking Procedures, Safety Standards & Outstation Tours"
        breadcrumbs={[{ name: 'FAQs' }]}
      />

      <section className="py-20 bg-darkbg-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <AnimateOnScroll direction="down" duration={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-taxi-500 text-black shadow-lg shadow-taxi-500/20'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const dir = idx % 2 === 0 ? 'left' : 'right';

              return (
                <AnimateOnScroll key={idx} direction={dir} delay={(idx % 4) * 0.1} duration={0.6}>
                  <div className="bg-darkbg-850 rounded-2xl border border-white/10 hover:border-taxi-500/30 transition-colors overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-taxi-300 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-taxi-400 shrink-0" />
                        <span>{faq.q}</span>
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
                        <p>{faq.a}</p>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-4 text-xs font-semibold">
                          <a
                            href="tel:+917819909454"
                            className="text-taxi-400 hover:text-taxi-300 flex items-center gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Still have questions? Call +91 7819909454</span>
                          </a>
                        </div>
                      </div>
                    )}
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
