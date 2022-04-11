import React from "react";

import Card from "../UI/Card";
import UserList from "./UserList";

import "./Users.css";

const Users = (props) => {
  return (
    <div>
      <Card className="users">
        <UserList items={props.items} />
      </Card>
    </div>
  );
};

export default Users;
