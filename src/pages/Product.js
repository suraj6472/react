import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <h1>This is product page</h1>
      Go to <Link to="/">Home Page</Link>
      <p>
        <ul>
          <li>
            <Link to="/product/page-1">Page 1 Detail</Link>
          </li>
          <li>
            <Link to="/product/page-2">Page 2 Detail</Link>
          </li>
          <li>
            <Link to="/product/page-3">Page 3 Detail</Link>
          </li>
        </ul>
      </p>
    </>
  );
}

export default ProductPage;
