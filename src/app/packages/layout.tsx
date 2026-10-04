import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uttarakhand Tour Packages from Dehradun | Shiv Shubh Tour & Travels',
  description:
    'Explore customized Uttarakhand tour packages from Dehradun. Char Dham Yatra, Do Dham, Mussoorie, Auli, Chopta Tungnath & Rishikesh with fixed pricing. Call +91 9084712392.',
  keywords: [
    'uttarakhand tour packages',
    'dehradun tour packages',
    'char dham package dehradun',
    'mussoorie tour package',
    'auli tour package',
    'chopta tungnath tour',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/packages',
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
