import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default MainLayout;
