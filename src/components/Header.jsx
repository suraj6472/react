import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx'
import CartContext from '../store/CartContext'

export default function Headers() {

    const cartCTX = useContext(CartContext)

    const cartItemCount = cartCTX.items.reduce((totalItems, item) => {
        return totalItems + item.quantity
    }, 0)

    return <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt='A restaurant' />
            <h1>FoodApp</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({cartItemCount})</Button>
        </nav>
    </header>
}