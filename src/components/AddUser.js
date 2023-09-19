import React, { useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
const initialErrorStatus = {
  username: false,
  age: false,
};
const initialInputState = {
  username: "",
  age: "",
};
const AddUser = (props) => {
  const [error, setError] = useState(false);
  const [errorEle, setErrorEle] = useState(initialErrorStatus);
  const resetErrorHandler = () => {
    setError(false);
  };
  const [userInput, setUserInput] = useState(initialInputState);

  const userInputHandler = (name, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let hasError = false;
    if (!userInput.username.length) {
      setError("Please enter username");
      hasError = true;
      setErrorEle((prevState) => {
        return { ...prevState, username: true };
      });
    } else if (!userInput.age.length) {
      setError("Please enter age");
      hasError = true;
      setErrorEle({ username: false, age: true });
    }
    if (hasError) {
      return;
    } else {
      setErrorEle(initialErrorStatus);
      setUserInput(initialInputState);
    }
    props.onAddUser(userInput);
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={userInput.username}
            style={{ borderColor: errorEle.username ? "red" : "unset" }}
            onChange={(event) =>
              userInputHandler("username", event.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label>Age(Years)</label>
          <input
            type="text"
            id="age"
            value={userInput.age}
            style={{ borderColor: errorEle.age ? "red" : "unset" }}
            onChange={(event) => userInputHandler("age", event.target.value)}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
      {error && <ErrorModal error={error} onErrorReset={resetErrorHandler} />}
    </div>
  );
};

export default AddUser;
