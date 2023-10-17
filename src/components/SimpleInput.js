import React, { useState, useRef, useEffect } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const inputNameRef = useRef();

  const onInputHandler = event => {
    setEnteredName(event.target.value)
  }

  useEffect(() => {
    if(isEnteredNameValid) {
      console.log(isEnteredNameValid)
    }
  }, [isEnteredNameValid])

  const onSubmitHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true)
    if (enteredName.trim() === '') {
      setIsEnteredNameValid(false)
      return;
    }
    setIsEnteredNameValid(true)
    console.log(enteredName)

    const enteredNameValue = inputNameRef.current.value
    console.log(enteredNameValue)
  }

  const nameInputFieldIsInValid = !isEnteredNameValid && enteredNameTouched

  const nameInputClasses = nameInputFieldIsInValid ? 'form-control invalid' : 'form-control'

  return (
    <form onClick={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onInputHandler} ref={inputNameRef} />
        {nameInputFieldIsInValid && <p className='error-text'>Name field should not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
