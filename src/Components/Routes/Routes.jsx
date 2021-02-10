import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import Home from "../../Views/Home";
import Projects from "../../Views/Projects";
import Contact from "../../Views/Contact";
import NavBar from "../NavBar";
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
