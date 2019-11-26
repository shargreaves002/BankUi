import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Customer from "./Customer";
import Bill from "./Bill";
import BillUpdate from "./BillUpdate";
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
          <Route exact path="/account/:id/update-bill" component={BillUpdate} />
            <Route exact path="/account/:id/create-bill" component={Bill} />
            <Route exact path="/customer/:id" component={Customer} />
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
