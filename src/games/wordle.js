// ─── wordle.js ───────────────────────────────────────────────────────────────
// Pure game logic — no React, no DOM. Easy to unit-test.

export const MAX_GUESSES = 6
export const WORD_LENGTH = 5

/**
 * Evaluate a guess against the answer.
 * Returns an array of result objects: { letter, status }
 * status: 'correct' | 'present' | 'absent'
 */
export function evaluateGuess(guess, answer) {
  const result   = Array(WORD_LENGTH).fill(null)
  const answerArr = answer.split('')
  const guessArr  = guess.split('')
  const used      = Array(WORD_LENGTH).fill(false)

  // First pass: correct positions
  guessArr.forEach((letter, i) => {
    if (letter === answerArr[i]) {
      result[i] = { letter, status: 'correct' }
      used[i] = true
    }
  })

  // Second pass: present / absent
  guessArr.forEach((letter, i) => {
    if (result[i]) return
    const foundIdx = answerArr.findIndex((a, j) => a === letter && !used[j])
    if (foundIdx !== -1) {
      result[i] = { letter, status: 'present' }
      used[foundIdx] = true
    } else {
      result[i] = { letter, status: 'absent' }
    }
  })

  return result
}

/** Derive the keyboard letter statuses from all submitted rows. */
export function buildKeyboardState(rows) {
  const STATE_PRIORITY = { correct: 3, present: 2, absent: 1 }
  const kb = {}
  rows.forEach(row => {
    row.forEach(({ letter, status }) => {
      const prev = STATE_PRIORITY[kb[letter]] ?? 0
      if ((STATE_PRIORITY[status] ?? 0) > prev) kb[letter] = status
    })
  })
  return kb
}

/** Persist & restore today's game state in localStorage. */
const STORAGE_KEY = 'wordle_state'

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const saved = JSON.parse(raw)
    if (saved.date !== new Date().toDateString()) return null
    return saved
  } catch { return null }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    ...state,
    date: new Date().toDateString(),
  }))
}
