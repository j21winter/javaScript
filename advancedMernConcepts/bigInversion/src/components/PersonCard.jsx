import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age : this.props.age
        }
    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;

        return(
            <div>
                <h1>{firstName} {lastName}</h1>
                <p>{this.state.age}</p>
                <p>{hairColor}</p>
                <button onClick={() => {this.setState({ age : (this.state.age += 1) })}}>Birthday Button for {firstName} {lastName} </button>
            </div>
        )
        
    }
}

export default PersonCard 