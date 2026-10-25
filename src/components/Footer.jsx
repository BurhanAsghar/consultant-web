import { NavLink } from 'react-router-dom'
import { Compass, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/book-appointment', label: 'Book Appointment' },
]

const services = [
  'University Selection',
  'Application Guidance',
  'Visa Processing',
  'Test Preparation',
  'Scholarship Advisory',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold-accent">
              <Compass className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="font-display text-lg font-semibold">Times Consultant</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Guiding ambitious students toward the world's best universities — with honest advice,
            direct partnerships, and support that lasts from first counseling session to arrival day.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-white"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-accent">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="text-sm text-white/70 transition-colors hover:text-white">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-accent">
            Our Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s} className="text-sm text-white/70">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-accent">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-accent" />
              <span>Times Tower, 2nd Floor, MM Alam Road, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 shrink-0 text-gold-accent" />
              <a href="tel:+924235123456" className="hover:text-white">+92 42 3512 3456</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 shrink-0 text-gold-accent" />
              <a href="mailto:info@timesconsultant.com" className="hover:text-white">
                info@timesconsultant.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 shrink-0 text-gold-accent" />
              <a href="mailto:admissions@timesconsultant.com" className="hover:text-white">
                admissions@timesconsultant.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Times Consultant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80">Privacy Policy</a>
            <a href="#" className="hover:text-white/80">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
