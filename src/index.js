import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
