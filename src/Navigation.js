import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
function Nav(){
  const location = useLocation();
return(
    <div id="navigation">
    <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>ABOUT</Link>
        </li>
        <li>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>SKILLS</Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>PROJECTS</Link>
        </li>
      </ul>
    </div>
)

}

export default Nav;