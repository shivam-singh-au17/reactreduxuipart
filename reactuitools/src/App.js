import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { SiteLayout } from "./Components/MaterialUI/SiteLayout";

function App() {

  return (
    <>
      <SiteLayout>
        <Switch>
          <Route path="/" render={() => <Dashboard />} />
        </Switch>
      </SiteLayout>
    </>
  );
}

export default App;


