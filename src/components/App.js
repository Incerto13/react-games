import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Calculator from "./calculator/Calculator";
import NBATrivia from "./nba-trivia/App";
import YoutubeFetch from "./youtube-fetch/App";
import Chess from './chess/components/game';

import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/nba-trivia" component={NBATrivia} />
          <Route exact path="/youtube-fetch" component={YoutubeFetch} />
          <Route exact path="/chess" component={Chess} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
















