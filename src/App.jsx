import Headers from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Headers />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
