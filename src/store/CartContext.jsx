import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => {},
});

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedCartItems = [...state.items];
        if (existingItemIndex > -1) {
            let updatedCart = updatedCartItems[existingItemIndex];
            updatedCart = { ...updatedCart, quantity: updatedCart.quantity + 1 };
            updatedCartItems[existingItemIndex] = updatedCart
        } else {
            updatedCartItems.push({ ...action.item, quantity: 1 });
        }
        return { ...state, items: updatedCartItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1)
        } else {
            const updatedItem = {
                ...existingCartItem, quantity: existingCartItem.quantity - 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return { ...state, items: updatedItems }
    }

    if (action.type === 'CLEAR_CART') {
        return { ...state, items: [] }
    }
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    const addItem = function (item) {
        dispatchCartAction({ type: 'ADD_ITEM', item })
    }

    const removeItem = function (id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id })
    }

    const clearCart = function () {
        dispatchCartAction({ type: 'CLEAR_CART' })
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    }
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;