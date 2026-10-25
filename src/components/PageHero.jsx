import RouteMap from './RouteMap.jsx'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-24">
      <RouteMap tone="light" className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/70 to-primary-dark" />
      <div className="container-page relative">
        <p className="eyebrow text-gold-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">{description}</p>
        )}
      </div>
    </section>
  )
}
