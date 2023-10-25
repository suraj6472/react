import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartCTX = useContext(CartContext);
  const userProgressCTX = useContext(UserProgressContext);

  const cartTotal = cartCTX.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const hideCheckoutHandler = () => {
    userProgressCTX.hideCheckout();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCTX.items,
          customer: customerData,
        },
      }),
    });
  };

  return (
    <Modal
      open={userProgressCTX.progress === "checkout"}
      onClose={
        userProgressCTX.progress === "checkout" ? hideCheckoutHandler : null
      }
    >
      <form onSubmit={submitHandler}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="type" id="postal-code" />
          <Input label="City" type="type" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={hideCheckoutHandler}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
