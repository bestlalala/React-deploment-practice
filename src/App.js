import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
    </BrowserRouter>
  );
}

export default App;
