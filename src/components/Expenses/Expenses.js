import React, { useState } from "react";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

const Expense = ({ expenses }) => {

    const [ selectedValue, setSelectedValue ] = useState('2021')

    const filterSelectHandler = (fiterValue) => {
        setSelectedValue(fiterValue)
    }

    return (
        <Card className='expenses'>
            <div>
                <ExpensesFilter selectedValue={selectedValue} onChangeYear={ filterSelectHandler } />
            </div>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        </Card>
    );
}

export default Expense;