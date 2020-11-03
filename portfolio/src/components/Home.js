import React from "react";
import "../App.css";

export default function Home() {
  return (
    <div className='summary'>
      <h1>A software developer in the Bay Area</h1>
      <p>
        My name is Wesley Moody, I'm a full stack software developer and I'm
        looking for a position in the Bay Area. You can check out my <a href="https://github.com/wesley-moody">github</a> and
        <a href="https://www.linkedin.com/in/wesley-moody/">linkedin</a>. Some of the projects that I've been working on:
      </p>
      <div className='projects'>
        <ul>
          <li>
            <a href='https://art-portfolio-ten.now.sh/'>DH Illustrations</a>
          </li>
            <li>
            <a href='https://www.youtube.com/watch?v=otK1GiwxQ6o&feature=youtu.be&t=3818&ab_channel=LambdaSchool'>
              Beerthoven
            </a>
            </li>
            <li>
            <a href='https://game-of-life-aclwma7wt.vercel.app/'>
              John Conway's Game of Life
            </a>
            </li>          
        </ul>
        <p>
          Email me at <a href="wesleygenemoody@gmail.com">wesleygenemoody@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
