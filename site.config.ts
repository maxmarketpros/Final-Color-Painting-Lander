// ╔══════════════════════════════════════════════════════════════════╗
// ║  SITE CONFIG — Edit this file to customize for a new business  ║
// ╚══════════════════════════════════════════════════════════════════╝

export const siteConfig = {
    // ── Business Info ──────────────────────────────────────────────
    business: {
        name: "Final Color Painting",
        tagline: "Your Trusted Partner in Painting Excellence",
        description:
            "Professional painting services in Jacksonville, FL. Nearly 25 years of experience delivering high-quality interior, exterior, and cabinet painting with premium materials and meticulous attention to detail.",
        ownerName: "our team",
        phone: "(904) 601-6738",
        phoneRaw: "9046016738",
        email: "finalcolorpaintingllc@gmail.com",
        siteUrl: "https://finalcolorpainting.com",
    },

    // ── Location ─────────────────────────────────────────────────
    location: {
        city: "Jacksonville",
        state: "FL",
        zip: "32202",
        county: "Duval County",
        geo: { lat: 30.3322, lng: -81.6557 },
        areasServed: [
            "Jacksonville",
            "Jacksonville Beach",
            "Atlantic Beach",
            "Neptune Beach",
            "Ponte Vedra Beach",
            "Orange Park",
            "Fleming Island",
            "St. Augustine",
            "Mandarin",
            "San Marco",
        ],
    },

    // ── Branding / Colors ────────────────────────────────────────
    // Deep navy primary with warm amber/gold secondary — premium,
    // trustworthy feel inspired by the brand's patriotic identity.
    colors: {
        primary: "#1B2A4A",
        primaryDark: "#0F1B33",
        primaryLight: "#2C4470",
        secondary: "#C8963E",
        secondaryDark: "#A67A2E",
        secondaryLight: "#DDB05A",
        bg: "#F8F7F4",
        bgAlt: "#EDECEA",
        ink: "#0E0E10",
        muted: "#5A5A63",
        border: "#D6D3C9",
        star: "#D4A017",
    },

    // ── Images ───────────────────────────────────────────────────
    images: {
        logo: "/logo.png",
        hero: "/images/hero.jpg",
        about: "/images/about.jpg",
    },

    // ── Hero Section ─────────────────────────────────────────────
    hero: {
        badge: "Trusted Jacksonville Painters · Nearly 25 Years of Experience",
        headline: "Jacksonville, FL's Trusted Professional Painting Services",
        subheadline:
            "From interiors to exteriors, cabinets to custom finishes — Final Color Painting delivers flawless results with premium materials and meticulous craftsmanship.",
        ctaText: "Get Free Estimate",
        responseTime: "Response within one business day",
        stats: [
            { value: "25+", label: "Years Experience" },
            { value: "1000+", label: "Projects Completed" },
            { value: "5★", label: "Rated Service" },
            { value: "100%", label: "Satisfaction" },
        ],
    },

    // ── Trust Row ────────────────────────────────────────────────
    trustItems: [
        {
            title: "Nearly 25 Years Experience",
            description:
                "Decades of expertise delivering stunning painting results across Jacksonville.",
        },
        {
            title: "Premium Materials",
            description:
                "We use only high-quality paints and coatings for long-lasting beauty and protection.",
        },
        {
            title: "Free Estimates",
            description:
                "Transparent, detailed pricing with no hidden fees or surprises.",
        },
        {
            title: "Warranty Backed",
            description:
                "We stand behind our work with warranties on both labor and materials.",
        },
    ],

    // ── Services ─────────────────────────────────────────────────
    services: {
        sectionLabel: "What We Do",
        sectionTitle: "Our Services",
        items: [
            {
                title: "Interior Painting",
                description: "From walls to ceilings, we handle it all with precision and care.",
                image: "/images/services/interior-painting.jpg",
                alt: "Beautifully painted interior living room by Final Color Painting",
            },
            {
                title: "Exterior Painting",
                description: "Protect and beautify your home's exterior with our expert services.",
                image: "/images/services/exterior-painting.jpg",
                alt: "Freshly painted home exterior in Jacksonville FL",
            },
            {
                title: "Cabinet Painting & Refinishing",
                description: "Revitalize your kitchen and bathroom with our cabinet solutions.",
                image: "/images/services/cabinet-painting.jpg",
                alt: "Professionally refinished white kitchen cabinets",
            },
            {
                title: "House & Commercial Painting",
                description: "Professional painting for residential and commercial properties.",
                image: "/images/services/house-commercial-painting.jpg",
                alt: "Completed house painting project in Jacksonville",
            },
            {
                title: "Deck Staining & Wood Finishes",
                description: "Preserve and enhance your outdoor wood surfaces.",
                image: "/images/services/deck-staining.jpg",
                alt: "Beautifully stained wooden deck and porch",
            },
            {
                title: "Drywall Repair & Popcorn Ceiling Removal",
                description: "Smooth, flawless surfaces ready for a perfect finish.",
                image: "/images/services/drywall-repair.jpg",
                alt: "Interior room prepared for drywall repair and ceiling work",
            },
        ],
    },

    // ── Process Steps ────────────────────────────────────────────
    process: {
        sectionLabel: "How We Work",
        sectionTitle: "Our Process",
        steps: [
            {
                number: "01",
                title: "Free Consultation",
                description:
                    "We visit your property, assess the scope, and provide a detailed free estimate.",
            },
            {
                number: "02",
                title: "Prep & Protection",
                description:
                    "Surfaces are cleaned, repaired, and masked. Furniture and floors are fully protected.",
            },
            {
                number: "03",
                title: "Expert Painting",
                description:
                    "Our skilled crew applies premium paints with precision, ensuring even coverage and clean lines.",
            },
            {
                number: "04",
                title: "Final Walkthrough",
                description:
                    "We inspect every detail with you to make sure you're 100% satisfied before we leave.",
            },
        ],
        expectations: [
            "Premium paints and materials on every job",
            "Clean, protected work areas throughout the project",
            "On-time scheduling with clear communication",
            "Warranty-backed labor and materials",
        ],
    },

    // ── Reviews ──────────────────────────────────────────────────
    reviews: {
        sectionLabel: "Testimonials",
        sectionTitle: "What Our Clients Say",
        items: [
            {
                initials: "EG",
                name: "Eric Gibson",
                stars: 5,
                text: "Immaculate job on repainting our interior. Ben & his team from start to finish ensured every proper step was taken to deliver a quality paint job! 5/5 highly recommend. Great team and attention to detail will be calling back later this year for our exterior!",
            },
            {
                initials: "PC",
                name: "P C",
                stars: 5,
                text: "Ben and his crew did a great job painting the full interior of my home. Every room was done to perfection. They are not only great painters. They are also a great group. They cleaned up everything before they left, leaving a beautiful home to enjoy. They are the only painters I'll use going forward. If you're thinking of hiring painters. Have Ben over for a free estimate. He is punctual, courteous, and delivers an accurate estimate that can't be beat.",
            },
            {
                initials: "SG",
                name: "Scott Green",
                stars: 5,
                text: "If you are looking for a professional team with great character look no further than Ben and his team. My wife and I were referred to him by our general contractor for painting after a kitchen remodel and what a great resource they were. We had other rooms painted as well and found the quality and the timeliness on point. We also found Ben was willing to provide suggestions to make the finished project fantastic. If someone ask us if we know a good painter, we will say no, but we know a great team of painters, and would recommend them.",
            },
        ],
    },

    // ── About ────────────────────────────────────────────────────
    about: {
        sectionLabel: "About Us",
        heading: "Meet Final Color Painting",
        paragraphs: [
            "With nearly 25 years in the painting industry, Final Color Painting has built a reputation for excellence across Jacksonville, FL. From residential homes to commercial properties, our team brings precision, quality materials, and a commitment to craftsmanship to every project.",
            "We believe every space deserves a flawless finish. That's why we use only premium paints, take the time to properly prepare every surface, and back our work with warranties on both labor and materials. Your satisfaction isn't just a goal — it's our standard.",
        ],
        ctaPrimary: "Get Your Free Estimate",
        ctaSecondary: "Call Us Today",
    },

    // ── Service Area ─────────────────────────────────────────────
    serviceArea: {
        sectionLabel: "Where We Work",
        heading: "Proudly Serving Jacksonville and Surrounding Communities",
        mapTitle: "Serving Jacksonville, FL",
        mapSubtitle: "and surrounding areas in Duval County",
    },

    // ── Estimate Form ────────────────────────────────────────────
    form: {
        embedUrl:
            "https://api.leadconnectorhq.com/widget/form/kBwZVnb330a5W8njvMfv",
        formId: "kBwZVnb330a5W8njvMfv",
        formTitle: "Request a Free Estimate",
        promises: [
            "Free, no-obligation estimate",
            "Response within one business day",
            "Detailed, itemized pricing",
            "No pressure, no hidden fees",
        ],
    },

    // ── SEO ──────────────────────────────────────────────────────
    seo: {
        title: "Final Color Painting | Professional Painting Services in Jacksonville, FL",
        description:
            "Nearly 25 years of expert interior, exterior, and cabinet painting in Jacksonville, FL. Premium materials, free estimates, and warranty-backed results. Call (904) 601-6738.",
        keywords: [
            "painting company jacksonville fl",
            "interior painting jacksonville",
            "exterior painting jacksonville",
            "cabinet painting jacksonville",
            "house painter near me",
            "commercial painting jacksonville fl",
        ],
        ogImage: "/images/hero.jpg",
    },

    // ── Schema.org (JSON-LD) ─────────────────────────────────────
    schema: {
        businessType: "HomeAndConstructionBusiness",
        priceRange: "$$",
        knowsAbout: [
            "Interior Painting",
            "Exterior Painting",
            "Cabinet Painting & Refinishing",
            "House & Commercial Painting",
            "Deck Staining & Wood Finishes",
            "Drywall Repair",
            "Popcorn Ceiling Removal",
            "Epoxy Flooring",
        ],
    },

    // ── External Scripts ─────────────────────────────────────────
    scripts: {
        // GoHighLevel / LeadConnector form embed script
        formEmbedScript: "https://link.msgsndr.com/js/form_embed.js",
    },
} as const;

export type SiteConfig = typeof siteConfig;
