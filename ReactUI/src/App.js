import "./App.css";
import About from "./About.js"
import Home from "./Home.js"
import AddForm from "./AddForm.js"
import MockCreated from "./MockCreated.js"
import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";


export default class App extends Component {
  componentDidMount(){
    document.title = "JSON Mocker";
  }
  render() {
    return (
      <div className="App">
        <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/create" component={AddForm} />
                <Route path="/created" component={MockCreated} />
        </Switch>
      </div>
    );
  }
}
