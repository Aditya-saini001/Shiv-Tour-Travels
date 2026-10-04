'use client';

import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-darkbg-950/95 border-b border-white/5 text-xs text-slate-300 py-2.5 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Contact Links */}
        <div className="flex items-center space-x-6">
          <a
            href="tel:+919084712392"
            className="flex items-center space-x-2 text-slate-300 hover:text-taxi-400 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-taxi-500/10 flex items-center justify-center text-taxi-400">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium font-mono">+91 9084712392</span>
          </a>

          <a
            href="mailto:shivshubhtourtravel@gmail.com"
            className="flex items-center space-x-2 text-slate-300 hover:text-taxi-400 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-taxi-500/10 flex items-center justify-center text-taxi-400">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span>shivshubhtourtravel@gmail.com</span>
          </a>

          <div className="flex items-center space-x-2 text-slate-400">
            <div className="w-6 h-6 rounded-full bg-taxi-500/10 flex items-center justify-center text-taxi-400">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span>Union Bank Road, Chandrabani, Pithuwala, Dehradun</span>
          </div>
        </div>

        {/* Right Info & Socials */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-taxi-400 text-xs font-semibold bg-taxi-500/10 px-3 py-1 rounded-full border border-taxi-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Available for Bookings</span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-taxi-500 hover:text-black flex items-center justify-center text-slate-300 transition-all duration-300"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-taxi-500 hover:text-black flex items-center justify-center text-slate-300 transition-all duration-300"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-taxi-500 hover:text-black flex items-center justify-center text-slate-300 transition-all duration-300"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
