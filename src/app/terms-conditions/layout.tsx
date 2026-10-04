import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Shiv Shubh Tour & Travels Dehradun',
  description:
    'Read the official terms and conditions, booking policies, Chardham Yatra guidelines, and cancellation rules of Shiv Shubh Tour & Travels in Dehradun.',
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/terms-conditions',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
