import React, { useState } from "react";

import NewUser from "./components/NewUser/NewUser";
import ErrorModal from "./components/UI/ErrorModal";
import Users from "./components/Users/Users";

const DUMMY_USERS = [
  {
    id: "user1",
    name: "Pavlo",
    age: 33,
  },
  {
    id: "user2",
    name: "Dmytro",
    age: 29,
  },
];

const App = () => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("fsf");

  const addUserHandler = (user) => {
    if (user.age < 0) {
      setShowModal(true);
      setModalText("Please enter a valid age (>0 ).");
    } else if (user.name === "" || !user.age === "") {
      setShowModal(true);
      setModalText("Please enter a valid name and age (non-empty values).");
    } else {
      setUsers((prevUsers) => {
        return [user, ...prevUsers];
      });
    }
  };

  const hideModalHandler = () => setShowModal(false);

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
      {showModal && <ErrorModal onHideModal={hideModalHandler} modalText={modalText} />}
    </div>
  );
};

export default App;
