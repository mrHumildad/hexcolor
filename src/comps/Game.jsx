import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import HexMap from './Map/HexMap.jsx'
import { playColorTone } from '../logics/funHex.js'
import { getNeighbors, getNeigColor, invertColor } from '../logics/utils.js'
import chroma from 'chroma-js'

const Game = ({level, goal, k=4, tollerance}) => {
  //const navigate = useNavigate();
  const history = useHistory(); 
  const [isOver, setIsOver] = useState(false);
  console.log(k, 'k in Game.jsx');
  const [myColor, setMyColor] = useState(chroma.random().hex());
  const [usedTiles, setUsedTiles] = useState([0]);
  const [lastClick, setLastClick] = useState(0);
  //const moves =  usedTiles.length - 1;
  const locked = {
    R: chroma(myColor).rgb()[0] === chroma(goal.hex).rgb()[0],
    G: chroma(myColor).rgb()[1] === chroma(goal.hex).rgb()[1],
    B: chroma(myColor).rgb()[2] === chroma(goal.hex).rgb()[2]
  }
  console.log('goal', goal.hex, k) ;
  console.log('myColor', myColor);
  useEffect(() => {
    if (isOver) {
      history.push('/gameover');
    }
  }, [history, isOver]);
  const neighs =[...new Set(getNeighbors(lastClick, k))].filter(n=> !usedTiles.includes(n));
  if (neighs.length === 0) {
    console.log('no neighbors found');
    history.push('/gameover');
    return null;
  }
  if (locked.R && locked.G && locked.B) {
    console.log('locked', locked);
    history.push('/nextlevel');
    return null;
  }
  console.log(neighs)
  const generateTiles = () => {
    const tiles = [];
    for (let x = 0; x < k*k-(k/2); x++) {
      let bgColor = invertColor(goal.hex);
      let shadow = invertColor(myColor);
      let click = () => {
          console.log(bgColor);
        }
      let text = '';
      if (usedTiles.includes(x)) {
        /* text = chroma(myColor).rgb().join(', '); */
        bgColor = myColor
        shadow = myColor;
      } else if (neighs.includes(x)) {
        const neighColor = getNeigColor(myColor, goal.hex, locked)
        console.log('neighColor', neighColor)
        click = () => {
          playColorTone(neighColor);
          let mix = chroma.mix(myColor,neighColor, 0.5, 'rgb');
          console.log(mix, 'mix')
          mix = mix._rgb.map((c, i) => {
          if (Math.abs(c - chroma(goal.hex).rgb()[i]) < tollerance) {
            console.log('close to goal', c, chroma(goal.hex).rgb()[i], i)
            return chroma(goal.hex).rgb()[i];
          }
          return c;
          })
          setMyColor(chroma(mix).hex())
          setUsedTiles([...usedTiles, x])
          setLastClick(x)
        }
        bgColor = neighColor;
        text = chroma(bgColor).rgb().join(', ');
      }
      tiles.push({
        text: text,
        fill: bgColor,
        shadow: shadow,
        onClick: click
      });
    }
    return tiles;
  }
  const tiles = generateTiles()
  return (
    <div className='Game' style={{ backgroundColor: myColor }}>
      <Header goal={goal} level={level} />
      <div className='separator' />
      <div id='hexContainer'>
        <HexMap 
          tiles={tiles}
          k={k}
        />
      </div>
      <Footer myColor={myColor} goal={goal} />
    </div>
  )
}
export default Game
