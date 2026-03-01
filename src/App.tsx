import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/projects"   element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Nav />
    </>
  )
}
