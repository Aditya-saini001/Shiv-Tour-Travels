'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbs: { name: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-darkbg-900 border-b border-white/10 overflow-hidden">
      {/* Background overlay and mountain backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            'url(/images/page-header.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-darkbg-950 via-darkbg-900/90 to-darkbg-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll direction="down" duration={0.6}>
          {/* Breadcrumbs */}
          <nav className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 mb-4 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
            <Link href="/" className="hover:text-taxi-400 flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-500" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-taxi-400 transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-taxi-400">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Title & Subtitle */}
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base text-slate-300 max-w-2xl mx-auto font-normal">
            {subtitle}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
