import { items } from "../assets/data/AllData";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function TrendingItemsSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <div className="container mx-auto px-10 py-14">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-semibold sm:text-3xl">Trending Now</h3>
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex h-10 w-10 items-center justify-center bg-black text-xl text-white"
            onClick={() => slideLeft()}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center bg-black text-xl text-white"
            onClick={() => slideRight()}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>

      <div
        className="no-scrollbar flex items-center justify-start gap-4 overflow-y-hidden overflow-x-scroll scroll-smooth whitespace-nowrap"
        id="slider"
      >
        {items
          .filter((item) => item.id >= 8)
          .map((item) => (
            <div
              key={item.id}
              className="shrink-0 grow basis-52 self-stretch border-2 border-overLayColor transition-all duration-300 ease-in-out hover:border-hoverOverLayColor"
            >
              <Link to={`/categories/product/${item.id}`}>
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
      </div>
    </div>
  );
}

export default TrendingItemsSlider;
