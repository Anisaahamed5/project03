import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Todos from "./todos.js";
import Contact from "./contact.js";

import './App.css';

function App() {
  return (
    <Router>
      {/* NAVBAR */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Todos<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Todos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
