import React from 'react';
import UserItem from "./UserItem";
import {IUser} from "../../types";

interface IUserProps {
    intelligence: IUser[];
}
const User: React.FC<IUserProps> = ({intelligence}) => {
    return (
        <>
            <h3 className="text-center">Users:</h3>
            {intelligence.map((info) => (
                <UserItem key={info.id} information={info}/>
            ))}
        </>
    );
};

export default User;