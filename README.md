# 💌 The Daily Us

A personalized NYT-style website for your boyfriend, built with React + Vite + Tailwind.

## Getting Started

```bash
npm install
npm run dev
```

---

## Personalization Checklist

### 🗞️ The Newspaper (Our Story page)
- [ ] Edit **`src/data/stories.js`** — swap in your own headlines, card text, and dates
- [ ] Drop photos into **`src/assets/photos/`**, then `import` them in `stories.js`

### 🎵 Music Player
- [ ] Drop MP3s into **`src/assets/music/`**
- [ ] Edit the `PLAYLIST` array in **`src/components/MusicPlayer.jsx`**

### 🟩 Wordle
- [ ] Edit **`src/data/wordleConfig.js`** — add meaningful 5-letter words (places, nicknames, etc.)

### 🟨 Connections
- [ ] Edit **`src/data/connectionsConfig.js`** — fill in the 4 groups with relationship-themed items

### 🔠 Letter Boxed
- [ ] Edit **`src/data/letterboxedConfig.js`** — choose 12 letters and valid words

### 🏷️ Masthead
- [ ] Edit `PAPER_NAME`, `TAGLINE`, and `FOUNDING_DATE` in **`src/components/Masthead.jsx`**

### 🗂️ Navbar
- [ ] Change the label "Our Story" to whatever you'd like in **`src/components/Navbar.jsx`**

---

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx         # Page shell (Masthead + Navbar + MusicPlayer)
│   ├── Masthead.jsx       # Big newspaper nameplate
│   ├── Navbar.jsx         # Game tabs navigation
│   ├── ArticleCard.jsx    # Photo + headline + card text
│   └── MusicPlayer.jsx    # Floating Howler.js player
├── pages/
│   ├── Newspaper.jsx      # Main "Our Story" page
│   ├── Wordle.jsx
│   ├── Connections.jsx
│   └── Letterboxed.jsx
├── games/
│   ├── wordle.js          # Pure game logic
│   ├── connections.js
│   └── letterboxed.js
├── data/
│   ├── stories.js         # ← Your photos + card text go here
│   ├── wordleConfig.js    # ← Your words go here
│   ├── connectionsConfig.js
│   └── letterboxedConfig.js
└── assets/
    ├── photos/            # ← Drop JPGs here
    └── music/             # ← Drop MP3s here
```

## Deploying (free)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import repo → Deploy
   Done! You'll get a URL to share.
