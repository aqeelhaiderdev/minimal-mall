import { Link } from "react-router-dom";
import { items } from "../assets/data/AllData";

function TrendingSliderItems() {
  return (
    <>
      {items
        .filter((item) => item.id >= 8)
        .map((item) => (
          <div
            key={item.id}
            className="shrink-0 grow basis-52 self-stretch border-2 border-overLayColor transition-all duration-300 ease-in-out hover:border-hoverOverLayColor"
          >
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={`/categories/product/${item.id}`}
            >
              <div>
                <img
                  src={item.img}
                  alt="Product main image"
                  className="h-[210px] w-[210px]"
                />
              </div>
              <div className="p-4">
                <div className="text-base">{item.description}</div>
                <div className="mt-3 text-2xl font-semibold">{`${item.price} $`}</div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

export default TrendingSliderItems;
