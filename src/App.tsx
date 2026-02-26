import { Routes, Route } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      <p>This is my personal site.</p>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
