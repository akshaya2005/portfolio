// ─── Wordle page ─────────────────────────────────────────────────────────────
// Scaffold — game board + keyboard render. Wire up evaluateGuess() next.

import { useState, useEffect, useCallback } from 'react'
import { evaluateGuess, buildKeyboardState, loadState, saveState, MAX_GUESSES, WORD_LENGTH } from '../games/wordle'
import { getTodaysWord, VALID_GUESSES } from '../data/wordleConfig'

const ANSWER = getTodaysWord()
const KEYS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','⌫'],
]

const STATUS_CLASSES = {
  correct: 'bg-green-700 border-green-700 text-white',
  present: 'bg-yellow-500 border-yellow-500 text-white',
  absent:  'bg-ink/70 border-ink/70 text-white',
  tbd:     'bg-transparent border-ink/30 text-ink',
  empty:   'bg-transparent border-rule text-ink',
}

export default function Wordle() {
  const saved   = loadState()
  const [rows,    setRows]    = useState(saved?.rows    ?? [])
  const [current, setCurrent] = useState(saved?.current ?? '')
  const [gameOver, setGameOver] = useState(saved?.gameOver ?? false)
  const [message,  setMessage]  = useState('')

  const kbState = buildKeyboardState(rows)

  const flash = (msg) => { setMessage(msg); setTimeout(() => setMessage(''), 2000) }

  const submitGuess = useCallback(() => {
    if (current.length !== WORD_LENGTH) { flash('Not enough letters'); return }
    if (!VALID_GUESSES.includes(current)) { flash('Not in word list'); return }

    const result = evaluateGuess(current, ANSWER)
    const newRows = [...rows, result]
    setRows(newRows)
    setCurrent('')

    const won  = result.every(r => r.status === 'correct')
    const lost = newRows.length >= MAX_GUESSES && !won
    if (won || lost) {
      setGameOver(true)
      flash(won ? '🎉 You got it!' : `The word was ${ANSWER}`)
      saveState({ rows: newRows, current: '', gameOver: true })
    } else {
      saveState({ rows: newRows, current: '', gameOver: false })
    }
  }, [current, rows])

  const handleKey = useCallback((key) => {
    if (gameOver) return
    if (key === 'ENTER') { submitGuess(); return }
    if (key === '⌫' || key === 'BACKSPACE') { setCurrent(c => c.slice(0, -1)); return }
    if (/^[A-Z]$/.test(key) && current.length < WORD_LENGTH) setCurrent(c => c + key)
  }, [gameOver, current, submitGuess])

  useEffect(() => {
    const handler = (e) => handleKey(e.key.toUpperCase())
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleKey])

  // Build display grid
  const displayRows = [
    ...rows,
    ...(rows.length < MAX_GUESSES && !gameOver
      ? [{ isCurrent: true, letters: current }]
      : []),
    ...Array(Math.max(0, MAX_GUESSES - rows.length - (gameOver ? 0 : 1))).fill(null),
  ]

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <h2 className="font-display text-3xl font-bold">Wordle</h2>
      <p className="section-label">Our personalized word game</p>

      {/* Toast */}
      {message && (
        <div className="bg-ink text-paper font-sans text-sm px-4 py-2 rounded-sm">
          {message}
        </div>
      )}

      {/* Board */}
      <div className="grid gap-1.5">
        {Array(MAX_GUESSES).fill(null).map((_, ri) => {
          const row = rows[ri]
          const isCur = !gameOver && ri === rows.length
          return (
            <div key={ri} className="flex gap-1.5">
              {Array(WORD_LENGTH).fill(null).map((_, ci) => {
                let letter = '', statusClass = STATUS_CLASSES.empty
                if (row) {
                  letter = row[ci].letter
                  statusClass = STATUS_CLASSES[row[ci].status]
                } else if (isCur) {
                  letter = current[ci] ?? ''
                  statusClass = STATUS_CLASSES.tbd
                }
                return (
                  <div
                    key={ci}
                    className={`w-14 h-14 border-2 flex items-center justify-center
                                font-display font-bold text-2xl uppercase transition-all
                                ${statusClass}`}
                  >
                    {letter}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {/* Keyboard */}
      <div className="flex flex-col gap-1.5 mt-2">
        {KEYS.map((row, ri) => (
          <div key={ri} className="flex gap-1 justify-center">
            {row.map(key => (
              <button
                key={key}
                onClick={() => handleKey(key)}
                className={`h-14 px-2 min-w-[2.5rem] rounded-sm font-sans font-medium text-sm
                            uppercase transition-colors border
                            ${key.length > 1 ? 'px-3 text-xs' : ''}
                            ${STATUS_CLASSES[kbState[key]] ?? 'bg-rule/40 border-rule text-ink hover:bg-rule'}`}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
