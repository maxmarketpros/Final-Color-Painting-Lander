// ╔══════════════════════════════════════════════════════════════════╗
// ║  SITE CONFIG — Edit this file to customize for a new business  ║
// ╚══════════════════════════════════════════════════════════════════╝

export const siteConfig = {
    // ── Business Info ──────────────────────────────────────────────
    business: {
        name: "Your Business Name",
        tagline: "Your Business Tagline",
        description:
            "A short description of your business for SEO and the footer.",
        ownerName: "Owner Name",
        phone: "(555) 123-4567",
        phoneRaw: "5551234567", // digits only, used for tel: links
        email: "hello@yourbusiness.com",
        siteUrl: "https://yourbusiness.com",
    },

    // ── Location ─────────────────────────────────────────────────
    location: {
        city: "Your City",
        state: "TX",
        zip: "00000",
        county: "Your County",
        geo: { lat: 0, lng: 0 },
        areasServed: [
            "Nearby City 1",
            "Nearby City 2",
            "Nearby City 3",
            "Nearby City 4",
            "Nearby City 5",
            "Nearby City 6",
        ],
    },

    // ── Branding / Colors ────────────────────────────────────────
    // Update these to match the client's brand. They get injected as
    // CSS custom properties so every component picks them up automatically.
    colors: {
        primary: "#506030",
        primaryDark: "#3e4c24",
        primaryLight: "#6b7d44",
        secondary: "#584030",
        secondaryDark: "#3f2d22",
        secondaryLight: "#7a5d4a",
        bg: "#F7F5EE",
        bgAlt: "#EFECE3",
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
        badge: "Trusted Local Business · Your City, ST",
        headline: "Your Main Headline Here",
        subheadline:
            "A compelling subheadline that describes what you do and why customers should choose you.",
        ctaText: "Get Free Estimate",
        responseTime: "Response within one business day",
        stats: [
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "5★", label: "Rated Service" },
            { value: "100%", label: "Satisfaction" },
        ],
    },

    // ── Trust Row ────────────────────────────────────────────────
    trustItems: [
        {
            title: "Locally Owned",
            description:
                "Founded by a local professional with a commitment to quality craftsmanship.",
        },
        {
            title: "10+ Years Experience",
            description:
                "A decade of expertise delivering top-quality results for our clients.",
        },
        {
            title: "Transparent Pricing",
            description:
                "Detailed estimates with every line item broken down — no surprises, no hidden costs.",
        },
        {
            title: "Professional Teams",
            description:
                "Job sites left clean at the end of each day. Courteous teams you can trust.",
        },
    ],

    // ── Services ─────────────────────────────────────────────────
    services: {
        sectionLabel: "What We Do",
        sectionTitle: "Our Services",
        items: [
            {
                title: "Service One",
                description: "Description of your first service offering.",
                image: "/images/services/placeholder.jpg",
                alt: "Service one image description",
            },
            {
                title: "Service Two",
                description: "Description of your second service offering.",
                image: "/images/services/placeholder.jpg",
                alt: "Service two image description",
            },
            {
                title: "Service Three",
                description: "Description of your third service offering.",
                image: "/images/services/placeholder.jpg",
                alt: "Service three image description",
            },
            {
                title: "Service Four",
                description: "Description of your fourth service offering.",
                image: "/images/services/placeholder.jpg",
                alt: "Service four image description",
            },
            {
                title: "Service Five",
                description: "Description of your fifth service offering.",
                image: "/images/services/placeholder.jpg",
                alt: "Service five image description",
            },
            {
                title: "Service Six",
                description: "Description of your sixth service offering.",
                image: "/images/services/placeholder.jpg",
                alt: "Service six image description",
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
                    "We visit your property, discuss your vision, and deliver a detailed estimate.",
            },
            {
                number: "02",
                title: "Planning & Design",
                description:
                    "Collaborate on layout, materials, and finishes to match your style and budget.",
            },
            {
                number: "03",
                title: "Build Phase",
                description:
                    "Our crew handles the build with clean daily sites, clear timelines, and regular updates.",
            },
            {
                number: "04",
                title: "Final Walkthrough",
                description:
                    "We walk the finished project with you to make sure every detail meets your expectations.",
            },
        ],
        expectations: [
            "Clear, consistent communication",
            "Transparent scheduling and timelines",
            "Clean job sites at end of each day",
            "Respectful, professional crews",
        ],
    },

    // ── Reviews ──────────────────────────────────────────────────
    reviews: {
        sectionLabel: "Testimonials",
        sectionTitle: "What Our Clients Say",
        items: [
            {
                initials: "JD",
                name: "John D.",
                stars: 5,
                text: "Placeholder review text. Replace with real customer feedback.",
            },
            {
                initials: "SM",
                name: "Sarah M.",
                stars: 5,
                text: "Placeholder review text. Replace with real customer feedback.",
            },
            {
                initials: "RK",
                name: "Robert K.",
                stars: 5,
                text: "Placeholder review text. Replace with real customer feedback.",
            },
        ],
    },

    // ── About ────────────────────────────────────────────────────
    about: {
        sectionLabel: "About Us",
        heading: "Meet the Owner",
        paragraphs: [
            "Write a paragraph about the business owner and their background here.",
            "Write a second paragraph about the business values and what makes you different.",
        ],
        ctaPrimary: "Get Your Free Estimate",
        ctaSecondary: "Call Owner Name",
    },

    // ── Service Area ─────────────────────────────────────────────
    serviceArea: {
        sectionLabel: "Where We Work",
        heading: "Proudly Serving Your City and Surrounding Communities",
        mapTitle: "Serving Your City, State",
        mapSubtitle: "and surrounding areas in Your County",
    },

    // ── Estimate Form ────────────────────────────────────────────
    form: {
        embedUrl:
            "https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID_HERE",
        formId: "YOUR_FORM_ID_HERE",
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
        title: "Your Business Name | Services in Your City, ST",
        description:
            "Your SEO meta description. Include your main services and location.",
        keywords: [
            "your service your city",
            "service provider near me",
        ],
        ogImage: "/images/hero.jpg",
    },

    // ── Schema.org (JSON-LD) ─────────────────────────────────────
    schema: {
        businessType: "LocalBusiness",
        priceRange: "$$",
        knowsAbout: [
            "Service One",
            "Service Two",
            "Service Three",
        ],
    },

    // ── External Scripts ─────────────────────────────────────────
    scripts: {
        // GoHighLevel / LeadConnector form embed script
        formEmbedScript: "https://link.msgsndr.com/js/form_embed.js",
    },
} as const;

export type SiteConfig = typeof siteConfig;
