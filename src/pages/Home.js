import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("products");
  };

  return (
    <>
      <h1>This is home page</h1>
      Go to <Link to="products">Product</Link>
      <p>
        <button onClick={navigateHandler}>Go to Products Page</button>
      </p>
    </>
  );
}

export default HomePage;
