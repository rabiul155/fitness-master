import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col">
      <div>navbar</div>
      <Outlet></Outlet>
      <div>footer</div>
    </div>
  );
}
export default MainLayout;
