import React from 'react';
import chroma from 'chroma-js';

const Header = ({goal, moves, distance}) => {
  return (
    <div id='Header'style={{backgroundColor: goal}}>
      <span className='moves'>{moves}</span>
      {/* <span >{chroma(goal).name()}</span> */}
      <span >R:{chroma(goal).rgb()[0]}</span>
      <span > G:{chroma(goal).rgb()[1]} </span>
      <span >B:{chroma(goal).rgb()[2]}</span>
      {/* <span className='distance'>{Math.floor(distance)}</span> */}
    </div>
  );
}

export default Header;
