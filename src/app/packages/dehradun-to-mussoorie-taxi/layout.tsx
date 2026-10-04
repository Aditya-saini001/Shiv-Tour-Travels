import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dehradun to Mussoorie Taxi | Fixed ₹2,000 | Shiv Shubh Tour & Travels',
  description:
    'Book Dehradun to Mussoorie taxi at fixed ₹2,000. Full-day Kempty Falls and Mall Road sightseeing from ₹3,500. Mountain-certified drivers, sanitized AC cabs. Call +91 9084712392.',
  keywords: [
    'dehradun to mussoorie taxi',
    'dehradun to mussoorie cab fare',
    'mussoorie sightseeing cab',
    'kempty falls taxi',
    'delhi to mussoorie taxi',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/packages/dehradun-to-mussoorie-taxi',
  },
};

export default function MussoorieTaxiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
