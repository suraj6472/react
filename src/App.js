import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    { id: "323", username: "Suraj", age: 30 },
    { id: "23", username: "Rajesh", age: 25 },
  ]);

  const AddUserHandler = (user) => {
    user.id = Math.random().toString();
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      {users.length == 0 && <p>No user added yet</p>}
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
