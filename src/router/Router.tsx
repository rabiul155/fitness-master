import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "@/layouts/MainLayout";

//Routes
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import ProductDetails from "@/pages/ProductDetails";
import ProductManagement from "@/pages/ProductManagement";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import AddProduct from "@/pages/ProductManagement/AddProduct/AddProduct";
import ManageProductLayout from "@/layouts/ManageProductLayout";
import Orders from "@/pages/Orders";

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
        path: "products",
        element: <Product />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "manage",
        element: <ManageProductLayout />,
        children: [
          {
            index: true,
            element: <ProductManagement />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
