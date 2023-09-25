import { Link } from "react-router-dom";

function Banner({ img, title, revDirection = undefined }) {
  return (
    <div className="my-24">
      <div className="container mx-auto px-10">
        <div
          className={`flex h-auto flex-col ${
            revDirection ? "md:flex-row-reverse" : "md:flex-row"
          }  items-center justify-evenly bg-lightGray`}
        >
          <div className="hidden w-full sm:block md:w-1/2">
            <img
              src={img}
              alt="Banner Main Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-5 px-12 py-12 md:w-1/2 md:py-0 lg:px-28">
            <h2 className=" text-2xl font-bold sm:text-3xl">{title}</h2>
            <p className=" text-base font-medium sm:text-lg">
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <Link
              to="categories/all"
              className="w-[103px] bg-black p-2.5 text-lg font-bold uppercase text-whiteColor"
              onClick={() => window.scrollTo(0, 0)}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
