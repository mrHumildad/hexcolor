import React from 'react';

const GameOver = () => {
  return (
    <div>
      <h1>Game Over</h1>
      <p>Thank you for playing!</p>
      <button onClick={() => window.location.href = '/'}>Return to Menu</button>
    </div>
  );
}

export default GameOver;
