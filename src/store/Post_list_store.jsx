import { Children, createContext, useReducer } from "react";
import Post from "../components/Post";

export const PostListContext = createContext({
    PostList: [],
    addPost: () => {},
    addInitialPost: () => {},
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

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        []
    );

    const addPost = (userId, postTitle, postContent, postDate, postTime, postImage, postReactions, postTags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Math.floor(Math.random() * 1000000),
                userId,
                title: postTitle,
                content: postContent,
                date: postDate,
                time: postTime,
                image: postImage,
                reactions: {
                    totalViews: postReactions,
                    like: 0,
                    love: 0,
                    comment: 0,
                    share: 0,
                },
                tags: postTags,
            }
        });
    };


    const addInitialPost = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload:{
            posts,
            }
        });
    };
    
    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    return (
    <PostListContext.Provider value={
        {postList, addPost, addInitialPost, deletePost,}
    }>
        {children}
    </PostListContext.Provider>
    );
};



export default PostListProvider;