import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cab Services in Dehradun | Airport, Local & Outstation Taxi | Shiv Shubh',
  description:
    'Explore premium cab & taxi services by Shiv Shubh Tour & Travels in Dehradun. 24/7 Airport drops, Chardham Yatra packages, Mussoorie & Delhi one-way cabs, Innova Crysta rentals. Call +91 9084712392.',
  keywords: [
    'cab services dehradun',
    'dehradun taxi service',
    'outstation cab dehradun',
    'airport taxi dehradun',
    'chardham yatra taxi service',
    'innova crysta rental dehradun',
    'car hire dehradun',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
