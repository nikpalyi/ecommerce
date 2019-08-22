import React from 'react';
import HomePage from './homepage.component.jsx';
import './App.css';

import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
