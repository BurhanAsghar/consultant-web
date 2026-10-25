import { ArrowRight, Globe2, Users, Building2, MessageCircleQuestion, FileCheck2, PlaneTakeoff, Star } from 'lucide-react'
import Button from '../components/Button.jsx'
import RouteMap from '../components/RouteMap.jsx'
import StatCard from '../components/StatCard.jsx'
import SupportCard from '../components/SupportCard.jsx'
import ConsultationForm from '../components/ConsultationForm.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'

const stats = [
  {
    icon: Globe2,
    value: '65+',
    label: 'Study Destinations Covered',
    description: 'Pursue your education in the world\u2019s best study destinations, from established hubs to rising academic centers.',
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Strong Alumni Network',
    description: 'A local presence with global reach — our alumni open doors for the next generation of students.',
  },
  {
    icon: Building2,
    value: '1000+',
    label: 'University Partners',
    description: 'Direct partnerships with top-ranked institutions mean faster processing and honest guidance.',
  },
]

const support = [
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    title: 'Personal Counseling',
    description: 'One-on-one sessions to map your academic background to the right course, country, and university.',
  },
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    title: 'Application Guidance',
    description: 'From SOPs to recommendation letters, we help you build an application that stands out.',
  },
  {
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    title: 'Visa Processing',
    description: 'End-to-end documentation and interview preparation for a smooth, confident visa approval.',
  },
]

const testimonials = [
  {
    name: 'Hassan Raza',
    program: "MSc Data Science, University of Manchester",
    text: 'Times Consultant made a confusing process feel simple. My counselor was honest about my chances and helped me pick a course I actually love.',
  },
  {
    name: 'Fatima Sheikh',
    program: 'BBA, University of Toronto',
    text: 'From the first meeting to my visa interview prep, the team was with me at every step. I couldn\u2019t have done it without them.',
  },
  {
    name: 'Ibrahim Malik',
    program: 'MEng, TU Munich',
    text: 'They found me a scholarship opportunity I didn\u2019t even know existed. Professional, responsive, and genuinely invested in my future.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-hero">
        <RouteMap tone="primary" className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-page relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <p className="eyebrow">International Education Consultancy</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-[3.4rem]">
              Your future,
              <br />
              <span className="text-primary">planned with clarity.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-secondary">
              Times Consultant helps ambitious students turn study-abroad ambitions into offer
              letters — with honest counseling, direct university partnerships, and hands-on
              visa support across 65+ destinations.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button to="/book-appointment" variant="primary" size="lg" icon={ArrowRight}>
                Book Appointment
              </Button>
              <Button to="/services" variant="outlinePrimary" size="lg">
                Explore Services
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-primary/10 pt-6">
              <div className="flex -space-x-3">
                {['A', 'H', 'F', 'S'].map((l, i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface-hero bg-primary text-xs font-semibold text-white"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-ink-muted">Trusted by 50,000+ students worldwide</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="overflow-hidden rounded-card shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Students walking on a university campus"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
            </div>
            <div className="glass absolute -bottom-6 -left-6 hidden rounded-card p-5 shadow-glass sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <PlaneTakeoff className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-primary-dark">98%</p>
                  <p className="text-xs text-ink-muted">Visa Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-primary-dark sm:text-4xl">
              Why Choose Times Consultant?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              Nearly two decades of guiding students through one of the biggest decisions of
              their lives — backed by numbers that speak for themselves.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Support Students */}
      <section className="bg-surface-light py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-primary-dark sm:text-4xl">
              How Do We Support Students?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              A guided path from first conversation to landing at your new campus.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {support.map((s, i) => (
              <SupportCard key={s.title} index={String(i + 1).padStart(2, '0')} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-24">
        <RouteMap tone="light" className="absolute inset-0 h-full w-full opacity-60" />
        <div className="container-page relative grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow text-gold-accent">Free Consultation</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
              Let's plan your application together.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Tell us where you'd like to study and how you'd like to talk — our counselors will
              take it from there, usually within one business day.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-card border border-white/10 bg-white/5 p-4">
              <MessageCircleQuestion className="h-6 w-6 shrink-0 text-gold-accent" />
              <p className="text-xs leading-relaxed text-white/70">
                No obligation, no pressure — just clear, honest advice tailored to your goals.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-primary-dark sm:text-4xl">
              Stories From Our Students
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-hero py-16">
        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-6 rounded-card border border-line bg-white p-10 text-center shadow-soft sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary-dark">
                Ready to start your journey?
              </h3>
              <p className="mt-2 text-sm text-ink-secondary">
                Book a free one-on-one session with one of our senior counselors.
              </p>
            </div>
            <Button to="/book-appointment" variant="primary" size="lg" icon={ArrowRight} className="shrink-0">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
