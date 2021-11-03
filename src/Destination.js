import React, { Component } from "react";
import Navbar from "./Navbar";
class Destination extends Component {
    render() {
        return (
            <div className="Destination">
                <Navbar />
                <p>destination page</p>
                <p>enter data through props</p>
            </div>
        )
    }
}

export default Destination;