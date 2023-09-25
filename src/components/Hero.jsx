import { Link } from "react-router-dom";
import main1 from "../assets/img/header/home-img-1.jpg";
import main2 from "../assets/img/header/home-img-2.jpg";
import main3 from "../assets/img/header/home-img-3.jpg";
import main4 from "../assets/img/header/home-img-4.jpg";

function Hero() {
  return (
    <div className="container mx-auto px-10 pt-28">
      <div className="mt-3 grid h-[500px] grid-cols-2 grid-rows-2 gap-3 md:grid-cols-4">
        <div className="relative col-auto row-auto md:col-span-2 md:row-span-full">
          <Link
            to="categories/furnitures"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="absolute left-0 top-0 h-full w-full bg-overLayColor transition-all duration-300 ease-in-out hover:bg-hoverOverLayColor"></div>
            <img
              src={main1}
              alt="main image"
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-5 left-5 text-xl font-bold text-whiteColor md:text-3xl">
              Live Comfortably
            </p>
          </Link>
        </div>

        <div className="relative row-auto md:row-span-full">
          <Link to="categories/skin-care" onClick={() => window.scrollTo(0, 0)}>
            <div className="absolute left-0 top-0 h-full w-full bg-overLayColor transition-all duration-300 ease-in-out hover:bg-hoverOverLayColor"></div>
            <img
              src={main2}
              alt="main image"
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-5 left-5 text-xl font-bold text-whiteColor md:text-3xl">
              SkinCare
            </p>
          </Link>
        </div>

        <div className="relative">
          <Link to="categories/kitchen" onClick={() => window.scrollTo(0, 0)}>
            <div className="absolute left-0 top-0 h-full w-full bg-overLayColor transition-all duration-300 ease-in-out hover:bg-hoverOverLayColor"></div>
            <img
              src={main3}
              alt="main image"
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-5 left-5 text-xl font-bold text-whiteColor md:text-3xl">
              Kitchen
            </p>
          </Link>
        </div>

        <div className="relative">
          <Link
            to="categories/electronics"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="absolute left-0 top-0 h-full w-full bg-overLayColor transition-all duration-300 ease-in-out hover:bg-hoverOverLayColor"></div>
            <img
              src={main4}
              alt="main image"
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-5 left-5 text-xl font-bold text-whiteColor md:text-3xl">
              Electronics
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
