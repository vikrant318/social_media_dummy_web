import { useRef , useContext, useState } from "react";
import { PostListContext } from "../store/Post_list_store";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/postsApi";

const CreatePost = () => {

    const { addPost } = useContext(PostListContext);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postContentElement = useRef();
    const postDateElement = useRef();
    const postTimeElement = useRef();
    const postImageElement = useRef();
    const postReactionsElement = useRef();
    const postTagsElement = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postContent = postContentElement.current.value;
        const postDate = postDateElement.current.value;
        const postTime = postTimeElement.current.value;
        const imageFile = postImageElement.current.files?.[0];
        const postImage = imageFile ? URL.createObjectURL(imageFile) : "";
        const postReactions = parseInt(postReactionsElement.current.value || "0", 10);
        const postTags = postTagsElement.current.value
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean);

        try {
            const data = await createPost({
                userId: userId,
                title: postTitle,
                body: postContent,
                date: postDate,
                time: postTime,
                image: postImage,
                reactions: postReactions,
                tags: postTags,
            });

            addPost(data);
            userIdElement.current.value = "";
            postTitleElement.current.value = "";
            postContentElement.current.value = "";
            postDateElement.current.value = "";
            postTimeElement.current.value = "";
            postImageElement.current.value = "";
            postReactionsElement.current.value = "";
            postTagsElement.current.value = "";
            navigate("/");
        } catch (error) {
            console.error("Failed to create post:", error);
        } finally {
            setIsSubmitting(false);
        }
};

    return (
        <>
        <form className="create_post" onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter your <i>User ID</i> here</label>
                <input type="text" 
                ref = {userIdElement}
                className="form-control" id="userId" placeholder="Enter your user ID"/>
            </div>

            <div className="mb-3">
                <label htmlFor="postTitle" className="form-label">Post Title</label>
                <input type="text" 
                ref = {postTitleElement}
                className="form-control" id="postTitle" placeholder="How are you felling today...."/>
            </div>


            <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Post Content</label>
                <textarea type="text" 
                ref = {postContentElement}
                rows={4}
                className="form-control" id="postContent" placeholder="Write your post content here..."></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="postDate" className="form-label">Post Date</label>
                <input type="date" 
                ref = {postDateElement}
                className="form-control" id="postDate"/>
            </div>

            <div className="mb-3">
                <label htmlFor="postTime" className="form-label">Post Time</label>
                <input type="time"
                ref = {postTimeElement}
                className="form-control" id="postTime"/>
            </div>

            <div className="mb-3">  
                <label htmlFor="postImage" className="form-label">Post Image</label>
                <input type="file" 
                ref = {postImageElement}
                className="form-control" id="postImage"/>
            </div>

            <div className="mb-3">
                <label htmlFor="postVideo" className="form-label">Reactions</label>
                <input type="number" 
                ref = {postReactionsElement}
                className="form-control" id="postReactions" placeholder="Enter number of reactions"/>
            </div>

            <div className="mb-3">
                <label htmlFor="postTags" className="form-label">Enter Post Tags</label>
                <input type="text" 
                ref = {postTagsElement} className="form-control" id="postTags" placeholder="Enter post tags separated by commas"/>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Post"}
            </button>       
        </form>
        </>
    );
};

export default CreatePost;
