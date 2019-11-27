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
import AccountUpdate from "./AccountUpdate";
import DepositCreate from "./DepositCreate";
import WithdrawCreate from "./WithdrawCreate";
import DepositUpdate from "./DepositUpdate";
import WithdrawUpdate from "./WithdrawUpdate";

export default function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/deposit/:id/edit" component={DepositUpdate} />
            <Route exact path="/withdraw/:id/edit" component={WithdrawUpdate} />
            <Route exact path="/account/:id/create-withdraw" component={WithdrawCreate} />
            <Route exact path="/account/:id/create-deposit" component={DepositCreate} />
            <Route exact path="/account/:id/update-bill" component={BillUpdate} />
            <Route exact path="/account/:id/create-bill" component={Bill} />
            <Route exact path="/account/:id/edit" component={AccountUpdate} />
            <Route exact path="/account/:id" component={Account} />
            <Route exact path="/customer/:id/create-account" component={AccountCreate} />
            <Route exact path="/customer/:id/edit" component={CustomerUpdate} />
            <Route exact path="/customer/:id" component={Customer} />
            <Route exact path="/accounts" component={Customer} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/" component={SignIn} />
          </Switch>
        </div>
      </Router>
  );
}
