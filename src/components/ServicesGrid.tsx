import Image from "next/image";
import { siteConfig } from "../../site.config";

const { services } = siteConfig;

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding" aria-labelledby="services-heading">
            <div className="container-wide">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        {services.sectionLabel}
                    </p>
                    <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        {services.sectionTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.items.map((service, i) => (
                        <div key={i} className="card overflow-hidden group">
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2 font-[family-name:var(--font-heading)]">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                                    {service.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors inline-flex items-center gap-1"
                                >
                                    Get a Quote
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
