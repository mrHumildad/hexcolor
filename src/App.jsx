import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import chroma from 'chroma-js';
import { funHex } from './logics/funHex.js';
import { getRNDarr, startColor } from './logics/utils.js';
import './App.css';

import Menu from './comps/Menu.jsx';
import Game from './comps/Game.jsx';
import GameOver from './comps/GameOver.jsx';
import NextLevel from './comps/NextLevel.jsx';

const k = 4;
const steps = 30;
const value = 10;
const tollerance = value;

function App() {
  const [colors, setColors] = useState(funHex);
  const [completed, setCompleted] = useState([]);
  const [goal, setGoal] = useState(getRNDarr(colors, completed));

  console.log('goal', goal.hex, k);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/game" render={() => (
            <Game 
              level={completed.length + 1}
              goal={goal}
              k={k}
              tollerance={tollerance}
            />
          )} />
          <Route path="/gameover" component={GameOver} />
          <Route path="/nextlevel" component={NextLevel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
