// ─── letterboxed.js ──────────────────────────────────────────────────────────
// Pure game logic for Letter Boxed.

/** Build a lookup: letter → side index (0-3) */
export function buildSideMap(sides) {
  const map = {}
  sides.forEach((side, i) => {
    side.split('').forEach(letter => { map[letter.toUpperCase()] = i })
  })
  return map
}

/** Validate that a word is legal given the side map */
export function validateWord(word, sideMap) {
  const letters = word.toUpperCase().split('')
  for (const letter of letters) {
    if (sideMap[letter] === undefined) return { valid: false, reason: 'Letter not on board' }
  }
  for (let i = 1; i < letters.length; i++) {
    if (sideMap[letters[i]] === sideMap[letters[i - 1]]) {
      return { valid: false, reason: 'Consecutive letters must be on different sides' }
    }
  }
  return { valid: true }
}

/** Check a chain of words: each word must start with the last letter of the previous */
export function validateChain(words) {
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1].toUpperCase()
    const curr = words[i].toUpperCase()
    if (prev[prev.length - 1] !== curr[0]) {
      return { valid: false, i }
    }
  }
  return { valid: true }
}

/** Check if all 12 board letters are used */
export function allLettersUsed(words, sides) {
  const used = new Set(words.join('').toUpperCase().split(''))
  return sides.every(side => side.split('').every(l => used.has(l)))
}
