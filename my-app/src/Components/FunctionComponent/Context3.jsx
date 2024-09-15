import React, { useContext } from "react";
import Context4 from "./Context4";
import { ContextHook } from "../../App";

function Context3 () {

    const hook = useContext(ContextHook)
    return(
         <div>
        
        <h3>Context 3 -----{hook}</h3>
        <Context4/>
        </div>
    )
}

export default Context3;