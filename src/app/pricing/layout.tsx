import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dehradun Taxi Rates & Fare List 2026 | Shiv Shubh Tour & Travels',
  description:
    'Check complete Dehradun taxi rates and transparent fare matrix for 2026. Delhi ₹4,000, Mussoorie ₹2,000, Airport ₹899, Haridwar ₹2,000. Sedans, SUVs, and Innova Crysta. Call +91 9084712392.',
  keywords: [
    'dehradun taxi rates',
    'dehradun cab fare chart',
    'dehradun taxi per km rate',
    'taxi fare list dehradun',
    'jolly grant airport taxi fare',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/pricing',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
