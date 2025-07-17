import React from 'react';
import { useHistory } from 'react-router-dom';

function Menu() {
  const history = useHistory();

  const handleStart = () => {
    history.push('/game');
  };

  return (
    <div>
      <h1>Menu</h1>
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
}

export default Menu;
