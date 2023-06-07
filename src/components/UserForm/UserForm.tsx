import React from 'react';

const UserForm = () => {
    const onSubmitForm = (e:React.FormEvent) => {
        e.preventDefault();

        console.log("working")
    }
    return (
        <>
            <form onSubmit={onSubmitForm}>
                <h4>Please enter the form</h4>
                <div className="name form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                    />
                </div>
                <div className="email form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                    />
                </div>
                <div className="active">
                    <label htmlFor="active">Do you active user?  (check if yes)</label>
                    <input
                        type="checkbox"
                        name="active"
                        id="active"
                    />
                </div>
                <div className="role">
                    <label htmlFor="name"></label>
                    <select className="form-select">
                        <option>User</option>
                        <option>Editor</option>
                        <option>Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Send information</button>
            </form>
        </>
    );
};

export default UserForm;