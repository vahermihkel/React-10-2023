import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks:
// 1. lisada moodul/module/library/teek mis võimaldab navigeerida (võõrad koodilõigud)
// 2. index.js sees lisada BrowserRouter ümber App tagi
// 3. App.js sees luua URLi ja failide seosed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


