import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <div>
      {showCart && <Cart onCartClose={hideCartHandler} />}
      <Header onCartShow={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
