import { Quote } from 'lucide-react'

export default function TestimonialCard({ name, program, text }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-line bg-white p-8 shadow-softer">
      <Quote className="h-7 w-7 text-gold-accent" strokeWidth={1.5} />
      <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-secondary">"{text}"</p>
      <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-hero font-display text-sm font-semibold text-primary">
          {name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-primary-dark">{name}</p>
          <p className="text-xs text-ink-muted">{program}</p>
        </div>
      </div>
    </div>
  )
}
