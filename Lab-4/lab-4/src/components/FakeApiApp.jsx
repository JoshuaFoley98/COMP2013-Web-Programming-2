import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts"
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
    })

    
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData()
        
    }, [])
    
    //let's grab the posts
    const fetchData = async() => {
        const response = await fetch(URL)
        const postData = await response.json()
        setData(postData)
        //setPosts(data)
        console.log(data)
        setLoading(false)
    }
    //handle add post
    const handleAddPost = (e) =>{
        e.preventDefault()


        if (newPost.body == "" || newPost.title == "") {
            alert("posts need both titles and bodies")
        } else {
            setPosts((prevPosts) => {
                return [newPost, ...prevPosts];
            })
            setNewPost({
                title:"",
                body:""
            })
        }
    }

    const handleOnChange = (e) => {
        setNewPost((prevPost) => {
            return {
                ...prevPost, 
                [e.target.name]:e.target.value
            }
        })
    }
    return <div>
        {loading && <h1>LOADING</h1>}
        <PostForm handleOnChange={handleOnChange} handleAddPost={handleAddPost} newPost={newPost}/>
        <PostsContainer posts={posts} data={data}/>
    </div>
}


//fake api app:
/*
contains three states
    data: an array state that will hold all the data grabbed by the api
    (check)loading: a bool that will show a loading sign if the data is still loading
    (check)newPost an object that will store a new post

    (check) the url of the fake api is: https://jsonplaceholder.typicode.com/posts
    and it will also contain the handlers needed for postForm
        (will get back about that)
*/