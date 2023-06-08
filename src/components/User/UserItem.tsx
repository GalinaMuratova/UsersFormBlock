import React from 'react';
import {IUser} from "../../types";

interface IUserItemProps {
    information: IUser;
}
const UserItem: React.FC<IUserItemProps> = ({information}) => {
    let active: string = '';
    information.active ? active = 'active' : active = 'inactive';

    return (
        <div className="card card-style mx-auto mb-2 p-3">
            <h5>{information.name}</h5>
            <p>Email: {information.email}</p>
            <p>Activity: {active}</p>
            <p>Role: {information.role}</p>
        </div>
    );
};

export default UserItem;