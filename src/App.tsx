import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import User from "./components/User/User";
import './App.css';
import {IUser} from "./types";

const App = () => {
  const [information, setInformation] = useState<IUser[]>([]);

  const addInfo = (newInformation: IUser) => {
      setInformation(prevState => [...prevState, newInformation]);
  };
  return (
    <div className="App row d-flex justify-content-around container-fluid">
        <div className="user-form col-5 p-2">
            <UserForm onSubmit={addInfo}/>
        </div>
        <div className="users col-5 p-2">
            <User intelligence={information}/>
        </div>
    </div>
  );
}

export default App;
