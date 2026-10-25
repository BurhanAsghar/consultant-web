import {
  GraduationCap, FileText, Stamp, BookOpenCheck, Landmark,
  PlaneTakeoff, Home as HomeIcon, MessagesSquare, ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'

const services = [
  {
    icon: MessagesSquare,
    title: 'Career & Course Counseling',
    description: 'One-on-one sessions to identify the right course, university, and country based on your academic profile and goals.',
  },
  {
    icon: GraduationCap,
    title: 'University Selection & Shortlisting',
    description: 'Curated shortlists from our 1,000+ partner universities, matched to your budget, grades, and career plans.',
  },
  {
    icon: FileText,
    title: 'Application & SOP Guidance',
    description: 'Hands-on help with application forms, statements of purpose, and recommendation letters that stand out.',
  },
  {
    icon: Landmark,
    title: 'Scholarship & Financial Advisory',
    description: 'We identify scholarships and financing options you qualify for, and guide you through every application.',
  },
  {
    icon: Stamp,
    title: 'Visa Filing & Documentation',
    description: 'Complete document checklists and filing support to keep your visa application accurate and on schedule.',
  },
  {
    icon: BookOpenCheck,
    title: 'Visa Interview Preparation',
    description: 'Mock interviews and coaching from consultants who know exactly what embassy officers look for.',
  },
  {
    icon: HomeIcon,
    title: 'Pre-Departure & Accommodation',
    description: 'Housing guidance, travel checklists, and orientation briefings so you land prepared, not overwhelmed.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Post-Arrival Support',
    description: 'Ongoing support after you land — from airport pickup guidance to settling into student life abroad.',
  },
]

const steps = [
  { label: 'Free Consultation', text: 'Share your goals; we assess your profile honestly.' },
  { label: 'University Shortlist', text: 'Receive a tailored shortlist within days.' },
  { label: 'Application Support', text: 'We prepare and submit your applications together.' },
  { label: 'Visa & Departure', text: 'Full visa filing support through to your flight.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need, from first consultation to arrival day."
        description="Visa consultancy and admissions support built around one student at a time — not a factory line."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-card border border-line bg-white p-7 shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-hero text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-base font-semibold text-primary-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-light py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-primary-dark sm:text-4xl">
              A Clear Path, Start to Finish
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.label} className="relative rounded-card border border-line bg-white p-7 shadow-softer">
                <span className="font-display text-3xl font-semibold text-gold-accent/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-primary-dark">{s.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary-dark py-20">
        <div className="container-page relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-medium text-white sm:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="max-w-md text-sm text-white/70">
            Book a free consultation and we'll map out the right path for your profile.
          </p>
          <Button to="/book-appointment" variant="gold" size="lg" icon={ArrowRight}>
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
