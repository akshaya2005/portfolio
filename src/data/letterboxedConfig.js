// ─── letterboxedConfig.js ────────────────────────────────────────────────────
// Letter Boxed puzzle config.
// The board is a square with 3 letters on each side (12 total, no repeats).
// Pick letters that spell meaningful words for you!
//
// sides: [top, right, bottom, left] — each is a 3-letter string

export const LETTERBOXED_PUZZLE = {
  sides: ['CMR', 'ESU', 'IAK', 'NTB'],  // change these!
  // Words are fetched dynamically from Datamuse API
  // Optional: preset solution to show on completion
  solution: ['CINEMAS', 'STARBUCK'],
}
