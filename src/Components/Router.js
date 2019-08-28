import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
  <Router>
    {/* Switch -> 한번에 하나만 route 되도록 */}
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />

      {/* 일치하는 경로가 없으면 to에 지정된 경로로 가라 */}
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
