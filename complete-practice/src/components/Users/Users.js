import React from "react";

import Card from "../UI/Card";
import UserList from "./UserList";

const Users = (props) => {
  return (
    <div>
      <Card>
        <UserList items={props.items} />
      </Card>
    </div>
  );
};

export default Users;
