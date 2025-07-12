import React, { useState, useEffect } from 'react';
import { Hexagon, TiledHexagons } from 'tiled-hexagons';
/* const K = 4;
 */

/* const generateMap = (k) => {
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
} */
const HexMap = ({tiles, k}) => {
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
        maxHorizontal={k}
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
        tiles={tiles}
      />
    </div>
  );
}

export default HexMap;
