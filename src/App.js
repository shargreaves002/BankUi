import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Customer from "./Customer";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/accounts">
              <Customer />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
