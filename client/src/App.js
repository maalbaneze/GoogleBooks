/* Import React, react-router-dom packages */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* Import folders for building our pages */
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

/* This is where our app gets instructions on how to fill its pages */
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
/* Export our app function for use by the React app */
export default App;
