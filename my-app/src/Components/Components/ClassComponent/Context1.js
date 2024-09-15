import React, { Component } from "react";
import Context2 from "./Context2";

class Context1 extends Component {
    render(){
        return(
            <div> 

                <h2> THis is First Context</h2>
                <Context2/>
            </div>
           
        )
    }
}

export default Context1 ;