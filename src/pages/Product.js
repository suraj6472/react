import { Link } from "react-router-dom";

function ProductPage() {
  const PRODUCT = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
    { id: "p4", title: "Product 4" },
  ];
  return (
    <>
      <h1>This is product page</h1>
      Go to <Link to="/">Home Page</Link>
        <ul>
          {PRODUCT.map((prod) => (
            <li key={prod.id}>
              <Link to={prod.id}>{prod.title}</Link>
            </li>
          ))}
        </ul>
    </>
  );
}

export default ProductPage;
