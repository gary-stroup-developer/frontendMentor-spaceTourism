import React, {Component} from "react";
import Navbar from "./Navbar";
import "./Home.css";


class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Navbar />
                <div className="Home-tagline-container">
                    <div className="Home-tagline">
                        <p id="Home-tagline-start">
                            So, you want to travel to</p>
                        <p style={
                            {fontSize: "150px"}
                        }>Space</p>
                        <p id="Home-tagline-hook">
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                                                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                                                    because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="Home-explore-circle">
                        Explore
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
