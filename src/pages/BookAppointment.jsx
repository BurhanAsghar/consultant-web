import { useState } from 'react'
import { CalendarCheck2, Clock3, Video, Building2, CheckCircle2, CalendarDays } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const baseInput =
  'w-full rounded-lg border border-line bg-surface-light px-4 py-3 text-sm text-ink placeholder:text-ink-muted transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/15'

const modes = [
  { icon: Building2, label: 'In-Person' },
  { icon: Video, label: 'Video Call' },
  { icon: Clock3, label: 'Phone Call' },
]

const expectations = [
  'A 30-minute session with a senior counselor',
  'An honest review of your academic profile',
  'A shortlist direction for universities & destinations',
  'Clear next steps — no pressure, no obligation',
]

export default function BookAppointment() {
  const [mode, setMode] = useState('In-Person')
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
        eyebrow="Book Appointment"
        title="Schedule your free consultation."
        description="Pick a date, a mode, and tell us a little about your plans — we'll confirm your slot within one business day."
      />

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-card border border-line bg-white p-8 shadow-softer">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-hero text-primary">
                <CalendarCheck2 className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary-dark">
                What to Expect
              </h3>
              <ul className="mt-5 space-y-3">
                {expectations.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-ink-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-lg bg-surface-hero p-4 text-xs leading-relaxed text-primary-dark">
                Office hours: Monday – Saturday, 9:00 AM – 7:00 PM. Video and phone
                consultations are available outside these hours by request.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-card border border-line bg-white px-8 py-16 text-center shadow-soft">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-primary-dark">
                  Appointment requested.
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-secondary">
                  We'll confirm your preferred slot by email or phone within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="b-name" className="mb-1.5 block text-sm font-medium text-ink">Full Name</label>
                    <input id="b-name" required type="text" placeholder="Your full name" className={baseInput} />
                  </div>
                  <div>
                    <label htmlFor="b-email" className="mb-1.5 block text-sm font-medium text-ink">Email Address</label>
                    <input id="b-email" required type="email" placeholder="you@example.com" className={baseInput} />
                  </div>
                  <div>
                    <label htmlFor="b-phone" className="mb-1.5 block text-sm font-medium text-ink">Mobile Number</label>
                    <input id="b-phone" required type="tel" placeholder="+92 3XX XXXXXXX" className={baseInput} />
                  </div>
                  <div>
                    <label htmlFor="b-destination" className="mb-1.5 block text-sm font-medium text-ink">Preferred Destination</label>
                    <select id="b-destination" required defaultValue="" className={baseInput}>
                      <option value="" disabled>Select destination</option>
                      {['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'Ireland', 'Other'].map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="b-date" className="mb-1.5 block text-sm font-medium text-ink">Preferred Date</label>
                    <div className="relative">
                      <input id="b-date" required type="date" className={`${baseInput} pr-10`} />
                      <CalendarDays className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="b-time" className="mb-1.5 block text-sm font-medium text-ink">Preferred Time</label>
                    <input id="b-time" required type="time" className={baseInput} />
                  </div>
                </div>

                <div className="mt-5">
                  <span className="mb-2 block text-sm font-medium text-ink">Consultation Mode</span>
                  <div className="grid grid-cols-3 gap-3">
                    {modes.map((m) => (
                      <button
                        type="button"
                        key={m.label}
                        onClick={() => setMode(m.label)}
                        className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-4 text-xs font-medium transition-colors ${
                          mode === m.label
                            ? 'border-primary bg-surface-hero text-primary'
                            : 'border-line bg-surface-light text-ink-secondary hover:border-primary/40'
                        }`}
                      >
                        <m.icon className="h-5 w-5" strokeWidth={1.75} />
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="b-notes" className="mb-1.5 block text-sm font-medium text-ink">Anything we should know?</label>
                  <textarea id="b-notes" rows={4} placeholder="Share your academic background, target intake, or specific questions." className={`${baseInput} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-hover active:bg-primary-dark disabled:opacity-60 sm:w-auto"
                >
                  {loading ? 'Booking…' : 'Confirm Appointment'}
                  {!loading && <CalendarCheck2 className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
