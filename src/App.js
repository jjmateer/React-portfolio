import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/navbar";
import Home from "./pages/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
