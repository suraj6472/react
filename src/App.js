import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // this <> </> may not work in some project depending on project setup
    // <>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </>

    // this <React.Fragment> will always work
    // <React.Fragment>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </React.Fragment>

    // // this <Fragment> is same as <React.Fragment>. we can use it if import Fragment explicitly
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
