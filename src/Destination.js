import React, {Component} from "react";
import Navbar from "./Navbar";
import {NavLink} from "react-router-dom";
import "./Destination.css";
import moon from './assets/destination/moon.png';
import mars from './assets/destination/mars.png';
import europa from './assets/destination/europa.png';
import titan from './assets/destination/titan.png';


class Destination extends Component {
    render() {
        const {name, description, distance, travel} = this.props.detail;
        const images = {Moon:moon,Mars:mars,Europa: europa,Titan:titan};

        return (
            <div className="Destination"style={{backgroundColor: "gray"}}>
                <div style={{backgroundColor: "gray",height:"100vh"}}>
                    <Navbar/>
                    <p><span>01</span>Pick your destination</p>
                    <div> {
                        this.props.info.map((destination) => (
                            <NavLink exact
                                to={ `/destination/${destination.name }` }
                                className="Destination-links"
                                activeClassName="selected">
                                {destination.name}</NavLink>
                        ))
                    } </div>
                    <div>
                        <img src= {images[name]} alt={name} />
                        
                        <div>
                            <p>{this.props.detail ? name : ""}</p>
                            <p>{this.props.detail ? description : ""}</p>
                            <p>{this.props.detail ? distance : ""}</p>
                            <p>{this.props.detail ? travel : ""}</p>
                           
                        </div>
                    </div>
                 
                </div>
            </div>
        )
    }
}

export default Destination;
