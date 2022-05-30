
import React from 'react'
import {
  BrowserRouter,

  Route,
} from "react-router-dom";
import Home from './Home';
import Project from './Project';


function App() {
  
  return (
    <BrowserRouter>
  
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/project">
        <Project />
      </Route>

  </BrowserRouter>
  );
}
export default App;
