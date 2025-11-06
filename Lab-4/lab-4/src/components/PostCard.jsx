export default function PostCard({
    title,
    body,
}){

    return <div className="post-card">
        {/* header*/}
        <h2>{title}</h2>
        {/*body */}
        <p>{body}</p>
    </div>
}

//postCard is:
/*
a presentational component
    showing:
        one post
            containing:
            post title
            and post body
*/