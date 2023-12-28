import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <h1>This is product page</h1>
      Go to <Link to="/">Home Page</Link>
    </>
  );
}

export default ProductPage;
