import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Char Dham Yatra Taxi Package from Dehradun | Shiv Shubh Tour & Travels',
  description:
    'Book 10-12 Days Complete Char Dham Yatra Taxi from Dehradun, Haridwar & Rishikesh. Covering Yamunotri, Gangotri, Kedarnath & Badrinath with experienced hill drivers. Call +91 9084712392.',
  keywords: [
    'char dham yatra taxi package',
    'char dham taxi from dehradun',
    'kedarnath taxi service',
    'badrinath cab booking',
    'yamunotri gangotri cab',
    'do dham yatra cab',
    'char dham yatra innova crysta',
  ],
  alternates: {
    canonical: 'https://shivshubhtourtravels.com/packages/char-dham-yatra',
  },
};

export default function CharDhamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
