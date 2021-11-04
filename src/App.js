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

      const {destinations, crew, technology} = data;

      const getDestination = (props) => {
        let place = props.match.params.place;
        if(place !== ':place') {
          let currentDestination = destinations.find((dest) => dest.name.toLocaleLowerCase() === place.toLowerCase());
          return <Destination {...props} detail={currentDestination} info={destinations} />
        }
        else {
          return <Destination {...props} detail = {destinations[0]} info={destinations} />
        }
      }
        return (
            <Switch className="App">
              <Route exact path ="/" render={(routeProps)=><Home {...routeProps} />} />
              <Route exact path = "/destination/:place" render={ getDestination} />
              <Route exact path ="/crew" render={(routeProps)=><Crew {...routeProps} info={crew} />} />
              <Route exact path ="/technology" render={(routeProps)=><Technology {...routeProps} info={technology} />} />
            </Switch>
        );
    }
}

export default App;
