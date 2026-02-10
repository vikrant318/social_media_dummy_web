import Friend from "./Friend";

const Friends = () => {
    const friends = [
        {
            id: 1,
            name: "Aarav Singh",
            role: "Frontend Developer",
            mutual: 12,
            status: "Online",
            image: "https://i.pravatar.cc/80?img=12",
        },
        {
            id: 2,
            name: "Neha Sharma",
            role: "UI Designer",
            mutual: 8,
            status: "Offline",
            image: "https://i.pravatar.cc/80?img=32",
        },
        {
            id: 3,
            name: "Rohan Mehta",
            role: "Product Manager",
            mutual: 20,
            status: "Online",
            image: "https://i.pravatar.cc/80?img=22",
        },
    ];

    return (
        <section className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">Friends</h3>
                <button type="button" className="btn btn-outline-primary">Find Friends</button>
            </div>
            <div className="row g-3">
                {friends.map((friend) => (
                    <div className="col-12 col-lg-6" key={friend.id}>
                        <Friend
                            name={friend.name}
                            role={friend.role}
                            mutual={friend.mutual}
                            status={friend.status}
                            image={friend.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Friends;
