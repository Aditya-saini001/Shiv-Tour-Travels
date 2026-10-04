import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Shiv Shubh Tour & Travels Dehradun | 24/7 Booking Helpline',
  description:
    'Contact Shiv Shubh Tour & Travels 24/7. Office: Union Bank Road, Chandrabani, Pithuwala, Dehradun. Phone / WhatsApp: +91 9084712392. Email: shivshubhtourtravel@gmail.com.',
  keywords: [
    'contact shiv shubh tour and travels',
    'dehradun taxi contact number',
    'dehradun cab booking phone number',
    'taxi service chandrabani dehradun',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
