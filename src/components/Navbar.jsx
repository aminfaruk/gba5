import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logogba.jpg'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/teams', label: 'Teams' },
  { to: '/stats', label: 'Stats' },
  { to: '/history', label: 'History' },
  { to: '/rules', label: 'Rules' },
]

export default function Navbar() {
  return (
    <header className="bg-purple-700 sticky top-0 z-40 shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src={logo}
            alt="GBA"
            className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover shadow-md"
          />
          <span className="text-white hidden sm:inline font-headline font-bold leading-tight text-sm">
            Granville Basketball
            <br />
            <span className="font-normal text-white/70 text-xs">Association</span>
          </span>
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-3 py-1.5 sm:px-4 rounded-full font-body text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-500/50 text-white'
                    : 'text-purple-100/80 hover:text-white hover:bg-purple-600/40'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
