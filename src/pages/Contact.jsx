import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const baseInput =
  'w-full rounded-lg border border-line bg-surface-light px-4 py-3 text-sm text-ink placeholder:text-ink-muted transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/15'

const contactDetails = [
  { icon: MapPin, label: 'Visit Us', value: 'Times Tower, 2nd Floor, MM Alam Road, Lahore, Pakistan' },
  { icon: Phone, label: 'Call Us', value: '+92 42 3512 3456' },
  { icon: Mail, label: 'Email Us', value: 'info@timesconsultant.com' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Sat, 9:00 AM – 7:00 PM' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear about your plans."
        description="Questions about a destination, a university, or the visa process? Reach out — a real counselor replies, not a bot."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          {/* Contact details */}
          <div className="lg:col-span-2">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-primary-dark sm:text-3xl">
              Reach the Times Consultant team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
              Prefer to talk directly? Use the details below, or fill in the form and we'll get
              back to you within one business day.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-card border border-line bg-white p-5 shadow-softer">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-hero text-primary">
                    <c.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">{c.label}</p>
                    <p className="mt-1 text-sm text-ink-secondary">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-card border border-line bg-white px-8 py-16 text-center shadow-soft">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-primary-dark">
                  Message sent.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-secondary">
                  Thanks for reaching out — we'll respond to your message within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink">Full Name</label>
                    <input id="c-name" required type="text" placeholder="Your full name" className={baseInput} />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-ink">Email Address</label>
                    <input id="c-email" required type="email" placeholder="you@example.com" className={baseInput} />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-ink">Mobile Number</label>
                    <input id="c-phone" required type="tel" placeholder="+92 3XX XXXXXXX" className={baseInput} />
                  </div>
                  <div>
                    <label htmlFor="c-subject" className="mb-1.5 block text-sm font-medium text-ink">Subject</label>
                    <input id="c-subject" type="text" placeholder="What's this about?" className={baseInput} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-ink">Message</label>
                    <textarea id="c-message" rows={5} required placeholder="Tell us how we can help" className={`${baseInput} resize-none`} />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-hover active:bg-primary-dark disabled:opacity-60 sm:w-auto"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                  {!loading && <Send className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-surface-light pb-20">
        <div className="container-page">
          <div className="relative h-72 overflow-hidden rounded-card border border-line shadow-softer sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
              alt="Map view of Lahore city near our office"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/25" />
            <div className="glass absolute bottom-6 left-6 flex items-center gap-3 rounded-card px-5 py-4 shadow-glass">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-primary-dark">
                Times Tower, MM Alam Road, Lahore
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
