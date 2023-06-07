import React from 'react';
import UserForm from "./components/UserForm/UserForm";
import User from "./components/User/User";
import './App.css';

const App = () => {
  return (
    <div className="App d-flex justify-content-around container-fluid">
        <div className="user-form">
            <UserForm/>
        </div>
        <div className="users">
            <User/>
        </div>
    </div>
  );
}

export default App;
