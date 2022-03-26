import React from "react";
// import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//  STATELESS COMPONENT (Presentational/dumb)
// doesn't have any internal state
// it's just here to present some data

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log(`ExpenseItem ${title} evaluated by React`);
  // let title  = props.title;
  // const clickHandler = () => {
  //   // title = "Updated";
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={() => console.log("Clicked!")}>Change Title</button> */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
