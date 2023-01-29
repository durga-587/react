import React from "react";
import { useState } from "react";
function Para(promps){
    const[count,setCount]=useState(0);
    let handleClick=()=>{
        console.log("clicked....");
        setCount(count+1);
    };
    return(
        <div>
        <p>{promps.example}</p>
        <h2>Hook useState...
        </h2>
        <p>Here I make use of useState hook to create a below button.</p>
    <button onClick={handleClick}>clicked{count}times</button>
    </div>
   );

};

export default Para;