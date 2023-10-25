import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import CartItem from "./CartItem";

export default function Cart() {
  const userProgressCTX = useContext(UserProgressContext);
  const cartCTX = useContext(CartContext);

  const totalAmount = cartCTX.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const hideCartHandler = () => {
    userProgressCTX.hideCart();
  };

  const showCheckoutHandler = () => {
    userProgressCTX.showCheckout();
  };

  return (
    <Modal className="cart" open={userProgressCTX.progress === "cart"} onClose={userProgressCTX.progress === "cart" ? hideCartHandler : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCTX.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onDecrease={() => cartCTX.removeItem(item.id)}
            onIncrease={() => cartCTX.addItem(item)}
          />
        ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(totalAmount)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCartHandler}>
          Close
        </Button>
        {cartCTX.items.length > 0 && (
          <Button onClick={showCheckoutHandler}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
