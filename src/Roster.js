import React from "react";
import { Switch, Route } from "react-router-dom";
import FullRoster from "./FullRoster";
import Chef from "./Chef";

const Roster = () => (
  <Switch>
    <Route exact path="/roster" component={FullRoster} />
    <Route exact path="/roster/:number" component={Chef} />
  </Switch>
);

export default Roster;
