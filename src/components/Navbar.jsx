import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home',               to: '/' },
  { label: 'Systems',            to: '/systems' },
  { label: 'Machine Learning',   to: '/machine-learning' },
  { label: 'Agentic',            to: '/agentic' },
  { label: 'Software Development', to: '/software-development' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper border-b border-rule shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex items-center justify-center gap-1 overflow-x-auto py-2 scrollbar-none">
          {NAV_ITEMS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link whitespace-nowrap ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
