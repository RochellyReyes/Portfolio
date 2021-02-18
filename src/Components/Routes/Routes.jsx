import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../../Views/Home";
import Projects from "../../Views/Projects";
import Resume from "../../Views/Resume";
import Contact from "../../Views/Contact";
import NavBar from "../Nav/NavBar";

// https://reactrouter.com/web/guides/quick-start

const Routes = () => {
    return (
      <Router> 
        <div>
          <NavBar/>
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default Routes;
