import React, { useState } from "react";

import Button from "../UI/Button";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      age: enteredAge,
    };

    props.onSaveUserData(userData);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input type="text" onChange={userNameChangeHandler} value={enteredName} />
        </div>
        <div className="new-user__control">
          <label>Age (years)</label>
          <input type="number" step="1" onChange={userAgeChangeHandler} value={enteredAge} />
        </div>
      </div>
      <div className="new-user__actions">
        <Button label="Add User" type="submit" />
      </div>
    </form>
  );
};

export default UserForm;
