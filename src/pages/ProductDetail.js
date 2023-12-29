import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>This is ProductDetail page</h1>
      <p>
        <span>{params.productId}</span><br/>
        Go to <Link to=".." relative="path">Product Page</Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
