import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* ekhane stateprovider asjce context folder theke */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App></App>
    </StateProvider>
  </Router>
);