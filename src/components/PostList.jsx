import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post_list_store";

const PostList = () => {

    const { postList } = useContext(PostListContext);
    
    return (
        <>
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;