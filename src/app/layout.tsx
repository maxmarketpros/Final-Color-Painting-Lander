import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteConfig } from "../../site.config";
import ThemeInjector from "@/components/ThemeInjector";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const { business, location, seo, schema, images } = siteConfig;

export const metadata: Metadata = {
    metadataBase: new URL(business.siteUrl),
    title: seo.title,
    description: seo.description,
    keywords: [...seo.keywords],
    alternates: {
        canonical: business.siteUrl,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", type: "image/png" },
        ],
    },
    openGraph: {
        title: seo.title,
        description: seo.description,
        type: "website",
        locale: "en_US",
        url: business.siteUrl,
        siteName: business.name,
        images: [
            {
                url: seo.ogImage,
                width: 1200,
                height: 630,
                alt: `${business.name} — ${business.tagline}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        images: [seo.ogImage],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": schema.businessType,
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    telephone: business.phone,
    email: business.email,
    url: business.siteUrl,
    image: `${business.siteUrl}${seo.ogImage}`,
    priceRange: schema.priceRange,
    address: {
        "@type": "PostalAddress",
        addressLocality: location.city,
        addressRegion: location.state,
        postalCode: location.zip,
        addressCountry: "US",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: location.geo.lat,
        longitude: location.geo.lng,
    },
    areaServed: location.areasServed.map((city) => ({
        "@type": "City",
        name: city,
    })),
    founder: {
        "@type": "Person",
        name: business.ownerName,
        jobTitle: "Owner",
    },
    description: business.description,
    knowsAbout: schema.knowsAbout,
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <head>
                <ThemeInjector />
                <meta name="geo.region" content={`US-${location.state}`} />
                <meta name="geo.placename" content={location.city} />
                <meta name="geo.position" content={`${location.geo.lat};${location.geo.lng}`} />
                <meta name="ICBM" content={`${location.geo.lat}, ${location.geo.lng}`} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
