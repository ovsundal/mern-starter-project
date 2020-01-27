import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"}>
          <Users />
        </Route>
        <Route exact={true} path={"/places/new"}>
          <NewPlace />
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
