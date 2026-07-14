import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Systems from './pages/Systems'
import MachineLearning from './pages/MachineLearning'
import Agentic from './pages/Agentic'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import PasswordGate from './components/PasswordGate'


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index                      element={<Home />} />
        <Route path="systems"             element={<Systems />} />
        <Route path="machine-learning"    element={<MachineLearning />} />
        <Route path="agentic"             element={<Agentic />} />
        <Route path="software-development" element={<SoftwareDevelopment />} />
      </Route>
    </Routes>
  )
}
