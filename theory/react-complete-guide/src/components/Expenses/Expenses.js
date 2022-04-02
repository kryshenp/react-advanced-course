import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

// STATEFUL component, manages state and this state is spread out and distributed through PROPS
// here we manage the filter state and then we pass the  selectedYear though props back to ExpenseFilter component

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeDataHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        {/* this is a controlled component */}
        <ExpensesFilter selected={filteredYear} onChangeYearFilter={yearChangeDataHandler} /> {/* this is a controlled component */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
