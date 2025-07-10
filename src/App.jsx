import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Menu from './comps/Menu.jsx'
import Game from './comps/Game.jsx'

function GameOver() {
  return <h1>Game Over</h1>
}

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
