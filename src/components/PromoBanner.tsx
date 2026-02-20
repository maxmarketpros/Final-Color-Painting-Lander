export default function PromoBanner() {
    return (
        <section
            id="promo-banner"
            className="relative overflow-hidden"
            style={{ background: "#FDF5F3" }}
        >
            {/* Decorative brush-stroke hearts */}
            <svg
                className="absolute -top-4 -left-4 w-32 h-32 sm:w-40 sm:h-40"
                viewBox="0 0 160 160"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M80 140C80 140 20 95 20 55C20 32 38 15 55 15C66 15 75 22 80 28C85 22 94 15 105 15C122 15 140 32 140 55C140 95 80 140 80 140Z"
                    fill="#E8405E"
                    opacity="0.18"
                />
            </svg>
            <svg
                className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 rotate-12"
                viewBox="0 0 160 160"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M80 140C80 140 20 95 20 55C20 32 38 15 55 15C66 15 75 22 80 28C85 22 94 15 105 15C122 15 140 32 140 55C140 95 80 140 80 140Z"
                    fill="#E8405E"
                    opacity="0.15"
                />
            </svg>

            {/* Decorative paint-brush icon top-right */}
            <svg
                className="absolute top-4 right-6 w-14 h-14 sm:w-20 sm:h-20 opacity-[0.08] rotate-[-25deg]"
                viewBox="0 0 64 64"
                fill="currentColor"
                style={{ color: "#1B2A4A" }}
                aria-hidden="true"
            >
                <path d="M58.5 2.5c-1.4-1.4-3.6-1.4-5 0L32 24l-4-4c-1-1-2.6-1-3.5 0L12 32.5c-4.5 4.5-5 11.5-1.5 16.5L2 57.5c-1 1-1 2.6 0 3.5s2.6 1 3.5 0l8.5-8.5c5 3.5 12 3 16.5-1.5L43 38.5c1-1 1-2.6 0-3.5l-4-4 21.5-21.5c1.4-1.4 1.4-3.6 0-5Z" />
            </svg>

            <div className="container-wide relative z-10 py-10 sm:py-14">
                <div className="flex flex-col items-center text-center gap-3">
                    {/* Main headline */}
                    <h3
                        className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none font-[family-name:var(--font-heading)]"
                        style={{ color: "#0E0E10" }}
                    >
                        All You Need Is Love
                    </h3>

                    {/* Discount line — cursive/italic red */}
                    <p
                        className="text-2xl sm:text-3xl md:text-4xl italic font-semibold leading-tight"
                        style={{
                            color: "#E8405E",
                            fontFamily: "Georgia, 'Times New Roman', serif",
                        }}
                    >
                        And a 10% discount!
                    </p>

                    {/* Thin decorative divider */}
                    <div className="flex items-center gap-3 my-2">
                        <span className="block w-8 h-px" style={{ background: "#E8405E" }} />
                        <svg className="w-4 h-4" viewBox="0 0 100 100" fill="#E8405E" aria-hidden="true">
                            <path d="M50 88C50 88 10 58 10 35C10 20 22 10 35 10C42 10 48 14 50 18C52 14 58 10 65 10C78 10 90 20 90 35C90 58 50 88 50 88Z" />
                        </svg>
                        <span className="block w-8 h-px" style={{ background: "#E8405E" }} />
                    </div>

                    {/* Sub-text */}
                    <p
                        className="text-sm sm:text-base font-bold uppercase tracking-wider max-w-md leading-relaxed"
                        style={{ color: "#1B2A4A" }}
                    >
                        First Responders, Military, and Teachers
                        <br />
                        <span className="font-normal normal-case tracking-normal text-sm" style={{ color: "#5A5A63" }}>
                            receive an additional{" "}
                        </span>
                        <span style={{ color: "#E8405E" }}>5% off!</span>
                    </p>
                </div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-1" style={{ background: "linear-gradient(90deg, #E8405E 0%, #F5A0B0 50%, #E8405E 100%)" }} />
        </section>
    );
}
