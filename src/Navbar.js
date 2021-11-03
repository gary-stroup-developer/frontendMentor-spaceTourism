import React, {Component} from "react";
import {NavLink} from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div className="Home-nav-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <hr />
                <nav className="navbar navbar-expand-md navbar-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="navabr-item">
                                <NavLink exact to="/" className="navLink-link" activeClassName="selected"><span className="navLink-span">00</span> Home</NavLink>
                            </li>
                            <li className="navabr-item">
                                <NavLink exact to="/destination" className="navLink-link" activeClassName="selected"><span className="navLink-span">01</span> Destination</NavLink>
                            </li>
                            <li className="navabr-item">
                                <NavLink exact to="/crew" className="navLink-link" activeClassName="selected"><span className="navLink-span">02</span> Crew</NavLink>
                            </li>
                            <li className="navabr-item">
                                <NavLink exact to="/technology" className="navLink-link" activeClassName="selected"><span className="navLink-span">03</span> Technology</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;