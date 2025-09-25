import { useState } from "react"; //firsthook, useState
export default function Counter(){
    //we defined the variable and setter functions then we assigned useState to them
    //and and add the initial value for the variable as an argument for the useState Function
    let initialState = 200;
    const [counter, setCounter] = useState(initialState); //0 is the starting number

    /*
    if (counter < -5 || counter > 5)
    {setCounter(0)}
    */
    return <div>
        <p>counter with reset button</p>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter+ 1)}>add to count: {counter}</button>
        <button onClick={() => setCounter(counter- 1)}>reduce count: {counter}</button>
        <button onClick={() => setCounter(0)}>reset</button>
    </div>
}