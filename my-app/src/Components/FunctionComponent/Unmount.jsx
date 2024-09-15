import React, { useEffect, useState } from "react";

function Unmount () {

    const [count,setCounter]= useState(0)
    useEffect ( () => {

        const counter = setInterval(() => {
            setCounter(prev => prev + 1)
        },1000)
        return () => {
            clearInterval(counter)
        }
    },[])
    return (
        <div>
 <h2> Counter = {count}</h2>
        </div>
    )
}
export default Unmount;