// ─── Masthead ────────────────────────────────────────────────────────────────
// The big NYT-style newspaper header. Swap PAPER_NAME, TAGLINE, and
// FOUNDING_DATE for your own.

const PAPER_NAME   = 'The D&A Times'
const TAGLINE      = "To bb mi, with love"
const FOUNDING_DATE = 'Est. June 2023'

export default function Masthead() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <header className="border-b-4 border-ink pt-6 pb-3 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Top meta row */}
        <div className="flex justify-between items-baseline mb-2">
          <span className="section-label">{FOUNDING_DATE}</span>
          <span className="section-label">{today}</span>
        </div>

        {/* Thick rule */}
        <div className="border-t border-rule mb-3" />

        {/* Nameplate */}
        <div className="text-center">
          <h1 className="font-masthead text-6xl md:text-8xl leading-none tracking-tight text-ink">
            {PAPER_NAME}
          </h1>
          <p className="font-body italic text-sm text-ink/60 mt-2 tracking-wide">
            {TAGLINE}
          </p>
        </div>

        <div className="border-t border-rule mt-3" />
      </div>
    </header>
  )
}
