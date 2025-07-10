import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HexMap from './Map/HexMap.jsx'
import { x11colors } from '../logics/x11colors.js'
import { getRNDarr } from '../logics/utils.js'
const Game = () => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);
  const [colors, setColors] = useState(x11colors);
  const [completed, setCompleted] = useState([]);
  const [goal, setGoal] = useState(getRNDarr(x11colors))
  const [score, setScore] = useState();
  console.log('goal', goal);
  useEffect(() => {
    if (isOver) {
      navigate('/gameover');
    }
  }, [isOver, navigate]);

  return (
    <div style={{ backgroundColor: goal.hex}}>
      <h1>{goal.name}</h1>
      <HexMap />
    </div>
  )
}

export default Game
