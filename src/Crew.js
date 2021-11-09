import React, {Component} from "react";
import Navbar from "./Navbar";
import './Crew.css';
import CrewMember from "./CrewMember";

class Crew extends Component {
    render() {
        return (
            <div className="Crew">
                <Navbar/>
                <div className="Crew-flex-container">
                    <div className="Destination-decision">
                        <span id="Destination-span">01</span>
                        Meet your crew</div>
                    <div className="Crew-slideshow-container">
                       
                        {
                        this.props.info.map((crewMember, index) => (
                                <CrewMember key={index}
                                    jobTitle={ crewMember.role }
                                    name={crewMember.name}
                                    biography={crewMember.bio}
                                />
                        ))
                    } 
                    </div>
                    <div className="Crew-nextSlide">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Crew;
