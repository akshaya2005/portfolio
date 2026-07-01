import { Outlet } from 'react-router-dom'
import Masthead from './Masthead'
import Navbar from './Navbar'
import MusicPlayer from './MusicPlayer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-paper">
      <Masthead />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
