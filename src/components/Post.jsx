import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/Post_list_store";
const Post = ({ post }) => {

    const { deletePost } = useContext(PostListContext);
    const reactions = post.reactions || { totalViews: 0, like: 0, love: 0, comment: 0, share: 0 };
    const tags = Array.isArray(post.tags) ? post.tags : [];

    return (
        <>
        <div className="card post_container" style={{width: "16rem"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                    <AiFillDelete />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.image && (
                    <img src={post.image} className="img-fluid rounded mb-2" alt={post.title} />
                )}
                <p className="card-text"><small className="text-muted">Posted on {post.date} at {post.time}</small></p>
                <p className="card-text"><small className="text-muted">Views: {reactions.totalViews}</small></p>
                <p className="card-text">
                <span className="badge bg-primary">{reactions.like} Likes</span>
                <span className="badge bg-danger">{reactions.love} Loves</span>
                <span className="badge bg-secondary">{reactions.comment} Comments</span>
                <span className="badge bg-info">{reactions.share} Shares</span>
                </p>
                {tags.map((tag) => (
                    <span key={tag} className="badge bg-success hashtag">{tag}</span>
                ))}
                
            </div>
        </div>
        </>
    )
}

export default Post;
