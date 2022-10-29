import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("ALL");

  const onYearFilterHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (enteredYear === "ALL") {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === enteredYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onYearFilter={onYearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
