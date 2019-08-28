import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninAndSignupPage from './pages/sign-in and sign-up/sign-in and sign-up.component';

import Header from './components/header/header.component';

import './App.css';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SigninAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
