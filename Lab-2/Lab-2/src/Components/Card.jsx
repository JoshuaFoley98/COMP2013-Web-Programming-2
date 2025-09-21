export default function Card(props){
    return <div className="card-component">
        <img src={props.image} alt="" width="100px"/>
        <h2>{props.location}</h2>
        <p>{props.name}</p>
        {(props.rating > 4.0) ? <p className="high-rating">{props.rating} &#8902;</p> : <p className="low-rating">{props.rating} &#8902;</p>}
        <p>{props.price} /night</p>

    </div>
}


