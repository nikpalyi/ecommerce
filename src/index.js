import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//for redux, Provider is the parent for everything at Redux
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {' '}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
