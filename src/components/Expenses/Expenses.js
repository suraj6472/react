import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expense = ({ expenses }) => {
  const [selectedValue, setSelectedValue] = useState("2021");

  const filterSelectHandler = (fiterValue) => {
    setSelectedValue(fiterValue);
  };

  const filteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedValue
  );

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedValue={selectedValue}
          onChangeYear={filterSelectHandler}
        />
      </div>
      <ExpenseList items={filteredExpense}></ExpenseList>
    </Card>
  );
};

export default Expense;
