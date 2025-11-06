export default function PostForm({
    newPost={title:"", body:""},
    handleAddPost,
    handleOnChange
}){
    return <div className="post-form">
        <form action="">
        <label>header: </label>
        <input type="text" name="title" value = {newPost.title} onChange={handleOnChange} />
        <br />
        <label>body: </label>
        <input type = "text" name="body" value= {newPost.body} onChange={handleOnChange}/>
        <br />
        <button onClick={handleAddPost}>Add Post</button>
        </form>
    </div>
}


//post form is:
/*
    presentational component displaying form
        containing:
            two text inputs
                one for title
                one for the body
                submit button

*/