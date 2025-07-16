import React from 'react';
import chroma from 'chroma-js';
import { invertColor } from '../logics/utils';


const Header = ({goal, level}) => {
  //const textcolor = chroma(goal.hex).luminance() > 0.5 ? 'black' : 'white';
  const textcolor =invertColor(goal.hex)
  return (
    <div id='Header'style={{backgroundColor: goal.hex}}>
      <span className='level'>{level}</span>
      <span style={{color:textcolor}}>{goal.name}</span>
      {/* <span style={{color:textcolor}}>R:{chroma(goal).rgb()[0]}</span>
      <span style={{color:textcolor}}> G:{chroma(goal).rgb()[1]} </span>
      <span style={{color:textcolor}}>B:{chroma(goal).rgb()[2]}</span> */}
      {/* <span className='distance'>{Math.floor(distance)}</span> */}
    </div>
  );
}

export default Header;
