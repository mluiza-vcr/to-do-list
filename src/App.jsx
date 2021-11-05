import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Update from './pages/update';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/update" component={Update} />
    </BrowserRouter>
  );
}

export default App;
