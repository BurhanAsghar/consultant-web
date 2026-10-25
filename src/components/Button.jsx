import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-hover active:bg-primary-dark shadow-soft',
  gold:
    'bg-gold text-white hover:bg-[#B08830] active:bg-[#9C7729] shadow-soft',
  outline:
    'bg-transparent text-white border border-white/70 hover:bg-white/10 active:bg-white/20',
  outlinePrimary:
    'bg-transparent text-primary border border-primary/30 hover:bg-primary/5 active:bg-primary/10',
  ghost:
    'bg-white text-primary hover:bg-surface-light active:bg-line/40 shadow-soft',
}

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) {
  const sizes = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  }

  const base = `inline-flex items-center justify-center rounded-pill font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizes[size]} ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" strokeWidth={2.25} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" strokeWidth={2.25} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button className={base} {...props}>
      {content}
    </button>
  )
}
