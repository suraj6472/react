import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expense = ({ expenses }) => {
  const [selectedValue, setSelectedValue] = useState("2021");

  const filterSelectHandler = (fiterValue) => {
    setSelectedValue(fiterValue);
  };

  const filteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear().toString() == selectedValue
  );

  let expenseContent = <p>No Expense Found.</p>;

  if (filteredExpense.length) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedValue={selectedValue}
          onChangeYear={filterSelectHandler}
        />
      </div>
      {/*  can be done like this - approach 2*/}
      {/* {filteredExpense.length == 0 && <p>No expense found</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      {/* end of approach 2 */}
      {expenseContent}
    </Card>
  );
};

export default Expense;
