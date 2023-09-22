import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const categoriesList = [
  { name: "All", link: "all" },
  { name: "Furnitures", link: "furnitures" },
  { name: "Electronics", link: "electronics" },
  { name: "Lamps", link: "lamps" },
  { name: "Kitchen", link: "kitchen" },
  { name: "Chairs", link: "chairs" },
  { name: "Skin Care", link: "skin-care" },
];

function CategoriesHeader() {
  const [currentCat, setCurrentCat] = useState("all");

  return (
    <div className="mt-28">
      <div className="container mx-auto px-0 sm:px-10">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-lg"
          >
            <AiOutlineArrowLeft />
            Back
          </Link>
          <h2 className="mx-auto text-center text-3xl font-bold uppercase">
            {currentCat}
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {categoriesList.map((item) => (
            <NavLink
              to={item.link}
              key={item.name}
              className={`border-2 border-overLayColor px-4 py-1.5 hover:border-hoverOverLayColor`}
              onClick={() => setCurrentCat(item.name)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesHeader;
