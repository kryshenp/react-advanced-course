import React from "react";

import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <li>
      <Card className="user-item">
        <div className="user-item__description">
          {props.name} ({props.age} years old)
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
