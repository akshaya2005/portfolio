// ─── Masthead ────────────────────────────────────────────────────────────────
// The big NYT-style newspaper header. Swap PAPER_NAME, TAGLINE, and
// FOUNDING_DATE for your own.

import computerIcon from '../assets/computer.png'

const PAPER_NAME   = "Akshaya's Portfolio"
const TAGLINE      = ''
const FOUNDING_DATE = ''

export default function Masthead() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <header className="border-b-4 border-ink pt-6 pb-3 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Nameplate */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <img src={computerIcon} alt="Computer icon" className="h-12 md:h-16 w-12 md:w-16" />
            <h1 className="font-masthead text-6xl md:text-8xl leading-none tracking-tight text-ink">
              {PAPER_NAME}
            </h1>
          </div>
          {TAGLINE && (
            <p className="font-body italic text-sm text-ink/60 mt-2 tracking-wide">
              {TAGLINE}
            </p>
          )}
        </div>

        <div className="border-t border-rule mt-3" />
      </div>
    </header>
  )
}
