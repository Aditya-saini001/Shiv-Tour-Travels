import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Dehradun Taxi Booking | Shiv Shubh',
  description:
    'Got questions about taxi booking in Dehradun? Read FAQs on cab rates, airport pickup, outstation trips, booking process, driver safety, and payment policies by Shiv Shubh Tour & Travels.',
  keywords: [
    'dehradun taxi faq',
    'cab booking questions dehradun',
    'dehradun taxi pricing faq',
    'chardham yatra car booking questions',
    'dehradun airport cab enquiry',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/faq',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
