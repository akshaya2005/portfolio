// ─── connections.js ──────────────────────────────────────────────────────────
// Pure game logic for Connections.

export function checkSelection(selectedItems, groups) {
  for (const group of groups) {
    const groupSet = new Set(group.items)
    if (selectedItems.every(item => groupSet.has(item))) {
      return { correct: true, group }
    }
  }
  // Check for "one away"
  for (const group of groups) {
    const groupSet = new Set(group.items)
    const matches = selectedItems.filter(item => groupSet.has(item))
    if (matches.length === 3) return { correct: false, oneAway: true }
  }
  return { correct: false, oneAway: false }
}

const COLOR_CLASSES = {
  yellow: 'bg-yellow-300 text-yellow-900 border-yellow-400',
  green:  'bg-green-400 text-green-900 border-green-500',
  blue:   'bg-blue-400 text-blue-900 border-blue-500',
  purple: 'bg-purple-400 text-purple-900 border-purple-500',
}

export function getColorClasses(color) {
  return COLOR_CLASSES[color] ?? COLOR_CLASSES.yellow
}
