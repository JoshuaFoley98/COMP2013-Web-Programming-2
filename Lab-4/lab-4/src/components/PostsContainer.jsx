import PostCard from "./PostCard";
export default function PostsContainer({posts, data}){

    return <div>
        {posts.map((item, index) => (
            <PostCard {...item} key= {index} />
        ))}
        {data.map((item, index) => (
            <PostCard {...item} key= {index} />
        ))}
        <br />
    </div>
    
}

//posts container is:
/*
presentational compoenent serving as the main container for
all postcard components
    try to displau them in descending order so new posts appear first

*/