import { Outlet } from "react-router-dom";
import CategoriesHeader from "../components/CategoriesHeader";

function Categories() {
  return (
    <div className="p-10">
      <CategoriesHeader />
      <Outlet />
    </div>
  );
}

export default Categories;
