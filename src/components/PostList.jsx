import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post_list_store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";


const PostList = () => {

    const { postList, addInitialPost } = useContext(PostListContext);

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
            .then((response) => response.json())
            .then((data) => {
                addInitialPost(data.posts);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch posts:", error);
                }
            })
            .finally(() => {
                if (!signal.aborted) {
                    setFetching(false);
                }
            });

        return () => {
            controller.abort();
        };
    }, [addInitialPost]); // Runs on mount and handles abort cleanly
        
    
    
    return (
        <>
            {fetching && <LoadingSpinner />}
            {
                !fetching &&
                postList.length === 0 && <WelcomeMessage />
            }
            { 
                !fetching &&
                postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;
