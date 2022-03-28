import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

// STATEFUL component, manages state and this state is spread out and distributed through PROPS
// here we manage the filter state and then we pass the  selectedYear though props back to ExpenseFilter component

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeDataHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("In Expenses.js", selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        {/* this is a controlled component */}
        <ExpensesFilter selected={filteredYear} onChangeYearFilter={yearChangeDataHandler} /> {/* this is a controlled component */}
        {/* {filteredExpenses.length === 0 && <p>No expeneses found!</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expeneses found</p>
        ) : (
          filteredExpenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)
        )} */}
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} /> */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
