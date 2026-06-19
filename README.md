# TIMAMY DIGITAL — Landing Page

> Build • Automate • Scale

A premium, conversion-optimised landing page for TIMAMY DIGITAL — an AI & automation agency helping entrepreneurs and creators grow faster and work smarter.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.1 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| Lucide Icons | 0.468 |

---

## Project Structure

```
timamy-digital-landing/
├── app/
│   ├── globals.css          # Global styles, Tailwind base, glassmorphism utils
│   ├── layout.tsx           # Root layout with metadata & Open Graph
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile drawer
│   ├── ui/
│   │   ├── Button.tsx       # Reusable animated button (primary/secondary/outline)
│   │   ├── GlowCard.tsx     # Glassmorphism card with glow on hover
│   │   └── GradientText.tsx # Gradient text utility
│   └── sections/
│       ├── Hero.tsx         # Animated hero with floating dashboard mockup
│       ├── Trust.tsx        # Tool/platform trust indicators
│       ├── Services.tsx     # 4 service cards (AI, Automation, Notion, Products)
│       ├── FeaturedOffer.tsx# AI Revenue Blueprint™ offer section
│       ├── Benefits.tsx     # 6 benefit cards with stats
│       ├── Process.tsx      # Animated 3-step timeline (Build/Automate/Scale)
│       ├── Testimonials.tsx # 6 realistic client testimonials
│       ├── FAQ.tsx          # 6 accordion FAQs
│       ├── Contact.tsx      # Contact form with success state
│       └── Footer.tsx       # Footer with CTA banner, links, socials
├── lib/
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
├── vercel.json              # Vercel deployment config
├── tailwind.config.ts       # Brand colors, animations, shadows
└── next.config.ts           # Next.js config
```

---

## Getting Started

```bash
# Clone / navigate to the project
cd timamy-digital-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project root
cd timamy-digital-landing
vercel

# Follow prompts:
# - Link to existing project? No → create new
# - Project name: timamy-digital-landing
# - Root directory: ./  (press Enter)
# - Override settings? No

# Production deployment
vercel --prod
```

### Option 2 — Vercel Dashboard (GitHub integration)

1. Push project to a GitHub repository:
   ```bash
   cd timamy-digital-landing
   git init
   git add .
   git commit -m "feat: initial TIMAMY DIGITAL landing page"
   git remote add origin https://github.com/YOUR_USERNAME/timamy-digital-landing.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — done in ~60 seconds

### Environment Variables (optional)

If you add a contact form backend (e.g., Resend, SendGrid), add these in Vercel dashboard → Settings → Environment Variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hello@timamydigital.com
```

---

## Customisation

### Brand Colors
Edit `tailwind.config.ts` → `theme.extend.colors`

### Contact Form
The form currently uses a simulated delay. To wire up a real backend:

1. Create `app/api/contact/route.ts`
2. Use [Resend](https://resend.com) or [SendGrid](https://sendgrid.com) to send emails
3. Update `Contact.tsx` `handleSubmit` to POST to `/api/contact`

### Content / Copy
All content is co-located in each section component under `components/sections/`. Find the relevant section and update the data arrays at the top of each file.

---

## SEO

- Full `<head>` metadata via Next.js `Metadata` API
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Responsive viewport
- `metadataBase` set to `https://timamydigital.com`

Update the domain in `app/layout.tsx` when you have your custom domain.

---

## Performance

- Static site generation (SSG) — all pages pre-rendered
- No external API calls at build time
- Google Fonts loaded via `<link>` in `<head>` (preconnect)
- Images lazy-loaded by default (Next.js `<Image>`)
- First Load JS: ~164 kB (Framer Motion dominant)

---

## License

© 2026 TIMAMY DIGITAL. All rights reserved.
