import React, {Component} from 'react';
import Douglas from './assets/crew/image-douglas-hurley.png';
import Mark from './assets/crew/image-mark-shuttleworth.png';
import Victor from './assets/crew/image-victor-glover.png';
import Anousheh from './assets/crew/image-anousheh-ansari.png';

class CrewMember extends Component {
    getImage = () => {
        const images = {
            Douglas, Mark, Victor, Anousheh
        }
        const crewName = this.props.name.split(" ")[0];
        return images[crewName]
    }
    render() {
      
        const {jobTitle, name, biography} = this.props;
        return (
            <div className="CrewMember CrewMember-slide">
                <div className="CrewMember-info">
                    <p>{jobTitle}</p>
                    <p>{name}</p>
                    <p>{biography}</p>
                </div>
                <img src={this.getImage()} alt="crew member" />
            </div>
        );
    }
}

export default CrewMember;
