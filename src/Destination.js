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
        const images = {
            Moon: moon,
            Mars: mars,
            Europa: europa,
            Titan: titan
        };

        return (
            <div className="Destination">
                <Navbar className="Destination-navbar"/>
                <div className="scroll-container">
                    <div className="Destination-image-container">
                        <p className="Destination-decision">
                            <span id="Destination-span">01</span>
                            Pick your destination</p>
                        <img className="Destination-image"
                            src={
                                images[name]
                            }
                            alt={name}/>
                    </div>
                    <div className="Destination-navigation-details">
                        <div className="Destination-links-container">
                            {
                            this.props.info.map((destination) => (
                                <NavLink exact
                                    to={
                                        `/destination/${
                                            destination.name
                                        }`
                                    }
                                    className="Destination-links"
                                    activeClassName="selected">
                                    {
                                    destination.name
                                }</NavLink>
                            ))
                        } </div>
                        <div className="Destination-info">
                            <p id="Destination-name">
                                {
                                this.props.detail ? name : ""
                            }</p>
                            <p id="Destination-description">
                                {
                                this.props.detail ? description : ""
                            }</p>
                            <div className="hr"/>
                            <div className="Destination-info-fact-container">
                                <div className="Destination-info-fact">
                                    <p>avg. distance</p>
                                    <p className="Destination-info-fact-title" id="Destination-distance">
                                        {
                                        this.props.detail ? distance : ""
                                    }</p>
                                </div>
                                <div className="Destination-info-fact">
                                    <p>
                                        estimated travel time</p>
                                    <p className="Destination-info-fact-title" id="Destination-travel">
                                        {
                                        this.props.detail ? travel : ""
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Destination;
