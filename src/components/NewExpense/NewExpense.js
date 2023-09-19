import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelEditingForm()
  };

  const startEditingForm = () => {
    setIsEditing(true)
  }

  const cancelEditingForm = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditingForm}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={cancelEditingForm} />}
    </div>
  );
}

export default NewExpense;
