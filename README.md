# Landing Page Template

A **copy-and-paste** Next.js landing page template. Spin up a new client site by editing **one file**.

## Quick Start

```bash
# 1. Copy this folder for a new project
cp -r landing-page-template/ my-new-client/

# 2. Install dependencies
cd my-new-client
npm install

# 3. Edit site.config.ts with the new business info
#    (see "What to Customize" below)

# 4. Add images to public/
#    - public/logo.png          → Business logo
#    - public/images/hero.jpg   → Hero background
#    - public/images/about.jpg  → About section photo
#    - public/images/services/  → One image per service

# 5. Run locally
npm run dev
```

## What to Customize

Everything lives in **`site.config.ts`** at the project root:

| Section | What to Change |
|---------|---------------|
| `business` | Name, tagline, phone, email, website URL, owner name |
| `location` | City, state, zip, county, GPS coordinates, areas served |
| `colors` | Brand colors (primary, secondary, backgrounds, etc.) |
| `images` | Paths to logo, hero image, about image |
| `hero` | Headline, subheadline, badge text, stats bar |
| `services` | Array of services with title, description, image |
| `process` | Process steps and "What You Can Expect" list |
| `reviews` | Customer testimonials |
| `about` | About section heading and paragraphs |
| `serviceArea` | Section headings and map placeholder text |
| `form` | GoHighLevel / LeadConnector form embed URL and ID |
| `seo` | Page title, meta description, keywords, OG image |
| `schema` | JSON-LD business type, price range, services list |

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Project Structure

```
├── site.config.ts          ← EDIT THIS FILE
├── public/
│   ├── logo.png
│   └── images/
│       ├── hero.jpg
│       ├── about.jpg
│       └── services/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx      (reads SEO + schema from config)
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── TrustRow.tsx
│       ├── ServicesGrid.tsx
│       ├── ProcessSteps.tsx
│       ├── Reviews.tsx
│       ├── ServiceArea.tsx
│       ├── About.tsx
│       ├── EstimateForm.tsx
│       ├── Footer.tsx
│       └── ThemeInjector.tsx (injects colors from config)
```

## Deployment

Build for production:

```bash
npm run build
```

Deploy to **Netlify**, **Vercel**, or any Node.js host.
