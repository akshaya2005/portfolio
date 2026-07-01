import { useState, useCallback } from 'react'
import { checkSelection, getColorClasses } from '../games/connections'
import { CONNECTIONS_PUZZLE } from '../data/connectionsConfig'

const MAX_MISTAKES = 4

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const allItems = shuffle(CONNECTIONS_PUZZLE.groups.flatMap(g => g.items))

export default function Connections() {
  const [items,    setItems]    = useState(allItems)
  const [selected, setSelected] = useState([])
  const [solved,   setSolved]   = useState([])   // array of solved group objects
  const [mistakes, setMistakes] = useState(0)
  const [message,  setMessage]  = useState('')

  const flash = (msg) => { setMessage(msg); setTimeout(() => setMessage(''), 2000) }
  const remaining = CONNECTIONS_PUZZLE.groups.filter(g => !solved.includes(g))
  const isGameOver = solved.length === CONNECTIONS_PUZZLE.groups.length || mistakes >= MAX_MISTAKES

  const toggle = (item) => {
    if (isGameOver) return
    setSelected(sel =>
      sel.includes(item)
        ? sel.filter(s => s !== item)
        : sel.length < 4 ? [...sel, item] : sel
    )
  }

  const submit = useCallback(() => {
    if (selected.length !== 4) { flash('Pick exactly 4'); return }
    const { correct, group, oneAway } = checkSelection(selected, remaining)
    if (correct) {
      setSolved(s => [...s, group])
      setItems(i => i.filter(it => !group.items.includes(it)))
      setSelected([])
      flash('✓ Correct!')
    } else if (oneAway) {
      setMistakes(m => m + 1)
      flash('One away...')
    } else {
      setMistakes(m => m + 1)
      flash('Try again')
    }
  }, [selected, remaining])

  return (
    <div className="flex flex-col items-center gap-6 py-4 max-w-xl mx-auto">
      <h2 className="font-display text-3xl font-bold">Connections</h2>
      <p className="section-label">Find the groups that connect</p>

      {/* Mistakes */}
      <div className="flex items-center gap-2">
        <span className="section-label">Mistakes remaining:</span>
        {Array(MAX_MISTAKES).fill(null).map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full border border-ink
            ${i < MAX_MISTAKES - mistakes ? 'bg-ink' : 'bg-transparent'}`} />
        ))}
      </div>

      {message && (
        <div className="bg-ink text-paper font-sans text-sm px-4 py-2 rounded-sm">
          {message}
        </div>
      )}

      {/* Solved groups */}
      {solved.map(group => (
        <div key={group.label}
          className={`w-full rounded-sm p-4 text-center border ${getColorClasses(group.color)}`}>
          <p className="font-sans font-medium text-xs uppercase tracking-widest mb-1">{group.label}</p>
          <p className="font-body text-sm">{group.items.join(', ')}</p>
        </div>
      ))}

      {/* Remaining tiles */}
      <div className="grid grid-cols-4 gap-2 w-full">
        {items.map(item => (
          <button
            key={item}
            onClick={() => toggle(item)}
            className={`aspect-square rounded-sm border-2 font-sans font-medium text-xs
                        uppercase text-center px-1 py-2 transition-all
                        ${selected.includes(item)
                          ? 'bg-ink text-paper border-ink'
                          : 'bg-rule/20 border-rule hover:border-ink'}`}
          >
            {item}
          </button>
        ))}
      </div>

      {!isGameOver && (
        <div className="flex gap-3">
          <button onClick={() => setSelected([])}
            className="nav-link">Deselect all</button>
          <button onClick={submit}
            className="nav-link active">Submit</button>
        </div>
      )}

      {isGameOver && (
        <p className="font-display text-lg italic text-center">
          {solved.length === CONNECTIONS_PUZZLE.groups.length
            ? '🎉 You found them all!'
            : 'Better luck next time 💛'}
        </p>
      )}
    </div>
  )
}
