import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {

  const [isValidInput, setIsValidInput] = useState(true)

  const submitFormHandler = (event) => {
    event.preventDefault();
    const amount = inputRef.current.value
    const amountNumber = +amount;
    if(amount.trim().length < 1 || amountNumber < 1 || amountNumber > 5) {
      setIsValidInput(false)
      return;
    }
    props.onAddAmount(amountNumber)
  }

  const inputRef = useRef();

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValidInput && <p>Please enter a correct value</p>}
    </form>
  );
};

export default MealItemForm;
