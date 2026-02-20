"use client";

import { siteConfig } from "../../site.config";

/**
 * Injects brand colors from site.config.ts as CSS custom properties.
 * This lets you change colors in ONE file and have them apply everywhere.
 */
export default function ThemeInjector() {
    const c = siteConfig.colors;
    const vars = `
        :root {
            --color-primary: ${c.primary};
            --color-primary-dark: ${c.primaryDark};
            --color-primary-light: ${c.primaryLight};
            --color-secondary: ${c.secondary};
            --color-secondary-dark: ${c.secondaryDark};
            --color-secondary-light: ${c.secondaryLight};
            --color-bg: ${c.bg};
            --color-bg-alt: ${c.bgAlt};
            --color-ink: ${c.ink};
            --color-muted: ${c.muted};
            --color-border: ${c.border};
            --color-star: ${c.star};
        }
    `;
    return <style dangerouslySetInnerHTML={{ __html: vars }} />;
}
