import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This is for any global styles, you can create this or omit it if unnecessary.
import App from './App'; // Assuming your main component is App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
