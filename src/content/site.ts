export const siteContent = {
  brandName: "Elite Pressure Bros",
  brandNameDisplay: "Elite Pressure Pro's",
  tagline: "Bringing new life to homes & businesses in Kansas City Metro Area",
  heroSupport:
    "House Wash • Driveways • Decks • Commercial. Free Estimates, locally owned, and fully insured.",
  ctaPrimary: "Get Free Estimate",
  ctaSecondaryCall: "Call Now",
  ctaSecondaryText: "Text Us",
  contact: {
    phoneE164: `+1${process.env.NEXT_PUBLIC_BUSINESS_PHONE || "8165550123"}`,
    smsE164: `+1${process.env.NEXT_PUBLIC_BUSINESS_SMS || "8165550123"}`,
    phoneDisplay: "(816) 555-0123", // TODO: replace with real business phone
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "hello@example.com", // TODO: replace with real business email
    address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "Kansas City Metro Area" // TODO: replace with real business address
  },
  trustBadges: ["Free Estimates", "Locally Owned", "Fully Insured", "Fast Response"],
  serviceCards: [
    {
      title: "House Washing",
      copy: "Soft-wash exterior cleaning for siding, trim, and entryways across Kansas City metro neighborhoods.",
      keyword: "house washing Kansas City metro"
    },
    {
      title: "Driveway Cleaning",
      copy: "Deep pressure cleaning that removes dirt, mildew, and stains from concrete and pavers.",
      keyword: "driveway cleaning Kansas City"
    },
    {
      title: "Deck & Patio Cleaning",
      copy: "Restore outdoor surfaces and prep decks and patios for sealing or stain.",
      keyword: "deck cleaning Kansas City"
    },
    {
      title: "Commercial Washing",
      copy: "Storefronts, sidewalks, and commercial exteriors cleaned with minimal disruption.",
      keyword: "commercial pressure washing Kansas City"
    }
  ],
  whyUs: [
    {
      title: "Surface-Safe Methods",
      copy: "We use the right pressure and detergents for each material to protect your property while delivering a deep clean."
    },
    {
      title: "Clear, Fast Estimates",
      copy: "No confusing pricing. You get a straightforward estimate and next steps quickly."
    },
    {
      title: "Insured Local Team",
      copy: "As a local Kansas City metro company, we treat every project like it is in our own neighborhood."
    }
  ],
  testimonials: [
    {
      quote:
        "Placeholder testimonial: Add a verified customer review about a recent house wash in Kansas City before launch.",
      author: "Future Customer Review #1"
    },
    {
      quote:
        "Placeholder testimonial: Add a verified driveway cleaning review highlighting responsiveness and results.",
      author: "Future Customer Review #2"
    },
    {
      quote:
        "Placeholder testimonial: Add a verified commercial project review focused on reliability and professionalism.",
      author: "Future Customer Review #3"
    }
  ],
  faq: [
    {
      q: "How much does pressure washing cost in Kansas City?",
      a: "Pricing depends on surface type, square footage, and condition. Request a free estimate and we will provide a clear quote."
    },
    {
      q: "Do you offer residential and commercial pressure washing?",
      a: "Yes. We handle homes, driveways, decks, and commercial exteriors across the Kansas City metro area."
    },
    {
      q: "Are you insured?",
      a: "Yes. Elite Pressure Bros is fully insured for residential and commercial exterior cleaning services."
    }
  ],
  serviceAreas: [
    "Kansas City, MO",
    "Overland Park, KS",
    "Olathe, KS",
    "Lee's Summit, MO",
    "Independence, MO"
  ],
  galleryImages: [
    {
      src: "/images/rooftop_1.jpg",
      alt: "Freshly cleaned home exterior and roofline in the Kansas City metro area",
      caption: "Residential exterior refresh"
    },
    {
      src: "/images/photo_1.jpg",
      alt: "Pressure washed home siding and front area with bright finish",
      caption: "House washing results"
    },
    {
      src: "/images/comparison_2.jpg",
      alt: "Before and after comparison of pressure washing results on outdoor surfaces",
      caption: "Before and after spotlight",
      featured: true
    },
    {
      src: "/images/576096417_797138763120178_6052904429862478851_n.jpg",
      alt: "Cleaned exterior walkway and curb appeal improvement",
      caption: "Driveway and walkways"
    },
    {
      src: "/images/587474640_811548608345860_2237998881970282581_n.jpg",
      alt: "Home exterior after soft wash treatment",
      caption: "Soft wash detail"
    },
    {
      src: "/images/590736908_815969587903762_5011288109214822509_n.jpg",
      alt: "Deck and patio area cleaned and restored",
      caption: "Deck and patio"
    },
    {
      src: "/images/596715309_823127417187979_1717791883917884094_n.jpg",
      alt: "Residential facade after professional pressure washing service",
      caption: "Facade cleanup"
    },
    {
      src: "/images/596873934_824586863708701_2716471240137798946_n.jpg",
      alt: "Crisp and clean driveway surface after stain removal",
      caption: "Stain removal"
    },
    {
      src: "/images/599941866_827487076752013_5995529356790951565_n.jpg",
      alt: "Commercial storefront exterior cleaned for improved presentation",
      caption: "Commercial exterior"
    }
  ]
} as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
