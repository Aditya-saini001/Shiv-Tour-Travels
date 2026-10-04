'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

interface NavbarProps {
  onOpenDrawer: () => void;
}

export default function Navbar({ onOpenDrawer }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Fares & Rates', href: '/pricing' },
    { name: 'Reviews', href: '/testimonials' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-darkbg-950/95 backdrop-blur-md shadow-2xl border-b border-taxi-500/20 py-2.5'
          : 'bg-darkbg-900/90 backdrop-blur-sm border-b border-white/10 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo with Official User Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-taxi-400 shadow-lg shadow-taxi-500/25 group-hover:scale-105 transition-transform duration-300 shrink-0 bg-white">
            <img
              src="/images/logo.jpg"
              alt="Shiv Shubh Tour & Travels Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
              SHIV SHUBH <span className="text-taxi-400">TOUR & TRAVELS</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Dehradun&apos;s No.1 Taxi Service
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.name === 'Services') {
              return (
                <div
                  key={link.name}
                  className="relative py-2"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 py-1 transition-colors ${
                      isActive ? 'text-taxi-400 font-bold' : 'text-slate-200 hover:text-taxi-400'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </Link>

                  {servicesDropdown && (
                    <div className="absolute top-full left-0 w-64 pt-2 z-50">
                      <div className="bg-darkbg-850 border border-white/10 rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                        <Link
                          href="/packages/dehradun-to-delhi-taxi"
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-taxi-500/10 hover:text-taxi-400 text-slate-300 text-xs font-medium transition-all"
                        >
                          <span>Dehradun to Delhi Taxi</span>
                          <span className="text-[10px] text-taxi-400 font-bold">₹4,000</span>
                        </Link>
                        <Link
                          href="/packages/dehradun-to-mussoorie-taxi"
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-taxi-500/10 hover:text-taxi-400 text-slate-300 text-xs font-medium transition-all"
                        >
                          <span>Dehradun to Mussoorie</span>
                          <span className="text-[10px] text-taxi-400 font-bold">₹2,000</span>
                        </Link>
                        <Link
                          href="/packages/dehradun-to-rishikesh-taxi"
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-taxi-500/10 hover:text-taxi-400 text-slate-300 text-xs font-medium transition-all"
                        >
                          <span>Dehradun to Rishikesh</span>
                          <span className="text-[10px] text-taxi-400 font-bold">₹2,000</span>
                        </Link>
                        <Link
                          href="/packages/char-dham-yatra"
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-taxi-500/10 hover:text-taxi-400 text-slate-300 text-xs font-medium transition-all border-t border-white/5 mt-1"
                        >
                          <span>Char Dham Yatra Package</span>
                          <span className="text-[10px] text-emerald-400 font-bold">From ₹38,000</span>
                        </Link>
                        <Link
                          href="/services"
                          className="flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-taxi-500 hover:text-black text-slate-200 text-[11px] font-bold mt-2 transition-colors"
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-1 transition-colors relative ${
                  isActive ? 'text-taxi-400 font-bold' : 'text-slate-200 hover:text-taxi-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-taxi-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Call Anytime & 3-Dots Drawer Button */}
        <div className="flex items-center space-x-3">
          {/* Call Box */}
          <a
            href="tel:+919084712392"
            className="hidden sm:flex items-center space-x-3 bg-gradient-to-r from-taxi-500/15 to-taxi-500/5 hover:from-taxi-500/25 hover:to-taxi-500/15 border border-taxi-500/30 px-3.5 py-2 rounded-xl transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-lg bg-taxi-500 flex items-center justify-center text-black font-bold shadow-md shadow-taxi-500/30 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4 fill-black" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-taxi-400 font-semibold tracking-wider uppercase">
                Call 24/7
              </span>
              <span className="block text-sm font-extrabold text-white tracking-tight group-hover:text-taxi-300 font-mono">
                +91 9084712392
              </span>
            </div>
          </a>

          {/* 3-Dots Side Drawer Trigger */}
          <button
            onClick={onOpenDrawer}
            aria-label="Open quick menu"
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-taxi-500/20 border border-white/10 hover:border-taxi-500/40 flex items-center justify-center text-slate-300 hover:text-taxi-400 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="w-1.5 h-1.5 rounded-full bg-taxi-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="w-1.5 h-1.5 rounded-full bg-taxi-400" />
            </div>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-taxi-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-darkbg-950/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1.5 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'bg-taxi-500/10 text-taxi-400 font-bold'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+919084712392"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-taxi-500 text-black font-extrabold shadow-lg"
            >
              <Phone className="w-4 h-4 fill-black" />
              Call Now: +91 9084712392
            </a>
            <a
              href="https://wa.me/919084712392?text=Hello%20Shiv%20Shubh%20Tour%20%26%20Travels,%20I%20want%20to%20book%20a%20taxi%20in%20Dehradun."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-extrabold shadow-lg"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
