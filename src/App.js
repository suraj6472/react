import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductPage />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinition)


const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductPage /> }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
