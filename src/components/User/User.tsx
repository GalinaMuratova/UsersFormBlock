import React from 'react';
import UserItem from "./UserItem";
// interface IUser {
//     name: string,
//     email:string,
//     active:boolean,
//     role:string
// }
// :React.FC<IUser>
const User= () => {
    return (
        <>
            <UserItem/>
            <UserItem/>
            <UserItem/>
        </>
    );
};

export default User;