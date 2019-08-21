import React, { Component } from "react";

import "./App.css";
import Youtube from "./Youtube";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div  className="container">
        <Header />
        <div />
        <Youtube />
      </div>
    );
  }
}

export default App;
