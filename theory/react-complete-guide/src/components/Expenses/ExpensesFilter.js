import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const allYears = [2022, 2021, 2020, 2019];

  const yearsList = allYears.map((year) => {
    return <option key={year}>{year}</option>;
  });

  const yearChangeHandler = (event) => {
    props.onChangeYearFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-gilter__control">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          {yearsList}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
