export default function SupportCard({ image, title, description, index }) {
  return (
    <div className="group overflow-hidden rounded-card border border-line bg-white shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 font-display text-sm font-semibold text-primary shadow-soft">
          {index}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-primary-dark">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{description}</p>
      </div>
    </div>
  )
}
