import React from "react";

import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem name={user.name} age={user.age} key={user.id} />
      ))}
    </ul>
  );
};

export default UserList;
