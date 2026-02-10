const Sidebar = ({ selectedTab, setSelectedTab, isSidebarOpen, setIsSidebarOpen }) => {

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
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
                <li className="nav-item" onClick={() => { handleTabClick("Home") }}>
                    <a href="#" className={`nav-link ${selectedTab === "Home" ? "text-white active" : "text-white"}`} aria-current="page">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Home
                    </a>
                </li>
                <li className="nav-item" onClick={() => { handleTabClick("Create Post") }}>
                    <a href="#" className={`nav-link ${selectedTab === "Create Post" ? "text-white active" : "text-white"}`}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Create Post
                    </a>
                </li>
                <li className="nav-item" onClick={() => { handleTabClick("My Posts") }}>
                    <a href="#" className={`nav-link ${selectedTab === "My Posts" ? "text-white active" : "text-white"}`}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                        My Posts
                    </a>
                </li>
                <li className="nav-item" onClick={() => { handleTabClick("Friends") }}>
                    <a href="#" className={`nav-link ${selectedTab === "Friends" ? "text-white active" : "text-white"}`}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                        Friends
                    </a>
                </li>
                <li className="nav-item" onClick={() => { handleTabClick("Settings") }}>
                    <a href="#" className={`nav-link ${selectedTab === "Settings" ? "text-white active" : "text-white"}`}>
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                        Settings
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" width="32" height="32" className="rounded-circle me-2" alt="Profile" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
