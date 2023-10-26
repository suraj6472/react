import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
}
export default function Checkout() {
  const cartCTX = useContext(CartContext);
  const userProgressCTX = useContext(UserProgressContext);

  const { data, isLoading: isSending, error, clearData, sendRequest } = useHttp("http://localhost:3000/orders", requestConfig)

  const cartTotal = cartCTX.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const hideCheckoutHandler = () => {
    userProgressCTX.hideCheckout();
  };

  const handleClose = () => {
    userProgressCTX.hideCheckout()
  }

  const handleFinish = () => {
    userProgressCTX.hideCheckout();
    cartCTX.clearCart()
    clearData()
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest(JSON.stringify({
      order: {
        items: cartCTX.items,
        customer: customerData,
      },
    }))
  };

  let actions = <>
    <Button type="button" textOnly onClick={hideCheckoutHandler}>
      Close
    </Button>
    <Button>Submit Order</Button>
  </>

  if (isSending) {
    actions = <span>Sending data...</span>
  }

  if (data && !error) {
    return <Modal open={userProgressCTX.progress === 'checkout'} onClose={handleFinish}>
      <h2>Success!!</h2>
      <p>You order is submitted successfully</p>
      <p>
        We will get back to you shortly
      </p>
      <p className="modal-actions">
        <Button onClick={handleFinish}>Okay</Button>
      </p>
    </Modal>
  }

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
        {error && <Error title="Sending data failed" message={error} />}
        <p className="modal-actions">
          {actions}
        </p>
      </form>
    </Modal>
  );
}
