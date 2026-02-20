import Image from "next/image";
import { siteConfig } from "../../site.config";

const { business, about, images } = siteConfig;

export default function About() {
    return (
        <section id="about" className="section-padding" aria-labelledby="about-heading">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                    {/* Photo */}
                    <div className="card overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={images.about}
                                alt={`${business.name} — about us`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Copy */}
                    <div>
                        <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                            {about.sectionLabel}
                        </p>
                        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
                            {about.heading}
                        </h2>
                        {about.paragraphs.map((text, i) => (
                            <p key={i} className="text-[var(--color-muted)] leading-relaxed mb-4">
                                {text}
                            </p>
                        ))}
                        <div className="flex flex-wrap gap-3 mt-2">
                            <a href="#contact" className="btn btn-primary">
                                {about.ctaPrimary}
                            </a>
                            <a href={`tel:${business.phoneRaw}`} className="btn btn-secondary">
                                {about.ctaSecondary}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
