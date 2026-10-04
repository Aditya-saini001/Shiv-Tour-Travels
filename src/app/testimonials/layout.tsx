import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Shiv Shubh Tour & Travels Dehradun',
  description:
    'Read real traveler reviews for Shiv Shubh Tour & Travels Dehradun. 4.9/5 star rated cab service for Char Dham Yatra, Dehradun to Mussoorie tours, Delhi transfers & Airport cabs.',
  keywords: [
    'shiv shubh tour and travels reviews',
    'dehradun taxi reviews',
    'best cab service in dehradun feedback',
    'chardham yatra driver reviews',
    'customer ratings cab dehradun',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/testimonials',
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
