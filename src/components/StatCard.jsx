export default function StatCard({ icon: Icon, value, label, description }) {
  return (
    <div className="group relative rounded-card border border-line bg-white p-8 shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-hero text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <p className="mt-6 font-display text-4xl font-semibold text-primary-dark">{value}</p>
      <p className="mt-1 text-sm font-semibold text-gold">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{description}</p>
    </div>
  )
}
