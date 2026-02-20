"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "../../site.config";

const { reviews } = siteConfig;

const CLAMP_LINES = 5;
const LINE_HEIGHT_REM = 1.625; // leading-relaxed ≈ 1.625
const MAX_HEIGHT_REM = CLAMP_LINES * LINE_HEIGHT_REM;

function StarIcon({ filled }: { filled: boolean }) {
    return (
        <svg
            className={`w-4 h-4 ${filled ? "text-[var(--color-star)]" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    );
}

function ReviewCard({ review }: { review: (typeof reviews.items)[number] }) {
    const [expanded, setExpanded] = useState(false);
    const [needsClamp, setNeedsClamp] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const el = textRef.current;
            // Check if natural height exceeds the clamp height
            setNeedsClamp(el.scrollHeight > el.clientHeight + 2);
        }
    }, []);

    return (
        <div className="card p-6 flex flex-col gap-4">
            {/* Stars */}
            <div className="flex gap-0.5" aria-label={`${review.stars} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} filled={j < review.stars} />
                ))}
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col">
                <p
                    ref={textRef}
                    className="text-sm text-[var(--color-muted)] leading-relaxed transition-all duration-300"
                    style={{
                        overflow: "hidden",
                        maxHeight: expanded ? "none" : `${MAX_HEIGHT_REM}rem`,
                        minHeight: `${MAX_HEIGHT_REM}rem`,
                    }}
                >
                    &ldquo;{review.text}&rdquo;
                </p>
                {needsClamp && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-light)] mt-1.5 self-start cursor-pointer transition-colors"
                    >
                        {expanded ? "Show less" : "Read more"}
                    </button>
                )}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
                <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs font-bold">
                    {review.initials}
                </div>
                <span className="text-sm font-semibold text-[var(--color-ink)]">
                    {review.name}
                </span>
            </div>
        </div>
    );
}

export default function Reviews() {
    return (
        <section id="reviews" className="section-padding" aria-labelledby="reviews-heading">
            <div className="container-wide">
                <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        {reviews.sectionLabel}
                    </p>
                    <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        {reviews.sectionTitle}
                    </h2>
                </div>

                <div className="mb-10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto items-start">
                    {reviews.items.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
