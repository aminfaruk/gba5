import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logogba.jpg'

export default function Navbar() {
  return (
    <nav className="bg-gba-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-base tracking-wide shrink-0">
          <img src={logo} alt="GBA" className="h-10 w-10 sm:h-[72px] sm:w-[72px] rounded-full object-cover shadow-md" />
          <span className="text-white hidden sm:inline font-semibold leading-tight">Granville Basketball<br /><span className="font-normal text-white/70 text-sm">Association</span></span>
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium">
          {[
            { to: '/', label: 'Home', end: true },
            { to: '/teams', label: 'Teams' },
            { to: '/stats', label: 'Stats' },
            { to: '/history', label: 'History' },
            { to: '/rules', label: 'Rules' },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-2 py-1.5 sm:px-3 rounded transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
