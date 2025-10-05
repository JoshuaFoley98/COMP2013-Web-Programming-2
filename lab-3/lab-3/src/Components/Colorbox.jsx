import { useState } from "react";

function getRandomNumber(squares){
    return Math.floor(Math.random() * squares)
}

export default function ColorBox( {color, index}){
    const squares = 25;
    const [randomNumber, setRandomNumber] = useState(getRandomNumber(squares))
   return( 
   <div 
        className="ColorBox" 
        key={index} 
        
        onClick={() => setRandomNumber(getRandomNumber(squares))}
        style={{backgroundColor: color[randomNumber]}}
        ></div> 
    )
}