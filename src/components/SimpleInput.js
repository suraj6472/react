import React, { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true)

  const inputNameRef = useRef();

  const onInputHandler = event => {
    setEnteredName(event.target.value)
  }

  const onSubmitHandler = event => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setIsEnteredNameValid(false)
      return;
    }
    setIsEnteredNameValid(true)

    console.log(enteredName)

    const enteredNameValue = inputNameRef.current.value
    console.log(enteredNameValue)
  }

  const nameInputClasses = isEnteredNameValid ? 'form-control' : 'form-control invalid'

  return (
    <form onClick={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onInputHandler} ref={inputNameRef} />
        {!isEnteredNameValid && <p className='error-text'>Name field should not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
