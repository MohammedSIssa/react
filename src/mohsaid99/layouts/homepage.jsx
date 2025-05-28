import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'

import { Routes, Route } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--font-color)' }}>
      <Navbar />
      <Routes>
        <Route path='/:type/:id' element={<MainContent />}></Route>
      </Routes>
    </div>
  )
}