import { useState } from "react";
export default function CounterWithLimits(){
    const upperLimit = 10;
    const lowerLimit = -10;
    const [counter, setcounter] = useState(0);
    return <div>
        <p>counter with limits</p>
        <p>counter: {counter}</p>
        <button onClick={() => counter < upperLimit && setcounter(counter + 1)}> counter with limit</button>
        <button onClick={() => counter > lowerLimit && setcounter(counter - 1)}> counter with limit</button>
    </div>
}