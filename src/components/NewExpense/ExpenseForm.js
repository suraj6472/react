import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm() {
    // approach one
    const [ enteredTitle, setEnteredTitle ] = useState('')
    const [ enteredAmount, setEnteredAmount ] = useState('')
    const [ enteredDate, setEnteredDate ] = useState('')

    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // approach two
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    // const titleChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     })
    // }

    // Note when we are dependent on previous value for updating a state 
    // then below modification in handler should be kept in mind to avoid any mis-behavior
    // as react schedule the state update 

    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value }
    //     })
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        console.log(expenseData);
    }
    

    return (
        <form onSubmit={ submitHandler }>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={ enteredTitle } onChange={ titleChangeHandler } />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={ enteredAmount } min="0.1" step="0.1" onChange={ amountChangeHandler } />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={ enteredDate } onChange={ dateChangeHandler } />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;