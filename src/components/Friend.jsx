const Friend = ({ name, role, mutual, status, image }) => {
    return (
        <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
                <img
                    src={image}
                    alt={name}
                    className="rounded-circle"
                    width="56"
                    height="56"
                />
                <div className="flex-grow-1">
                    <h6 className="mb-1">{name}</h6>
                    <p className="mb-1 text-muted small">{role}</p>
                    <small className="text-secondary">{mutual} mutual friends</small>
                </div>
                <span className={`badge ${status === "Online" ? "text-bg-success" : "text-bg-secondary"}`}>
                    {status}
                </span>
            </div>
        </div>
    );
};

export default Friend;
