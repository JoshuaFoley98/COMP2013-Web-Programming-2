import ColorBox from "./Colorbox";

export default function ColorBoxesContainer({colors}){
    return (
    <div className="ColorBoxesContainer">
        {colors.map((color,index) =>
        <ColorBox color={colors} index={index} /> )}
         </div>
    )
}

/* */