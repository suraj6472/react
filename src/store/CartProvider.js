import CartContext from "./cart-context";

import { useReducer } from "react";

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateAmount = state.totalAmount + (action.item.amount * action.item.price);

        let updatedItems = []

        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)

        if (existingItemIndex !== -1) {
            let updatedItem = state.items[existingItemIndex]
            updatedItem = { ...updatedItem, amount: updatedItem.amount + action.item.amount }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updateAmount
        }
    }

    if (action.type === 'REMOVE') {

    }

    return defaultState;
}

const defaultState = {
    items: [],
    totalAmount: 0
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;