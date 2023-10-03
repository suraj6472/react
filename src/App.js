import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Header></Header>
      <Cart />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
