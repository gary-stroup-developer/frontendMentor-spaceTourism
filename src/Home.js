import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import background from "./assets/home/background-home-desktop.jpg";
import "./Home.css";
class Home extends Component {

    render() {
        const style = {
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "left top",
            backgroundSize: "cover",
            height: "100vh",
            color: "white"
            
        }
        return (
            <div className="Home"
                style={style}>
                <nav className=" col-md-8 col-sm-12 navbar navbar-expand-md navbar-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="navabr-item">
                                <NavLink exact to="/" className="navLink-link" activeClassName="selected" >00 Home</NavLink>
                            </li>
                            <li className="navabr-item">
                                <NavLink exact to="/destination" className="navLink-link" activeClassName="selected" >01 Destination</NavLink>
                            </li>
                            <li className="navabr-item">
                                <NavLink exact to="/crew" className="navLink-link" activeClassName="selected" >02 Crew</NavLink>
                            </li>
                            <li className="navabr-item">
                                <NavLink exact to="/technology" className="navLink-link" activeClassName="selected" >03 Technology</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <p>                               
                    So, you want to travel to
                    <span style={{fontSize:"50px"}}>Space</span>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                                        
                    Explore
                </p>
            </div>
        )
    }
}

export default Home;
