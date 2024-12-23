import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FocusPage } from './pages/FocusPage'
import { ProbePage } from './pages/ProbePage'
import { Layout } from './components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/focus/:id" element={<FocusPage />} />
        <Route path="/probe/:id" element={<ProbePage />} />
      </Route>
    </Routes>
  )
}

export default App
