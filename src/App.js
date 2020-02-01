import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact={true} path={"/"}>
            <Users />
          </Route>
          <Route exact={true} path={"/places/new"}>
            <NewPlace />
          </Route>
          <Redirect to={"/"} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
