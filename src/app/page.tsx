'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import SideDrawer from '@/components/SideDrawer';
import HeroSlider from '@/components/HeroSlider';
import QuickBookingBar from '@/components/QuickBookingBar';
import SlidingMarquee from '@/components/SlidingMarquee';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import ExploreDehradun from '@/components/ExploreDehradun';
import AirportTransfers from '@/components/AirportTransfers';
import CustomizedPackages from '@/components/CustomizedPackages';
import MapSection from '@/components/MapSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-darkbg-950 text-slate-100 flex flex-col relative selection:bg-taxi-500 selection:text-black">
      {/* 1. Top Header Bar */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* 3. Slide-out Info Drawer */}
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* 4. Hero Banner Slider */}
      <HeroSlider />

      {/* 5. Interactive Fare Calculator & Quick Booking Bar */}
      <QuickBookingBar />

      {/* 6. Scrolling Destination Ticker (Marquee) */}
      <SlidingMarquee />

      {/* 7. Services Showcase */}
      <ServicesSection />

      {/* 8. About Us & Experience Badge */}
      <AboutSection />

      {/* 9. Fixed Fare & Popular Routes Grid */}
      <PricingSection />

      {/* 10. Explore Local Dehradun Attractions */}
      <ExploreDehradun />

      {/* 11. Airport Transfers Special Highlight */}
      <AirportTransfers />

      {/* 12. Customized Packages (City, Mussoorie, Spiritual, Adventure) */}
      <CustomizedPackages />

      {/* 13. Office Location & Embedded Google Map */}
      <MapSection />

      {/* 14. Customer Testimonials & Reviews */}
      <TestimonialsSection />

      {/* 15. FAQ Accordion Section */}
      <FaqSection />

      {/* 16. Bottom Call to Action Banner */}
      <CtaBanner />

      {/* 17. Comprehensive Website Footer */}
      <Footer />

      {/* 18. Floating Action Buttons (WhatsApp, Call, Scroll-To-Top, Cursor) */}
      <FloatingWidgets />
    </main>
  );
}
