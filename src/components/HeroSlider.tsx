'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: '★ Dehradun\'s Most Trusted Taxi Provider',
    title: 'Best Taxi Service In Dehradun',
    highlightText: 'Fixed Fares, No Surge Pricing',
    description:
      'Experience safe, comfortable and punctual taxi rides in Dehradun and across Uttarakhand. 24/7 doorstep pickup, experienced chauffeurs, and sanitized cabs.',
    bgImage:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop', // Luxury car on scenic road
    callText: 'Call Now: +91 9084712392',
  },
  {
    id: 2,
    badge: '★ Door-to-Door NCR & Outstation Travel',
    title: 'Dehradun To Delhi Taxi Service',
    highlightText: 'Fixed ₹4,000 One-Way Ride',
    description:
      'Travel with complete comfort between Dehradun and Delhi NCR. Clean Sedans, spacious SUVs & Innova Crysta with courteous, hill-experienced drivers.',
    bgImage:
      '/images/delhi.jpg', // Delhi India Gate
    callText: 'Book Delhi Cab',
  },
  {
    id: 3,
    badge: '★ Holy Pilgrimage & Airport Transfers',
    title: 'Jolly Grant Airport & Char Dham Yatra',
    highlightText: 'Airport From ₹899 • Char Dham From ₹38,000',
    description:
      'Prompt 24/7 transfers for early-morning or midnight flights at Jolly Grant Airport. Complete sacred Char Dham Yatra 10-12 day custom tour packages.',
    bgImage:
      '/images/kedarnath.jpg', // Majestic Kedarnath / Himalayas
    callText: 'Book Char Dham Tour',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[620px] sm:h-[680px] lg:h-[750px] w-full overflow-hidden bg-darkbg-950">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image with Dark Vignette Gradients */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105 ease-out"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkbg-950 via-darkbg-950/85 to-darkbg-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-darkbg-950 via-transparent to-black/60" />

          {/* Slide Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-3xl space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-taxi-500/20 border border-taxi-500/40 backdrop-blur-md text-taxi-300 text-xs sm:text-sm font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-taxi-400" />
                <span>{slide.badge}</span>
              </div>

              {/* Main Heading with dynamic text */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                {slide.title}
                <span className="block text-2xl sm:text-4xl lg:text-5xl gold-gradient-text mt-2">
                  {slide.highlightText}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal max-w-2xl drop-shadow">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="tel:+919084712392"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl gold-gradient-bg text-black font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-taxi-500/30 hover:scale-105 hover:shadow-taxi-500/50"
                >
                  <Phone className="w-5 h-5 fill-black" />
                  <span>Call +91 9084712392</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/919084712392?text=${encodeURIComponent(
                    `Hello Shiv Shubh Tour & Travels, I want to book a taxi for: ${slide.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-emerald-600/30 hover:scale-105"
                >
                  <span>WhatsApp Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-taxi-400" />
                  <span>Zero Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-taxi-400" />
                  <span>All Uttarakhand Covered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-taxi-500 hover:text-black text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hidden sm:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-taxi-500 hover:text-black text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hidden sm:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? 'w-8 h-2.5 bg-taxi-400' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
