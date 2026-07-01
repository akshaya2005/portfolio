// ─── MusicPlayer ─────────────────────────────────────────────────────────────
// Floating mini-player powered by Howler.js.
// Drop your MP3s into src/assets/music/ and add them to PLAYLIST below.

import { useState, useEffect, useRef } from 'react'
import { Howl } from 'howler'

// 🎵 Add your songs here:
// import song1 from '../assets/music/your-song.mp3'
const PLAYLIST = [
  // { title: 'Our Song', artist: 'Artist Name', src: song1 },
]

const PLACEHOLDER = PLAYLIST.length === 0

export default function MusicPlayer() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [playing,  setPlaying]  = useState(false)
  const [current,  setCurrent]  = useState(0)
  const howlRef = useRef(null)

  // Build Howl when track changes
  useEffect(() => {
    if (PLACEHOLDER) return
    if (howlRef.current) howlRef.current.unload()
    howlRef.current = new Howl({
      src: [PLAYLIST[current].src],
      html5: true,
      onend: () => next(),
    })
    if (playing) howlRef.current.play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  const toggle = () => {
    if (PLACEHOLDER) return
    if (playing) { howlRef.current?.pause(); setPlaying(false) }
    else         { howlRef.current?.play();  setPlaying(true)  }
  }

  const next = () => setCurrent(i => (i + 1) % PLAYLIST.length)
  const prev = () => setCurrent(i => (i - 1 + PLAYLIST.length) % PLAYLIST.length)

  const track = PLAYLIST[current]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Collapsed pill */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-ink text-paper px-4 py-2 rounded-full
                     shadow-lg font-sans text-xs hover:bg-ink/80 transition-colors"
        >
          <span>{playing ? '♪' : '♩'}</span>
          <span>{PLACEHOLDER ? 'Add songs ↗' : (track?.title ?? 'Music')}</span>
        </button>
      )}

      {/* Expanded player */}
      {isOpen && (
        <div className="bg-paper border border-rule rounded-sm shadow-xl w-64 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="section-label">Now Playing</span>
            <button onClick={() => setIsOpen(false)} className="section-label hover:text-ink">✕</button>
          </div>

          {PLACEHOLDER ? (
            <p className="font-body text-xs text-ink/60 italic">
              Add MP3s to <code>src/assets/music/</code> and update the PLAYLIST in MusicPlayer.jsx.
            </p>
          ) : (
            <>
              <p className="font-display font-bold text-sm leading-tight">{track.title}</p>
              <p className="section-label mt-0.5 mb-4">{track.artist}</p>
              <div className="flex justify-center gap-6">
                <button onClick={prev}   className="text-ink hover:text-accent transition-colors">⏮</button>
                <button onClick={toggle} className="text-ink hover:text-accent transition-colors text-xl">
                  {playing ? '⏸' : '▶'}
                </button>
                <button onClick={next}   className="text-ink hover:text-accent transition-colors">⏭</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
