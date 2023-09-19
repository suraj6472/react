import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm() {
    // approach one
    const [ enteredTitle, setEnteredTitle ] = useState('')
    const [ enteredAmount, setEnteredAmount ] = useState('')
    const [ enteredDate, setEnteredDate ] = useState('')

    // const titleChangeHandler = (event) => {
    //    setEnteredTitle(event.target.value);
    // }
    // const amountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value);
    // }
    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value);
    // }

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

    // approach 3

    // we can also create a single handler function to set input value for each field
    // And by doing so we can avoid seprate handler function of each field

    const inputChangeHandler = (indentifier, value) => {
        if(indentifier == 'title') {
            setEnteredTitle(value);
        } else if(indentifier == 'date') {
            setEnteredDate(value);
        } else {
            setEnteredAmount(value);
        }
    }
    

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={ (event) => inputChangeHandler('title', event.target.value) }/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.1" step="0.1" onChange={ (event) => inputChangeHandler('amount', event.target.value) }/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={ (event) => inputChangeHandler('date', event.target.value) }/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;