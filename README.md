# Times Consultant — International Education Consultancy Website

A fully responsive React 19 + Tailwind CSS website for an international education consultancy,
built around the provided brand palette (deep blue / gold, premium & minimal, glassmorphism
accents).

## Pages
- **Home** — Hero, "Why Choose Us" stats, "How We Support Students", free consultation form,
  testimonials, closing CTA.
- **About Us** — Story, mission & vision, core values, milestones.
- **Services** — 8 visa/admissions consultancy services, process steps, CTA.
- **Contact Us** — Contact form + company details + location card.
- **Book Appointment** — Scheduling form with date/time/mode selection.

## Tech
- React 19 (functional components + hooks)
- React Router 7 for page navigation
- Tailwind CSS 3 (custom theme tokens matching the brand palette)
- lucide-react for icons
- Fonts: **Fraunces** (display/headings) + **Inter** (body) via Google Fonts

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   Navbar, Footer, Button, RouteMap (signature motif),
                PageHero, StatCard, SupportCard, TestimonialCard, ConsultationForm
  pages/        Home, About, Services, Contact, BookAppointment
  index.css     Tailwind layers + base styles
  App.jsx       Routes
  main.jsx      Entry point
tailwind.config.js   Brand color tokens, radii, shadows, fonts
```

## Notes
- All colors are defined as Tailwind theme tokens (`primary`, `primary-hover`, `primary-dark`,
  `gold`, `gold-accent`, `orange-accent`, `surface`, `surface-light`, `surface-hero`, `ink`,
  `ink-secondary`, `ink-muted`, `line`) — update them once in `tailwind.config.js` to re-theme
  the whole site.
- Forms are front-end only (simulated submit + success state). Wire up `handleSubmit` in each
  form component to your backend/API/email service when ready.
- Images are pulled from Unsplash via URL for placeholder purposes — swap in your own
  photography before launch.
- Respects `prefers-reduced-motion` and includes visible focus states throughout.
