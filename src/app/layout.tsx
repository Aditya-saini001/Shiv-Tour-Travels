import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0F19",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shivshubhtourtravels.com"),
  title: "Best Taxi Service in Dehradun | Shiv Shubh Tour & Travels | 24/7 Cab Booking",
  description:
    "Shiv Shubh Tour & Travels offers the best taxi service in Dehradun. 24/7 local cabs, Jolly Grant Airport taxi from ₹899, Dehradun to Delhi from ₹4,000, Mussoorie, Rishikesh, Haridwar & Char Dham Yatra. Fixed fares, verified drivers, zero surge pricing. Call +91 9084712392.",
  keywords: [
    "best taxi service in Dehradun",
    "taxi service in dehradun",
    "cab service in dehradun",
    "dehradun to delhi taxi",
    "dehradun to mussoorie cab",
    "jolly grant airport taxi",
    "dehradun airport cab",
    "dehradun to rishikesh taxi",
    "dehradun to haridwar taxi",
    "char dham yatra taxi dehradun",
    "char dham yatra package from dehradun",
    "outstation taxi dehradun",
    "car rental dehradun with driver",
    "innova crysta dehradun",
    "dehradun to noida cab",
    "dehradun to chandigarh taxi",
    "shiv shubh tour and travels",
    "shiv shubh travels dehradun",
  ],
  authors: [{ name: "Shiv Shubh Tour & Travels" }],
  creator: "Shiv Shubh Tour & Travels",
  publisher: "Shiv Shubh Tour & Travels",
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
    url: "https://shivshubhtourtravels.com",
    siteName: "Shiv Shubh Tour & Travels",
    title: "Best Taxi Service in Dehradun | Shiv Shubh Tour & Travels",
    description:
      "Reliable, punctual and fixed-fare taxi service in Dehradun for local, airport and outstation rides. Call +91 9084712392.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Shiv Shubh Tour & Travels Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Taxi Service in Dehradun | Shiv Shubh Tour & Travels",
    description:
      "Fixed fares, verified drivers, 24/7 local & outstation taxi in Dehradun. Call +91 9084712392.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  alternates: {
    canonical: "https://shivshubhtourtravels.com",
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
    "@id": "https://shivshubhtourtravels.com/#business",
    "name": "Shiv Shubh Tour & Travels",
    "alternateName": "Shiv Shubh Travels Dehradun",
    "description":
      "Best taxi service in Dehradun offering local cab, Jolly Grant airport transfers, outstation rides, and complete Char Dham Yatra packages. Fixed fares, clean vehicles, no surge pricing, available 24/7.",
    "url": "https://shivshubhtourtravels.com/",
    "telephone": "+919084712392",
    "email": "shivshubhtourtravel@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Union Bank Road, Chandrabani, Pithuwala",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "postalCode": "248002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.2762",
      "longitude": "77.9892"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "₹899 - ₹62000",
    "openingHours": "Mo-Su 00:00-23:59",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Net Banking, Credit Card",
    "image": "https://shivshubhtourtravels.com/images/logo.jpg",
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

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shiv Shubh Tour & Travels",
    "url": "https://shivshubhtourtravels.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shivshubhtourtravels.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best taxi service in Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shiv Shubh Tour & Travels delivers the best taxi service in Dehradun with fixed fares, professional drivers, clean vehicles, and 24/7 availability for city rides, airport transfers, and outstation trips across Uttarakhand. Call +91 9084712392 to book."
        }
      },
      {
        "@type": "Question",
        "name": "What is the contact number of Shiv Shubh Tour & Travels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Shiv Shubh Tour & Travels 24/7 by calling or WhatsApp at +91 9084712392 or via email at shivshubhtourtravel@gmail.com."
        }
      },
      {
        "@type": "Question",
        "name": "What is the address of Shiv Shubh Tour & Travels in Dehradun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shiv Shubh Tour & Travels is located at Union Bank Road, Chandrabani, Pithuwala, Dehradun, Uttarakhand - 248002."
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
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
