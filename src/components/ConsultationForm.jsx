import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const destinations = [
  'United Kingdom', 'United States', 'Canada', 'Australia', 'Germany',
  'Ireland', 'New Zealand', 'Malaysia', 'UAE', 'China',
]
const cities = ['Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Multan', 'Peshawar']
const modes = ['In-Person', 'Video Call', 'Phone Call']
const levels = ["Bachelor's", "Master's", 'PhD', 'Diploma', 'Foundation / A-Levels']

const baseInput =
  'w-full rounded-lg border border-line bg-surface-light px-4 py-3 text-sm text-ink placeholder:text-ink-muted transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/15'

export default function ConsultationForm() {
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-card border border-line bg-white px-8 py-16 text-center shadow-soft">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-primary-dark">
          Thank you — we've got it.
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-secondary">
          One of our counselors will reach out within one business day to schedule your free
          consultation.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-primary hover:text-primary-hover"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-line bg-white p-6 shadow-soft sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-ink">
              Full Name
            </label>
            <input id="fullName" name="fullName" type="text" required placeholder="e.g. Ayesha Khan" className={baseInput} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
              Email Address
            </label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className={baseInput} />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mobile" className="mb-1.5 block text-sm font-medium text-ink">
            Mobile Number
          </label>
          <input id="mobile" name="mobile" type="tel" required placeholder="+92 3XX XXXXXXX" className={baseInput} />
        </div>

        <div>
          <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-ink">
            Preferred Study Destination
          </label>
          <select id="destination" name="destination" required defaultValue="" className={baseInput}>
            <option value="" disabled>Select destination</option>
            {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-ink">
            Select City
          </label>
          <select id="city" name="city" required defaultValue="" className={baseInput}>
            <option value="" disabled>Select your city</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="mode" className="mb-1.5 block text-sm font-medium text-ink">
            Preferred Mode of Consulting
          </label>
          <select id="mode" name="mode" required defaultValue="" className={baseInput}>
            <option value="" disabled>Select mode</option>
            {modes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="level" className="mb-1.5 block text-sm font-medium text-ink">
            Preferred Study Level
          </label>
          <select id="level" name="level" required defaultValue="" className={baseInput}>
            <option value="" disabled>Select level</option>
            {levels.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="questions" className="mb-1.5 block text-sm font-medium text-ink">
            Ask Your Questions
          </label>
          <textarea
            id="questions"
            name="questions"
            rows={4}
            placeholder="Tell us a bit about your goals — target intake, budget, or anything else on your mind."
            className={`${baseInput} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-hover active:bg-primary-dark disabled:opacity-60 sm:w-auto"
      >
        {loading ? 'Sending…' : 'Request Free Consultation'}
        {!loading && <Send className="h-4 w-4" />}
      </button>
    </form>
  )
}
