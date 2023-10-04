import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const addActionHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }

  const removeActionHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem name={item.name} key={item.id} price={item.price} amount={item.amount} onAdd={addActionHandler.bind(null, item)} onRemove={removeActionHandler.bind(null, item.id)}></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onCartClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCartClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
