import React,{useContext} from "react";
import { ContextHook } from "../../App";

function Context5 () {

    const hook = useContext(ContextHook)
    return(
         <div>
        
        <h4>Context 5 -----{hook}</h4>
        </div>
    )
}

export default Context5;