import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import { fetchPosts } from "../api/postsApi";

export const PostListContext = createContext({
    PostList: [],
    fetching: false,
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {

    let newPostList = [...currPostList];

    if (action.type === "DELETE_POST") {
        newPostList = newPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "ADD_POST") {
        newPostList.unshift(action.payload);
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    }
    return newPostList;
};

const normalizeReactions = (reactions, views) => {
    if (typeof reactions === "number") {
        return {
            totalViews: Number.isFinite(views) ? views : reactions,
            like: reactions,
            love: 0,
            comment: 0,
            share: 0,
        };
    }

    const safeReactions = reactions && typeof reactions === "object" ? reactions : {};
    return {
        totalViews: safeReactions.totalViews ?? safeReactions.views ?? views ?? 0,
        like: safeReactions.like ?? safeReactions.likes ?? 0,
        love: safeReactions.love ?? 0,
        comment: safeReactions.comment ?? safeReactions.comments ?? 0,
        share: safeReactions.share ?? 0,
    };
};

const normalizePost = (post) => {
    const safePost = post && typeof post === "object" ? post : {};

    return {
        ...safePost,
        title: safePost.title ?? "Untitled",
        body: safePost.body ?? safePost.content ?? "",
        tags: Array.isArray(safePost.tags) ? safePost.tags : [],
        reactions: normalizeReactions(safePost.reactions, safePost.views),
        date: safePost.date ?? "",
        time: safePost.time ?? "",
        image: safePost.image ?? "",
    };
};

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        []
    );
    const [fetching, setFetching] = useState(false);     
    

    const addPost = useCallback((posts) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: normalizePost(posts),
        });
    }, []);


    const addInitialPost = useCallback((posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload:{
            posts: Array.isArray(posts) ? posts.map(normalizePost) : [],
            }
        });
    }, []);
    
    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    }, []);

    useEffect(() => {
        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetchPosts({ signal })
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
    <PostListContext.Provider value={
        {postList, addPost, deletePost, fetching}
    }>
        {children}
    </PostListContext.Provider>
    );
};



export default PostListProvider;
