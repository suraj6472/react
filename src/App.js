import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import ProductDetailPage from "./pages/ProductDetail";
import RootPage from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <HomePage /> }, // index is used to specify index route alternatively use path=""
      { path: "products", element: <ProductPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
