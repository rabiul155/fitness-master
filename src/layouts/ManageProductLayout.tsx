import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Outlet, useNavigate } from "react-router-dom";

function ManageProductLayout() {
  const navigate = useNavigate();
  return (
    <Tabs defaultValue="my-products" className="">
      <TabsList className="grid grid-cols-2 mt-4 mb-8">
        <TabsTrigger onClick={() => navigate("/manage")} value="my-products">
          My Products
        </TabsTrigger>
        <TabsTrigger
          onClick={() => navigate("/manage/add-product")}
          value="add-products"
        >
          Add Products
        </TabsTrigger>
      </TabsList>
      <Outlet />
    </Tabs>
  );
}

export default ManageProductLayout;
