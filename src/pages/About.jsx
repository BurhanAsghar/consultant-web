import { Target, Eye, ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity First',
    description: 'We recommend what\u2019s right for you, not what pays us more — every family deserves an honest counselor.',
  },
  {
    icon: HeartHandshake,
    title: 'Student-Centered',
    description: 'Every plan starts with your goals, budget, and background — never a one-size-fits-all package.',
  },
  {
    icon: Sparkles,
    title: 'Excellence in Execution',
    description: 'From SOPs to visa files, we hold our own work to the standard top universities expect.',
  },
]

const milestones = [
  { year: '2008', text: 'Times Consultant founded in Lahore with a single counseling office.' },
  { year: '2013', text: 'Crossed 100 university partnerships across the UK and Canada.' },
  { year: '2018', text: 'Opened dedicated visa processing desks in 4 major cities.' },
  { year: '2024', text: 'Reached 50,000+ alumni across 65+ study destinations worldwide.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Two decades of turning ambition into acceptance letters."
        description="We started with one belief: study-abroad guidance should be honest, personal, and genuinely in the student's interest. That belief still runs everything we do."
      />

      {/* Story */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-card shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Consultants advising students in a modern office"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-primary-dark sm:text-4xl">
              Built by counselors who\u2019d been students abroad themselves.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-secondary">
              Times Consultant was founded by a small group of former international students who
              remembered exactly how confusing the process felt — scattered advice, unclear visa
              requirements, and offers that didn't fit their goals. We built the consultancy we
              wished we'd had.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
              Today, that same philosophy scales across 65+ destinations and over 1,000
              university partners, but the approach hasn't changed: sit down, listen first, and
              build a plan around the student in front of us.
            </p>
            <div className="mt-8">
              <Button to="/services" variant="outlinePrimary" icon={ArrowRight}>
                See our services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-light py-20 sm:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-card border border-line bg-white p-9 shadow-softer">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-primary-dark">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              To give every student honest, expert guidance so they can study at the institution
              that\u2019s genuinely right for them — not just the one that\u2019s easiest to get into.
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-9 shadow-softer">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Eye className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-primary-dark">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              To be the most trusted name in international education consultancy — recognized by
              students and universities alike for doing right by both sides.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Stand For</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-primary-dark sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-card border border-line bg-white p-8 shadow-softer">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-hero text-primary">
                  <v.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-primary-dark">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-surface-light py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Journey</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-primary-dark sm:text-4xl">
              Milestones Along the Way
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-3xl">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xs font-semibold text-white shadow-soft">
                    {m.year}
                  </span>
                  {i !== milestones.length - 1 && <span className="mt-2 w-px flex-1 bg-line" />}
                </div>
                <p className="pt-2.5 text-sm leading-relaxed text-ink-secondary">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
