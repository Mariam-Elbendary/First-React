import React, { Component } from "react"

class ShowLog extends Component{
    render(){
        const { name, email } = this.props;
        return(
            <div className="card1">
            <h2>Your First Name is: {name}</h2>
            <h2>Your Email is: {email}</h2>
            <h2>Submitted at: {new Date().toLocaleString()}</h2>
          </div>
        )
    }

}

export default ShowLog;