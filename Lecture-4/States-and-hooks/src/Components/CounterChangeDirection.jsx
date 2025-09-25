import { useState } from "react";

let direction = true;


export default function UpDownCount(){
    
    const [counter, setcounter] = useState(0);


    return <div>
        <button onClick={() => direction = !direction}>direction change</button>
        <p>counter: {counter}</p>
        <button onClick={() => direction === true? setcounter(counter + 1): setcounter(counter - 1) }> counter: {counter}</button>
        
    </div>
}