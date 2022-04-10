import React from "react";

import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <ul>
      {props.items.map((user) => (
        <UserItem name={user.name} age={user.age} key={user.id} />
      ))}
    </ul>
  );
};

export default UserList;
