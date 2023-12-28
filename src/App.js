import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootPage from "./pages/Root";

const router = createBrowserRouter([
  {path: '/', element: <RootPage />, children: [
    { path: '/', element: <HomePage /> },
    { path: '/products', element: <ProductPage /> }
  ]}
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
