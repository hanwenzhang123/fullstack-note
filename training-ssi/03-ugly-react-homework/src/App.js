import React, { Component } from "react";
import "./App.css";

import HOCCounter from "./components/Counter/Counter";
import HOCTdList from "./components/TdList/TdList";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HOCCounter />
        <HOCTdList />
      </React.Fragment>
    );
  }
}

export default App;
