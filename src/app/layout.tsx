import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0F19",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shivtourandtravels.com"),
  title: "Best Taxi Service in Dehradun | Shiv Tour & Travels | 24/7 Cab Booking",
  description:
    "Shiv Tour & Travels offers the best taxi service in Dehradun. 24/7 local cabs, Jolly Grant Airport taxi from ₹899, Dehradun to Delhi from ₹4000, Mussoorie, Rishikesh, Haridwar & Char Dham Yatra. Fixed fares, no surge pricing. Call +91 7819909454.",
  keywords: [
    "best taxi service in Dehradun",
    "taxi service in dehradun",
    "cab service in dehradun",
    "dehradun to delhi taxi",
    "dehradun to mussoorie cab",
    "jolly grant airport taxi",
    "dehradun to rishikesh taxi",
    "char dham yatra taxi dehradun",
    "outstation taxi dehradun",
    "car rental dehradun",
    "shiv tour and travels",
    "shiv travels dehradun",
  ],
  authors: [{ name: "Shiv Tour & Travels" }],
  creator: "Shiv Tour & Travels",
  publisher: "Shiv Tour & Travels",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shivtourandtravels.com",
    siteName: "Shiv Tour & Travels",
    title: "Best Taxi Service in Dehradun | Shiv Tour & Travels",
    description:
      "Reliable, punctual and fixed-fare taxi service in Dehradun for local, airport and outstation rides. Call +91 7819909454.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Taxi Service in Dehradun | Shiv Tour & Travels",
    description:
      "Fixed fares, verified drivers, 24/7 local & outstation taxi in Dehradun. Call +91 7819909454.",
  },
  alternates: {
    canonical: "https://shivtourandtravels.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich LocalBusiness Schema for Google
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shivtourandtravels.com/#business",
    "name": "Shiv Tour & Travels",
    "alternateName": "Shiv Travels Dehradun",
    "description":
      "Best taxi service in Dehradun offering local cab, Jolly Grant airport transfers, outstation rides, and complete Char Dham Yatra packages. Fixed fares, clean vehicles, no surge pricing, available 24/7.",
    "url": "https://shivtourandtravels.com/",
    "telephone": "+917819909454",
    "email": "shivtravelsdehradun@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Clock Tower, Rajpur Road",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "postalCode": "248001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3256",
      "longitude": "78.0437"
    },
    "priceRange": "₹899 - ₹62000",
    "openingHours": "Mo-Su 00:00-23:59",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Net Banking, Credit Card",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi Services in Dehradun",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Dehradun to Delhi Taxi" },
          "price": "4000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Jolly Grant Airport Taxi" },
          "price": "899",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Dehradun to Mussoorie Taxi" },
          "price": "2000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Dehradun to Rishikesh Taxi" },
          "price": "2000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Dehradun to Haridwar Taxi" },
          "price": "2000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Char Dham Yatra Taxi Package" },
          "price": "38000",
          "priceCurrency": "INR"
        }
      ]
    }
  };

  // FAQ Schema for AEO & Google AI Overview
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best taxi service in Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shiv Tour & Travels delivers the best taxi service in Dehradun with fixed fares, professional drivers, clean vehicles, and 24/7 availability for city rides, airport transfers, and outstation trips across Uttarakhand. Call +91 7819909454 to book."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cheapest cab service in Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shiv Tour & Travels offers the most affordable cab service in Dehradun at fixed, transparent fares: airport transfers from ₹899, Mussoorie/Rishikesh/Haridwar from ₹2,000, and Delhi from ₹4,000 with zero surge pricing."
        }
      },
      {
        "@type": "Question",
        "name": "What are the Dehradun taxi rates per day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Daily rental rates at Shiv Tour & Travels (8 hours / 80 km): Sedan (Dzire/AURA) ₹2,200, SUV (Ertiga) ₹3,500, Innova Crysta ₹5,000, Tempo Traveller 12-seater ₹6,000, and 17-seater ₹7,500."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best taxi service in Dehradun to Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For Dehradun to Delhi, Shiv Tour & Travels offers fixed one-way fares starting at ₹4,000 for a Sedan, ₹5,000 for an SUV, and ₹10,500 for Innova Crysta. Punctual doorstep pickup and professional drivers."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find a taxi service near me in Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shiv Tour & Travels covers all parts of Dehradun including Clock Tower, Rajpur Road, ISBT, Prem Nagar, Clement Town, Sahastradhara Road, and Ballupur. Call or WhatsApp +91 7819909454 for instant booking."
        }
      },
      {
        "@type": "Question",
        "name": "What is the outstation taxi service fare from Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outstation rates from Dehradun: Mussoorie ₹2,000 | Rishikesh ₹2,000 | Haridwar ₹2,000 | Delhi ₹4,000 | Chandigarh ₹3,500 | Auli ₹9,000 | Kedarnath ₹9,000 | Badrinath ₹10,500 | Char Dham Yatra from ₹38,000."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Shiv Tour & Travels contact number in Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach Shiv Tour & Travels 24/7 by call or WhatsApp at +91 7819909454 or via email at shivtravelsdehradun@gmail.com."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Char Dham Yatra taxi package from Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Complete 10–12 day Char Dham package from Dehradun covering Yamunotri, Gangotri, Kedarnath, and Badrinath starts from ₹38,000 for Dzire, ₹48,000 for Ertiga, and ₹62,000 for Innova Crysta. Call +91 7819909454 for custom quotes."
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-darkbg-950 text-slate-100 antialiased selection:bg-taxi-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
