import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext)
  const addItemHandler = (amount) => {
    const item = {
      amount: amount,
      price: props.price,
      name: props.name,
      id: props.id,
      description: props.description
    }
    cartCtx.addItem(item)
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddAmount={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
