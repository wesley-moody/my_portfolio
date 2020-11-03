import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Container } from "semantic-ui-react";

import "./App.css";

function App() {
  return (
    <div className='body'>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

