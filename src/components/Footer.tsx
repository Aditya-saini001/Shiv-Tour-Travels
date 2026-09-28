'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Car, ArrowRight } from 'lucide-react';

const popularRoutes = [
  { name: 'Dehradun to Delhi Taxi', href: '/packages/dehradun-to-delhi-taxi' },
  { name: 'Dehradun to Mussoorie Taxi', href: '/packages/dehradun-to-mussoorie-taxi' },
  { name: 'Dehradun to Rishikesh Taxi', href: '/packages/dehradun-to-rishikesh-taxi' },
  { name: 'Char Dham Yatra Taxi Package', href: '/packages/char-dham-yatra' },
  { name: 'Jolly Grant Airport Taxi (₹899)', href: '/pricing' },
  { name: 'Dehradun to Haridwar Taxi', href: '/pricing' },
  { name: 'Delhi to Dehradun Taxi', href: '/packages/dehradun-to-delhi-taxi' },
  { name: 'Dehradun to Noida Taxi', href: '/pricing' },
  { name: 'Dehradun to Chandigarh Taxi', href: '/pricing' },
  { name: 'Dehradun to Auli Skiing Taxi', href: '/packages' },
  { name: 'Dehradun to Chopta Tungnath Taxi', href: '/packages' },
  { name: 'Dehradun to Saharanpur Taxi', href: '/pricing' },
];

export default function Footer() {
  return (
    <footer className="bg-darkbg-950 border-t border-white/10 pt-16 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-taxi-400 to-taxi-600 flex items-center justify-center text-black font-extrabold shadow-md shadow-taxi-500/30">
                <Car className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black text-white">
                SHIV <span className="text-taxi-400">TOUR & TRAVELS</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Shiv Tour & Travels is Dehradun&apos;s premier taxi and travel agency. Offering fixed fares, no surge pricing, verified hill chauffeurs, and 24/7 doorstep cab services across Uttarakhand and North India.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-taxi-500 hover:text-black flex items-center justify-center text-slate-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <div className="text-xs text-slate-400">
                Follow us for travel tips & updates
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Fares & Rates</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Customer Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-taxi-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-taxi-500" />
                  <span>Contact Office</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Taxi Routes */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Popular Taxi Routes</h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {popularRoutes.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="hover:text-taxi-400 transition-colors truncate flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-taxi-400 shrink-0" />
                  <span>{r.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Helpline */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Contact & Helpline</h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-taxi-400 shrink-0 mt-0.5" />
                <span>Near Clock Tower, Rajpur Road, Dehradun, Uttarakhand - 248001</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-taxi-400 shrink-0" />
                <a href="tel:+917819909454" className="hover:text-taxi-400 font-bold font-mono text-white text-sm">
                  +91 7819909454
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-taxi-400 shrink-0" />
                <a href="mailto:shivtravelsdehradun@gmail.com" className="hover:text-taxi-400 truncate">
                  shivtravelsdehradun@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-darkbg-900 border border-taxi-500/20">
                <span className="text-[10px] text-taxi-400 uppercase font-black tracking-wider block">
                  Operating Hours
                </span>
                <span className="text-xs text-white font-bold block mt-0.5">
                  24/7 Round the Clock Service
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Shiv Tour & Travels. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with Next.js & Tailwind CSS for Maximum Speed & SEO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
