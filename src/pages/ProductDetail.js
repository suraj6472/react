import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>This is ProductDetail page</h1>
      <p>
        <h2>{params.productId}</h2>
        Go to <Link to="/products">Product Page</Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
