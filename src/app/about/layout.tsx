import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Shiv Shubh Tour & Travels Dehradun',
  description:
    'Learn about Shiv Shubh Tour & Travels - Dehradun\'s most trusted taxi service with 5+ years of experience, clean fleet, verified mountain drivers, and 24/7 service. Call +91 9084712392.',
  keywords: [
    'about shiv shubh tour and travels',
    'trusted taxi service dehradun',
    'best travel agency dehradun',
    'taxi company chandrabani dehradun',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
