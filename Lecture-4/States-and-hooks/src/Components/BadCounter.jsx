
//this is not the correct way to store, manipulate, and re-render components
export default function BadCounter(){
    let count = 0;
    return (
        <div>
            <p>non-functional counter</p>
            <p>Count: {count}</p>
            <button onClick={( ) => {
                count++;
                console.log(count);
            }}>add to counter</button>
        </div>
    )
}