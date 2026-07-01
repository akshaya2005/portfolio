// ─── connectionsConfig.js ────────────────────────────────────────────────────
// Personalize your Connections puzzle!
// Each group has a category label + exactly 4 items.
// Theme ideas: places you've been, shows you've watched, things you call each other,
// songs you love, restaurants you go to, etc.

export const CONNECTIONS_PUZZLE = {
  date: 'June 28, 2026',   // change this when you update the puzzle
  groups: [
    {
      label: 'Movies We\'ve Watched in Theaters',
      color: 'yellow',   // yellow | green | blue | purple
      items: ['Spider-Man', 'Barbie', 'Together', 'A Quiet Place'],
    },
    {
      label: 'First Words of Restaurants We Love',
      color: 'blue',
      items: ['Pho', 'Mister', 'North Avenue', 'Popup'],
    },
    {
      label: 'Date Spots in the 404',
      color: 'green',
      items: ['Beltline', 'Piedmont Park', 'Ponce City Market', 'Rocky Mountain'],
    },
    {
      label: 'Ending with Nicknames for You',
      color: 'purple',
      items: ['Ebb', 'Goodwill', 'Reindeer', 'Cacodyl'],
    },
  ],
}
