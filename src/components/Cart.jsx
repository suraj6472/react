import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";

export default function Cart() {

    const userProgressCTX = useContext(UserProgressContext)
    const cartCTX = useContext(CartContext)

    const totalAmount = cartCTX.items.reduce((total, item) => {
        return total + (item.quantity * item.price)
    }, 0)

    const hideCartHandler = () => {
        userProgressCTX.hideCart() 
    }

    return <Modal className="cart" open={userProgressCTX.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCTX.items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
        <p className="cart-total">{currencyFormatter.format(totalAmount)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={hideCartHandler}>Close</Button>
            <Button onClick={hideCartHandler}>Add to cart</Button>
        </p>
    </Modal>
}