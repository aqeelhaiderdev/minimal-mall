import { Link } from "react-router-dom";
import { items } from "../assets/data/AllData";

function TrendingItems() {
  return (
    <div className="container mx-auto px-10 py-28">
      <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
        Products we are proud of
      </h2>
      <div className="grid-col-1 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items
          .filter((item) => item.id <= 8)
          .map((item) => (
            <Link
              to={`/categories/product/${item.id}`}
              key={item.id}
              className="border-2 border-overLayColor transition-all duration-300 ease-in-out hover:border-hoverOverLayColor"
              onClick={() => window.scrollTo(0, 0)}
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

export default TrendingItems;
