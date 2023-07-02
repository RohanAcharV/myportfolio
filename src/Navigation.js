import React from 'react';
import { Link } from 'react-router-dom';
function Nav(){
return(
    <div id="navigation">
    <ul>
        <li>
          <Link to="/">ABOUT</Link>
        </li>
        <li>
          <Link to="/skills">SKILLS</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
      </ul>
    </div>
)

}

export default Nav;