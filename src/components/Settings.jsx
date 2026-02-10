const Settings = () => {
    return (
        <section className="container-fluid p-4">
            <h3 className="mb-4">Account Settings</h3>
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" defaultValue="Vikrant" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" defaultValue="vikrant@example.com" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter new password" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="visibility" className="form-label">Profile Visibility</label>
                            <select id="visibility" className="form-select" defaultValue="Public">
                                <option>Public</option>
                                <option>Friends Only</option>
                                <option>Private</option>
                            </select>
                        </div>
                        <div className="col-12 form-check mt-2 ms-2">
                            <input className="form-check-input" type="checkbox" id="notifications" defaultChecked />
                            <label className="form-check-label" htmlFor="notifications">
                                Enable email notifications
                            </label>
                        </div>
                        <div className="col-12 d-flex gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                            <button type="button" className="btn btn-outline-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Settings;
