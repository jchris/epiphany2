import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { FocusPage } from './pages/FocusPage.tsx'
import { ProbePage } from './pages/ProbePage.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/focus/:id" element={<FocusPage />} />
      <Route path="/probe/:id" element={<ProbePage />} />
    </Routes>
  )
}

export default App
