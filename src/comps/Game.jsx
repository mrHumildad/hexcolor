import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import HexMap from './Map/HexMap.jsx'
import { x11colors } from '../logics/x11colors.js'
import { getRNDarr } from '../logics/utils.js'
import { getNeighbors, startColor } from '../logics/utils.js'
import chroma from 'chroma-js'
const unusedCol ='#EEEEE'
const K = 6
const steps = 30;
const value = 10;
const colorNeighbor = steps / 6;

const Game = () => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);
  const [colors, setColors] = useState(x11colors);
  const [completed, setCompleted] = useState([]);
  const [goal, setGoal] = useState(getRNDarr(x11colors).hex);
  /* const [myColor, setMyColor] = useState(chroma.random().hex()); */
  const [myColor, setMyColor] = useState(chroma(startColor(goal, steps, value)).hex());
  const [usedTiles, setUsedTiles] = useState([0]);
  const [clickable, setClicable] = useState([]);
  const [lastClick, setLastClick] = useState(0);
  const moves = usedTiles.length - 1;
  console.log('goal', goal);
  console.log('myColor', myColor);
  //console.log(startColor([100, 100, 100], 6, 10))
  const distance = chroma.distance(myColor, goal);
  const midColor = chroma.mix(myColor, goal).hex();
  console.log('distance: ', chroma.distance(myColor, goal))
  useEffect(() => {
    if (isOver) {
      navigate('/gameover');
    }
  }, [isOver, navigate]);
  const neighs = getNeighbors(lastClick, K)
  console.log(neighs)
  const generateTiles = () => {
    const tiles = [];
    for (let x = 0; x < K*K-(K/2); x++) {
      let bgColor = unusedCol;
      let click = () => {
          console.log(bgColor);
        }
      let text = '';
      if (usedTiles.includes(x)) {
        text = Math.floor(distance)
        bgColor = myColor
      } else if (neighs.includes(x)) {
        //console.log(x, ' is neigh of ', lastClick)
        const neighColor = getRNDarr(x11colors, [goal]).hex
        click = () => {
          console.log(' my new color:', chroma.mix(myColor,neighColor).hex())
          console.log('neighColor', neighColor)
          console.log('myColor', myColor)
          console.log(chroma.mix(myColor,neighColor, 0.5, 'rgb').hex())
          setMyColor(chroma.mix(myColor,neighColor, 0.5, 'rgb').hex())
          setUsedTiles([...usedTiles, x])
          setLastClick(x)
        }
        bgColor = neighColor;
        text = Math.floor(chroma.distance(myColor, neighColor))
      }
      tiles.push({
        text: text,
        fill: bgColor,
        onClick: click
      });
    }
    return tiles;
  }
  const tiles = generateTiles()
  return (
    <div style={{ backgroundColor: goal}}>
      <Header goal={goal} distance={distance} moves={moves} />
      <HexMap 
        tiles={tiles}
        k={K}
      />
      <Footer myColor={myColor} />
    </div>
  )
}
export default Game
