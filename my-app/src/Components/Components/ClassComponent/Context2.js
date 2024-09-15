import React, { Component } from "react";
import Context3 from "../Context3";
import { ContextConsumer } from "../Context/mainContext";

class Context2 extends Component {
    render(){
        return(
            <div> 
{/* 
                <h2> THis is second Context</h2> */}
                <Context3/>
            </div>
        )
    }
}

export default Context2 ;