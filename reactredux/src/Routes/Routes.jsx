import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";

const Routes = () => {
  return (
    <div className="container fw-bold my-4">
      <div>
        <Link className="me-5 fs-3 text-center" to="/">TASKS</Link>
        <Link className="me-5 fs-3 text-center" to="/login">LOGIN</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <h2>ERROR 404</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
