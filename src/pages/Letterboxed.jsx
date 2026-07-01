import { useState, useRef, useEffect } from 'react'
import { buildSideMap, validateWord, allLettersUsed } from '../games/letterboxed'
import { LETTERBOXED_PUZZLE } from '../data/letterboxedConfig'

const { sides, solution } = LETTERBOXED_PUZZLE
const sideMap   = buildSideMap(sides)
const ALL_LETTERS = sides.join('').toUpperCase().split('')
const allowedLetters = new Set(ALL_LETTERS.concat(['ENTER', 'BACKSPACE', '⌫']))

// Positions for rendering the square board
const SIDE_POSITIONS = [
  // top: 3 letters spaced across the top
  [1,0],[2,0],[3,0],
  // right
  [4,1],[4,2],[4,3],
  // bottom (right to left)
  [3,4],[2,4],[1,4],
  // left
  [0,3],[0,2],[0,1],
]

async function isValidEnglishWord(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
    )
    console.log("Valid word!")
    return response.status === 200 || word === "STARBUCKS"
  } catch (error) {
    console.error('Error validating word:', error)
    return false
  }
}

export default function Letterboxed() {
  const [words,    setWords]    = useState([])
  const [current,  setCurrent]  = useState('')
  const [message,  setMessage]  = useState('')
  const [won,      setWon]      = useState(false)
  const inputRef = useRef()

  const flash = (msg) => { setMessage(msg); setTimeout(() => setMessage(''), 2000) }

  const usedLetters = new Set(words.join('').toUpperCase().split('').filter(Boolean))
  const lastLetter  = words.length > 0 ? words[words.length - 1].slice(-1).toUpperCase() : null

  const submit = async () => {
    const word = current.toUpperCase().trim()
    if (word.length < 3) { flash('Too short'); return }

    const { valid, reason } = validateWord(word, sideMap)
    if (!valid) { flash(reason); return }

    if (words.length > 0) {
      const prev = words[words.length - 1].toUpperCase()
      if (prev.slice(-1) !== word[0]) {
        flash(`Must start with "${prev.slice(-1)}"`); return
      }
    }

    const isValid = await isValidEnglishWord(word)
    if (!isValid) { flash('Not in dictionary'); return }

    const newWords = [...words, word]
    setWords(newWords)
    setCurrent('')

    if (allLettersUsed(newWords, sides)) {
      setWon(true)
    }
    inputRef.current?.focus()
  }

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <h2 className="font-display text-3xl font-bold">Letter Boxed</h2>
      <p className="section-label">Use every letter, connecting words by their last letter</p>

      {message && (
        <div className="bg-ink text-paper font-sans text-sm px-4 py-2 rounded-sm">
          {message}
        </div>
      )}

      {/* Word chain */}
      <div className="flex flex-wrap gap-2 justify-center max-w-sm">
        {words.map((word, i) => (
          <span key={i} className="font-display font-bold text-lg">
            {word}{i < words.length - 1 ? ' –' : ''}
          </span>
        ))}
      </div>

      {/* Board */}
      <div className="relative w-56 h-56">
        <div className="absolute inset-0 border-2 border-ink rounded-sm" />

        {/* SVG for connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Lines for completed words (more transparent) */}
          {words.map((word, wordIdx) => (
            word.split('').map((letter, i) => {
              if (i === 0) return null
              const prevLetter = word[i - 1]
              const prevIdx = ALL_LETTERS.indexOf(prevLetter)
              const currIdx = ALL_LETTERS.indexOf(letter)

              if (prevIdx === -1 || currIdx === -1) return null

              const [prevCol, prevRow] = SIDE_POSITIONS[prevIdx]
              const [currCol, currRow] = SIDE_POSITIONS[currIdx]

              const x1 = (prevCol / 4) * 224
              const y1 = (prevRow / 4) * 224
              const x2 = (currCol / 4) * 224
              const y2 = (currRow / 4) * 224

              return (
                <line
                  key={`word-${wordIdx}-${i}`}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className="text-ink opacity-20"
                />
              )
            })
          ))}

          {/* Lines for current word being typed */}
          {current.split('').map((letter, i) => {
            if (i === 0) return null
            const prevLetter = current[i - 1]
            const prevIdx = ALL_LETTERS.indexOf(prevLetter)
            const currIdx = ALL_LETTERS.indexOf(letter)

            if (prevIdx === -1 || currIdx === -1) return null

            const [prevCol, prevRow] = SIDE_POSITIONS[prevIdx]
            const [currCol, currRow] = SIDE_POSITIONS[currIdx]

            const x1 = (prevCol / 4) * 224
            const y1 = (prevRow / 4) * 224
            const x2 = (currCol / 4) * 224
            const y2 = (currRow / 4) * 224

            return (
              <line
                key={`current-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className="text-ink opacity-50"
              />
            )
          })}
        </svg>

        {/* Letters on sides */}
        {ALL_LETTERS.map((letter, i) => {
          const [col, row] = SIDE_POSITIONS[i]
          const isUsed = usedLetters.has(letter)
          const left = `${(col / 4) * 100}%`
          const top  = `${(row / 4) * 100}%`
          return (
            <div
              key={letter}
              className={`absolute w-8 h-8 flex items-center justify-center -translate-x-1/2 -translate-y-1/2
                          font-display font-bold text-lg rounded-full border-2 transition-all
                          ${isUsed ? 'bg-green-400 border-green-500 text-white' : 'bg-paper border-ink text-ink'}`}
              style={{ left, top }}
            >
              {letter}
            </div>
          )
        })}
      </div>

      {/* Input */}
      {!won && (
        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={current}
            onChange={e => setCurrent(e.target.value.toUpperCase())}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                  submit()
                }
                const prevLetter = current[current.length - 1]
                if (!allowedLetters.has(e.key.toUpperCase()) || (prevLetter && sideMap[e.key.toUpperCase()] === sideMap[prevLetter.toUpperCase()])) {
                  e.preventDefault()
                }
              }
            }
            placeholder={lastLetter ? `Starts with ${lastLetter}…` : 'Type a word…'}
            className="border-b-2 border-ink bg-transparent font-display text-xl
                       px-2 py-1 outline-none w-40 uppercase tracking-wider"
            autoFocus
          />
          <button onClick={submit} className="nav-link active">Enter</button>
        </div>
      )}

      {won && (
        <div className="text-center">
          <p className="font-display text-2xl font-bold mb-2">🎉 You solved it!</p>
          {/* {solution && (
            <p className="font-body italic text-ink/70">
              One solution: {solution.join(' → ')}
            </p>
          )} */}
        </div>
      )}

      {/* Reset */}
      <button
        onClick={() => { setWords([]); setCurrent(''); setWon(false) }}
        className="section-label hover:text-ink underline underline-offset-2 mt-2"
      >
        Reset
      </button>
    </div>
  )
}
