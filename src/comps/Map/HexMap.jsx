import React, { useState, useEffect } from 'react';
import { Hexagon, TiledHexagons } from 'tiled-hexagons';
const K = 4;

const getNieghbors = (i, k) => {
  let totalTiles = k * k - (k / 2);
  let row = 0;
  let index = 0;
  let firstCol = i === 0 ? true : false;
  let lastCol = false;
  while (row < k-1) {
    index = row % 2 === 0 ? index + k : index + k - 1;
    if (i === index) {
      firstCol = true;
    }
    if (i === index-1) {
      lastCol = true;
    }
    if (i < index) {
      break;
    }
    row++;
  }
  if (row === 0 && i >= index) {
    row = k - 1; // Last row
    if (i === totalTiles - 1) {
      lastCol = true; // Last tile in the last row
    }
  }
  const pairCol = row % 2 === 0;
  
  let neighbors = [];
  //check NO
  if (row > 0 && !(firstCol && pairCol)) {
    neighbors.push(i - k);
  }
  //check NE
  if (row > 0 && !(lastCol  && pairCol)) {
    neighbors.push(i - k + 1);
  }
  //check E
  if (!lastCol) {
    neighbors.push(i + 1);
  }
  //check SE
  if (!(row === k - 1) && !(lastCol && pairCol)) {
    neighbors.push(i + k);
  }
  //check SO
  if (!(row === k - 1) && !(firstCol && pairCol)) {
    neighbors.push(i + k - 1);
  }
  //check O
  if (!firstCol) {
    neighbors.push(i - 1);
  }
  return neighbors;
}
const generateMap = (k) => {
  const hexagons = [];
  for (let x = 0; x < k*k-(k/2); x++) {
    hexagons.push({
      text: x,
      onClick: () => {
        const neigh = getNieghbors(x, k);
        console.log('Neighbors of', x, ':', neigh);
      }
    });
  }
  return hexagons;
}
const HexMap = () => {
  // Responsive tilePx: 1/4 of min(screen width, screen height)
  const [tilePx, setTilePx] = useState(50);

  useEffect(() => {
    const updateTilePx = () => {
      const minDim = Math.min(window.innerWidth, window.innerHeight);
      const apothem = minDim / 8;
      const side = (2 * apothem) / Math.sqrt(3) * 0.8; // 0.8 to leave some space for the gap
      setTilePx(Math.floor(side));
    };
    updateTilePx();
    window.addEventListener('resize', updateTilePx);
    return () => window.removeEventListener('resize', updateTilePx);
  }, []);

  const fontSize = tilePx * 0.6;
  return (
    <div>
      <TiledHexagons
        tileSideLengths={tilePx}
        tileGap={2}
        tileBorderRadii={5}
        maxHorizontal={K}
        elevation={0}
        styles={{
          normal: {elevation: 0 },
          hover: { elevation: 0 },
          active: { elevation: 0 }
        }}
        tileTextStyles={{
          fontFamily: 'Source Sans Pro',
          fontSize: fontSize,
          fill: '#7cebff'
        }}
        tiles={generateMap(K)}
      />
    </div>
  );
}

export default HexMap;
