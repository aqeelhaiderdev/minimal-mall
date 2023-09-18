import { Outlet } from "react-router-dom";

function Categories() {
  return (
    <div className="p-10">
      Categories
      <Outlet />
    </div>
  );
}

export default Categories;
