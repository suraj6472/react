import React, { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')

  const inputNameRef = useRef();

  const onInputHandler = event => {
    setEnteredName(event.target.value)
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    // console.log(enteredName)
    const enteredNameValue = inputNameRef.current.value
    console.log(enteredNameValue)
  }

  return (
    <form onClick={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onInputHandler} ref={inputNameRef} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
