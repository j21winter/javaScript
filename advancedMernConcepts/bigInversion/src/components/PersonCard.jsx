import React, {Component} from "react";

class PersonCard extends Component{
    render(){
        const {firstName, lastName, age, hairColor} = this.props;

        return(
            <div>
                <h1>{firstName} {lastName}</h1>
                <p>{age}</p>
                <p>{hairColor}</p>
            </div>
        )
        
    }
}

export default PersonCard 