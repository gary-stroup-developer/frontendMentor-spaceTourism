import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import data from "./data.json";
import "./App.css";

class App extends Component {
    render() {
      const {destination, crew, technology} = data;
        return (
            <Switch className="App">
              <Route exact path ="/" render={(routeProps)=><Home {...routeProps} />} />
              <Route exact path ="/destination" render={(routeProps)=><Destination {...routeProps} info={destination} />} />
              <Route exact path ="/crew" render={(routeProps)=><Crew {...routeProps} info={crew} />} />
              <Route exact path ="/technology" render={(routeProps)=><Technology {...routeProps} info={technology} />} />
            </Switch>
        );
    }
}

export default App;
