import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dehradun to Rishikesh Taxi | Fixed ₹2,000 | Shiv Shubh Tour & Travels',
  description:
    'Reliable Dehradun to Rishikesh taxi service at fixed ₹2,000. Doorstep pickup, yoga ashram drops, Ganga Aarti and river rafting transfers. Call +91 9084712392.',
  keywords: [
    'dehradun to rishikesh taxi',
    'dehradun to rishikesh cab fare',
    'jolly grant airport to rishikesh taxi',
    'rishikesh ganga aarti cab',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/packages/dehradun-to-rishikesh-taxi',
  },
};

export default function RishikeshTaxiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
