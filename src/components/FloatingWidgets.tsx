'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor Mouse Listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Smooth trailing animation
    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.2,
        y: prev.y + (cursorPos.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPos.x, cursorPos.y]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Custom Desktop Glowing Cursor */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-taxi-400 rounded-full pointer-events-none z-[9999] hidden lg:block -translate-x-1/2 -translate-y-1/2 shadow-sm"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color] duration-200 border border-taxi-400/50 ${
          isPointer
            ? 'w-10 h-10 bg-taxi-400/20 scale-125'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isPointer ? 20 : 16)}px, ${
            trailingPos.y - (isPointer ? 20 : 16)
          }px, 0)`,
        }}
      />

      {/* Floating Call Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="tel:+919084712392"
          aria-label="Call Shiv Shubh Tour & Travels directly"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-taxi-500 to-amber-500 text-black shadow-2xl hover:scale-110 transition-transform duration-300 call-pulse group"
        >
          <Phone className="w-6 h-6 fill-black" />
          <span className="absolute left-16 bg-darkbg-900 border border-taxi-500/30 text-taxi-300 text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call +91 9084712392
          </span>
        </a>
      </div>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-darkbg-900/90 border border-white/20 hover:border-taxi-400 text-white hover:text-taxi-400 flex items-center justify-center shadow-lg transition-all hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href="https://wa.me/919084712392?text=Hello%20Shiv%20Shubh%20Tour%20%26%20Travels,%20I%20want%20to%20book%20a%20taxi%20in%20Dehradun."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300 whatsapp-pulse group"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="absolute right-16 bg-darkbg-900 border border-emerald-500/30 text-emerald-400 text-xs font-bold py-1.5 px-3 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Booking
          </span>
        </a>
      </div>
    </>
  );
}
