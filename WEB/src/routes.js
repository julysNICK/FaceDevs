import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import login from "./Pages/login";

import Sendemail from "./Pages/sendEmail";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={login} />
        <Route path="/send-email" component={Sendemail} />
      </Switch>
    </BrowserRouter>
  );
}
