import React, { Component } from "react"

class Show extends Component{
    render(){
        const { fname, lname, email } = this.props;
        return(
            <div className="card1">
            <h2>Your First Name is: {fname}</h2>
            <h2>Your Last Name is: {lname}</h2>
            <h2>Your Email is: {email}</h2>
            <h2>Submitted at: {new Date().toLocaleString()}</h2>
          </div>
        )
    }

}

export default Show;