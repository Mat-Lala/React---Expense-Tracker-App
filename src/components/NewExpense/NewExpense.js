import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);

  };

  const addExpenseButtonHandler = (event) => {
    setShowForm(true);
  };

  const OnCancelHandler = () => {
    setShowForm(false);
  }

  
  return (
    <div className="new-expense">
      {!showForm && (<button onClick={addExpenseButtonHandler}> Add new Expense </button>)}
      {showForm && (<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={OnCancelHandler}/>)}
    </div>
    
  );
};

export default NewExpense;
