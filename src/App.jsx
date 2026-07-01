import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Newspaper from './pages/Newspaper'
import Wordle from './pages/Wordle'
import Connections from './pages/Connections'
import Letterboxed from './pages/Letterboxed'
import PasswordGate from './components/PasswordGate'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem('authenticated')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  if (loading) return null

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticate={() => {
      setIsAuthenticated(true)
      sessionStorage.setItem('authenticated', 'true')
    }} />
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index         element={<Newspaper />} />
        <Route path="wordle"      element={<Wordle />} />
        <Route path="connections" element={<Connections />} />
        <Route path="letterboxed" element={<Letterboxed />} />
      </Route>
    </Routes>
  )
}
