import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';  // Optional: for basic styling
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
