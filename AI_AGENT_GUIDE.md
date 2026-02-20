# AI Agent Guide — Landing Page Template

> **Read this first.** This project is a reusable template, not a finished website.
> It is cloned and customized for each new client business.

## What This Is

A **Next.js 16 single-page landing page template** designed for local service businesses (contractors, plumbers, landscapers, roofers, towing companies, etc.). It gets cloned from Git and then customized per client.

## Critical Architecture Rule

**ALL business-specific data lives in ONE file: `site.config.ts`** at the project root.

When the user asks you to set up this template for a new business, you should **only need to edit `site.config.ts`** and replace images in `public/`. Do NOT hardcode business data directly into components.

## What to Change for a New Business

### 1. `site.config.ts` — The Only File You Edit

| Config Section | What to Fill In | Example |
|---|---|---|
| `business.name` | Company name | `"Smith Roofing"` |
| `business.tagline` | Short tagline | `"Quality Roofs, Built to Last"` |
| `business.description` | 1–2 sentence SEO description | `"Licensed roofing contractor..."` |
| `business.ownerName` | Owner's first name | `"Mike"` |
| `business.phone` | Formatted phone | `"(555) 123-4567"` |
| `business.phoneRaw` | Digits only | `"5551234567"` |
| `business.email` | Contact email | `"mike@smithroofing.com"` |
| `business.siteUrl` | Production URL | `"https://smithroofing.com"` |
| `location.*` | City, state, zip, county, GPS, areas served | — |
| `colors.*` | Brand colors (hex) — these auto-inject as CSS variables | — |
| `images.*` | Paths to logo, hero, about images | — |
| `hero.*` | Headline, subheadline, badge, stats, CTA text | — |
| `trustItems[]` | 4 trust/value-prop cards | — |
| `services.items[]` | Array of services with title, description, image, alt | — |
| `process.steps[]` | 4 process steps | — |
| `reviews.items[]` | 3 customer reviews | — |
| `about.*` | About section heading, paragraphs, CTA labels | — |
| `serviceArea.*` | Headings and map placeholder text | — |
| `form.embedUrl` | GoHighLevel/LeadConnector iframe URL | — |
| `form.formId` | Form ID from the embed code | — |
| `seo.*` | Page title, meta description, keywords | — |
| `schema.*` | JSON-LD business type, price range, services list | — |

### 2. Images to Replace in `public/`

| File | What It Is | Recommended Size |
|---|---|---|
| `public/logo.png` | Business logo | Any, displayed at 60px height |
| `public/images/hero.jpg` | Hero background image | 1920×1080+ |
| `public/images/about.jpg` | About section photo | 800×600+ |
| `public/images/services/*.jpg` | One image per service | 800×600+ |

### 3. `package.json`

Update `"name"` to match the project (e.g., `"smith-roofing-app"`).

## What NOT to Change

- **Component files** (`src/components/*.tsx`) — These are generic. They read from `site.config.ts`. Don't hardcode business data into them.
- **`globals.css`** — Colors are injected at runtime by `ThemeInjector.tsx` from the config. Don't manually edit color values in CSS.
- **`ThemeInjector.tsx`** — This bridges `site.config.ts` colors into CSS variables. Leave it alone.

## How Components Work

Every component imports `siteConfig` from `../../site.config`:

```tsx
import { siteConfig } from "../../site.config";
const { business, hero, images } = siteConfig;
// Then uses business.name, hero.headline, etc.
```

## Page Structure (top to bottom)

1. **Header** — Logo, nav links, phone number, CTA button
2. **Hero** — Full-screen bg image, headline, subheadline, badge, stats bar
3. **TrustRow** — 4 value-prop cards (icons cycle automatically)
4. **ServicesGrid** — 3-column grid of service cards with images
5. **ProcessSteps** — 4-step process + "What You Can Expect" checklist
6. **Reviews** — 3 testimonial cards with star ratings
7. **ServiceArea** — Area chips + map placeholder
8. **About** — Photo + bio text + CTA buttons
9. **EstimateForm** — GoHighLevel iframe embed + sidebar with phone/email/promises
10. **Footer** — Logo, description, quick links, contact info, copyright

## Common Tasks

### "Set this up for [Business Name]"
→ Edit `site.config.ts` with all their info. Replace images. Done.

### "Add a new service"
→ Add an entry to `services.items[]` in `site.config.ts`. Add the service image to `public/images/services/`.

### "Change the colors"
→ Update `colors.*` in `site.config.ts`. The `ThemeInjector` component handles the rest.

### "Add a new section"
→ Create a new component in `src/components/`, add any config data to `site.config.ts`, and add the component to `src/app/page.tsx`.

### "Change the form"
→ Update `form.embedUrl` and `form.formId` in `site.config.ts` with the new GoHighLevel widget URL and ID.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 
- TypeScript (strict mode)
