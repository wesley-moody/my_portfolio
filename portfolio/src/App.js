import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Container, Dimmer, Loader } from "semantic-ui-react";

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

{
  /* // <h1>Welcome</h1>
        // <div className='summary'>
      //   <p>
      //     Hello, my name is Wesley Moody, I'm a full stack web developer and a graduate of Lambda School. <br/>I have experience with CSS, HTML, Javascript
      //   </p>
      // </div> 
      </div> */
}
