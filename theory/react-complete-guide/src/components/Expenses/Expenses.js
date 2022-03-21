import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const yearChangeDataHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log("In Expenses.js", selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChangeYearFilter={yearChangeDataHandler} />
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      </Card>
    </div>
  );
};

export default Expenses;
