import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id='nav'>
      <Menu evenly divided>
        <Container>
          <Link to='/'>
            <Menu.Item name="Home" />
          </Link>
          <Link to='/about'>
            <Menu.Item name="About Me" />
          </Link>
        </Container>


      </Menu>
    </div>
  )
}