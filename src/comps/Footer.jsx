import React from 'react';
import chroma from 'chroma-js';
const Footer = ({myColor}) => {
  return (
    <div id='Footer' style={{backgroundColor: myColor}}>
      <span >R:{chroma(myColor).rgb()[0]}</span>
      <span > G:{chroma(myColor).rgb()[1]} </span>
      <span >B:{chroma(myColor).rgb()[2]}</span>
    </div>
  );
}

export default Footer;
