import { Link } from "react-router-dom";
import { items } from "../../assets/data/AllData";

function Electronics() {
  return (
    <div className="container mx-auto px-0 sm:px-10">
      <div className="grid-col-1 grid gap-5 py-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items
          .filter((item) => item.category === "electronic")
          .map((item) => (
            <Link
              to={`/categories/product/${item.id}`}
              key={item.id}
              className="border-2 border-overLayColor transition-all duration-300 ease-in-out hover:border-hoverOverLayColor"
            >
              <div>
                <img
                  src={item.img}
                  alt="Product main image"
                  className="w-full"
                />
              </div>
              <div className="p-4">
                <div className="text-lg">{item.description}</div>
                <div className="mt-3 text-2xl font-semibold">{`${item.price} $`}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Electronics;
