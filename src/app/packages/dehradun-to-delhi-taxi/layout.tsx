import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dehradun to Delhi Taxi Service | Fixed ₹4,000 One-Way | Shiv Shubh Travels',
  description:
    'Best Dehradun to Delhi taxi service with guaranteed fixed ₹4,000 one-way fare. 24/7 doorstep pickup, Delhi Airport IGI T3 drop, professional drivers. Call +91 9084712392.',
  keywords: [
    'dehradun to delhi taxi',
    'dehradun to delhi cab fare',
    'dehradun to igi airport taxi',
    'one way cab dehradun to delhi',
    'delhi to dehradun taxi service',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/packages/dehradun-to-delhi-taxi',
  },
};

export default function DelhiTaxiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
