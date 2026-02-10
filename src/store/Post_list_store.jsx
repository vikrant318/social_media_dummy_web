import { Children, createContext, useReducer } from "react";
import Post from "../components/Post";

export const PostListContext = createContext({
    PostList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {

    let newPostList = [...currPostList];

    if (action.type === "DELETE_POST") {
        newPostList = newPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "ADD_POST") {
        newPostList.unshift(action.payload);
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(
        postListReducer, DEFULT_POST_LIST
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
        {postList, addPost,deletePost,}
    }>
        {children}
    </PostListContext.Provider>
    );
};

const DEFULT_POST_LIST = [
    {
        id: 1,
        title: "My First Post",
        content: "This is the content of my first post.",
        reactions: {
            totalViews: 100,
            like: 10,
            love: 5,
            comment: 2,
            share: 1,
        },
        userId: 'fgfeawf-1234-5678-90ab-cdef12345678',
        date: "23/06/2024",
        time: "10:30 AM",
        tags: ['#firstpost', '#hello', '#react', '#socialmedia'],
    },
    {
        id: 2,
        title: "Another Day, Another Post",
        content: "Just sharing some thoughts on this beautiful day.",
        reactions: {
            totalViews: 150,
            like: 20,
            love: 15,
            comment: 5,
            share: 3,
        },
        userId: 'fgfeawf-1234-5678-90ab-cdef12555678',
        date: "24/06/2024",
        time: "2:45 PM",
        tags: ['#dailythoughts', '#beautifulday', '#react', '#socialmedia'],
    }
];

export default PostListProvider;