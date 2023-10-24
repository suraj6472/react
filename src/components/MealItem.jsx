import Button from './UI/Button.jsx'
import { currencyFormatter } from "../util/formatting"
import { useContext } from 'react'
import CartContext from '../store/CartContext.jsx'

export default function MealItem({meal}) {
    const cartCTX = useContext(CartContext)

    const addToCartHandler = () => {    
        cartCTX.addItem(meal)
    }

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={addToCartHandler}>Add to cart</Button>
            </p>
        </article>
    </li>
}