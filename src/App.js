import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Account from "./Account";
import Customer from "./Customer";
import CustomerUpdate from "./CustomerUpdate";
import Bill from "./Bill";
import BillUpdate from "./BillUpdate";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import AccountCreate from "./AccountCreate";

export default function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/customer/:id/create-account" component={AccountCreate} />
            <Route exact path="/customer/:id/edit" component={CustomerUpdate} />
            <Route exact path="/account/:id/update-bill" component={BillUpdate} />
            <Route exact path="/account/:id/create-bill" component={Bill} />
            <Route exact path="/customer/:id" component={Customer} />
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/account/:id" component={Account} />
            <Route exact path="/accounts">
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
