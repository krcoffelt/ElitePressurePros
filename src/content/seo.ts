import type { Metadata } from "next";

import { siteContent, siteUrl } from "@/content/site";

const title = "Elite Pressure Bros | Pressure Washing Kansas City Metro";
const description =
  "Elite Pressure Bros delivers house washing, driveway cleaning, deck cleaning, and commercial pressure washing across the Kansas City metro area. Get your free estimate today.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: siteContent.brandName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ElitePressurePros_logo.jpg",
        width: 2024,
        height: 2024,
        alt: "Elite Pressure Bros logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/ElitePressurePros_logo.jpg"]
  },
  keywords: [
    "pressure washing Kansas City",
    "house washing Kansas City metro",
    "driveway cleaning Kansas City",
    "deck cleaning Kansas City",
    "commercial pressure washing Kansas City"
  ]
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteContent.brandName,
  image: `${siteUrl}/images/ElitePressurePros_logo.jpg`,
  url: siteUrl,
  telephone: siteContent.contact.phoneDisplay,
  email: siteContent.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteContent.contact.address,
    addressLocality: "Kansas City",
    addressRegion: "MO",
    addressCountry: "US"
  },
  areaServed: siteContent.serviceAreas,
  priceRange: "$$",
  description,
  makesOffer: siteContent.serviceCards.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title
    }
  }))
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pressure Washing",
  provider: {
    "@type": "LocalBusiness",
    name: siteContent.brandName
  },
  areaServed: siteContent.serviceAreas,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pressure Washing Services",
    itemListElement: siteContent.serviceCards.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.copy
      }
    }))
  }
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteContent.faq.map((entry) => ({
    "@type": "Question",
    name: entry.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: entry.a
    }
  }))
};
