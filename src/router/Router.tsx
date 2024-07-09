import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

//Routes
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import ProductDetails from "@/pages/ProductDetails";
import ProductManagement from "@/pages/ProductManagement";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "product/management",
        element: <ProductManagement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
