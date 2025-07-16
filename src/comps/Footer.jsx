import React from 'react';
import chroma from 'chroma-js';



const Footer = ({myColor, goal}) => {
  const redstyle = () => {
    const redDiff = Math.abs(chroma(myColor).rgb()[0] - chroma(goal.hex).rgb()[0]);
    return {
      color: '#FF0000',
      borderSize: '10px',
      borderColor: '#FF0000',
      borderStyle:  redDiff < 1 ? 'solid' : 'none',
    }
  }
  const greenstyle = () => {
    const greenDiff = Math.abs(chroma(myColor).rgb()[1] - chroma(goal.hex).rgb()[1]);
    return {
    color: '#00FF00',
    borderSize: '10px',
    borderColor: '#00FF00',
    borderStyle:  greenDiff < 1 ? 'solid' : 'none',
  }
  }
  const bluestyle = () => {
    const blueDiff = Math.abs(chroma(myColor).rgb()[2] - chroma(goal.hex).rgb()[2]);
    return {
    color: '#0000FF',
    borderSize: '10px',
    borderColor: '#0000FF',
    borderStyle:  blueDiff < 1 ? 'solid' : 'none',
  }

  }
  //console.log(redstyle(), greenstyle(), bluestyle());
  return (
    <div id='Footer'>
      <span >#</span>
      <span style={redstyle()}>{myColor.slice(1, 3).toUpperCase()}</span>
      <span style={greenstyle()}>{myColor.slice(3, 5).toUpperCase()}</span>
      <span style={bluestyle()}>{myColor.slice(5, 7).toUpperCase()}</span>
    </div>
  );
}

export default Footer;
