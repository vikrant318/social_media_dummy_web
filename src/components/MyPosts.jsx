const MyPosts = () => {
    const posts = [
        { id: 1, title: "Morning Workout", content: "Completed a 5km run and feeling great.", time: "2 hours ago", likes: 24 },
        { id: 2, title: "Learning React", content: "Built tab navigation with clean component structure.", time: "Yesterday", likes: 41 },
        { id: 3, title: "Weekend Plan", content: "Going for a short trip with friends this weekend.", time: "2 days ago", likes: 18 },
    ];

    return (
        <section className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">My Posts</h3>
                <button type="button" className="btn btn-primary">Create New</button>
            </div>
            <div className="row g-3">
                {posts.map((post) => (
                    <div className="col-12 col-md-6 col-xl-4" key={post.id}>
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text text-muted">{post.content}</p>
                            </div>
                            <div className="card-footer bg-white border-0 d-flex justify-content-between">
                                <small className="text-secondary">{post.time}</small>
                                <span className="badge text-bg-light">{post.likes} likes</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyPosts;
