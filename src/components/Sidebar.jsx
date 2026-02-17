import { Link, NavLink } from "react-router-dom";

const navItems = [
    { label: "Home", to: "/" },
    { label: "Create Post", to: "/create-post" },
    { label: "My Posts", to: "/my-posts" },
    { label: "Friends", to: "/friends" },
    { label: "Settings", to: "/settings" },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const handleNavClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar ${isSidebarOpen ? "sidebar-open" : ""}`} >
            <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
                <span className="menu-prefix-space" aria-hidden="true"></span>
                <span className="fs-5 mb-0">Menu</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.to}>
                        <NavLink
                            to={item.to}
                            end={item.to === "/"}
                            onClick={handleNavClick}
                            className={({ isActive }) => `nav-link ${isActive ? "text-white active" : "text-white"}`}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="dropdown">
                <Link to="/settings" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.W3aNfKBxYVwiphPnIwW56QHaEo?pid=Api&P=0&h=180" width="32" height="32" className="rounded-circle me-2" alt="Profile" />
                    <strong>Vikrant</strong>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><Link className="dropdown-item" to="/new-project">New project...</Link></li>
                    <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                    <li><Link className="dropdown-item" to="/sign-out">Sign out</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
