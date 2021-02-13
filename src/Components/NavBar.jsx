import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const NavBar = () => {
    let HomeP, ProjectsP, ResumeP, ContactP;
    const currentLocation = useLocation();
    //console.log(useLocation());
    if (currentLocation.pathname === "/") {
        HomeP = 'active';
    } else if (currentLocation.pathname === "/projects") {
        ProjectsP = 'active';
    } else if (currentLocation.pathname === "/resume"){
        ResumeP = 'active';
    }else if (currentLocation.pathname === "/contact") {
        ContactP = 'active';
    }
  
    return (
      <div>
          <nav className="Nav">
              <ul>
                  <li><Link 
                    className={HomeP}
                    to="/">
                      Home
                  </Link></li>
                  <li><Link 
                    className={ProjectsP}
                    to="/projects">
                      Projects
                  </Link></li>

                  <li><Link 
                    className={ResumeP}
                    to="/resume">
                      Resume
                  </Link></li>

                  <li><Link 
                    className={ContactP}                     
                    to="/contact">
                      Contact
                  </Link></li>
              </ul>
          </nav>
      </div>
    )
  };
  
  export default NavBar;
  