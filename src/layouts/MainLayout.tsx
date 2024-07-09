import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default MainLayout;
