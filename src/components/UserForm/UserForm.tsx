import React, {useState} from 'react';
import {IUserMutation} from "../../types";

interface IProps {
    onSubmit: (newInfo: { role: string; name: string; active: boolean; id: number; email: string }) => void;
}
const UserForm: React.FC<IProps> = ({onSubmit}) => {
    const [info, setInfo] = useState<IUserMutation>({
        name: '',
        email: '',
        active: false,
        role: ''
    });

    const infoChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setInfo(prevState => ({
            ...prevState,
            [name]:value,
        }))
    };
    const onSubmitForm = (e:React.FormEvent) => {
        e.preventDefault();

        onSubmit( {
            id: Math.floor(Math.random() * 999999999),
            ...info
        });

        console.log(info);
    };

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
                        value={info.name}
                        onChange={infoChange}
                    />
                </div>
                <div className="email form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={info.email}
                        onChange={infoChange}
                    />
                </div>
                <div className="active">
                    <label htmlFor="active">Do you active user? (check if yes)</label>
                    <input
                        type="checkbox"
                        name="active"
                        id="active"
                        checked={info.active}
                        onChange={(e) => setInfo((prevState) => ({...prevState, active: e.target.checked}))}
                    />
                </div>
                <div className="role">
                    <label htmlFor="name"></label>
                    <select
                        className="form-select"
                        name="role"
                        value={info.role}
                        onChange={infoChange}
                    >
                        <option value="" disabled defaultValue="">Select your role</option>
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Send information</button>
            </form>
        </>
    );
};

export default UserForm;