import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // as this filterInfoText is dependent on filteredYear.
  // we can handle the filterInfoText value based on filteredYear value
  // as whole component re-executed when state changes so this will
  // automatically be evalucated.
  // NOTE that take out the logic outside of the handler.
  
  let filterInfoText = "2019, 2021 & 2022";
  if (filteredYear == 2019) {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear == 2021) {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filteredYear == 2022) {
    filterInfoText = "2019, 2021 & 2020";
  }

  const filterSelectHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          filteredYear={filteredYear}
          onChangeYear={filterSelectHandler}
        />
      </div>
      <p>Data for year {filterInfoText} are hidden</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};

export default Expense;
