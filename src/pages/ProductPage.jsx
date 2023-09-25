import { useParams } from "react-router-dom";
import { items } from "../assets/data/AllData";
import { useEffect, useState } from "react";
import TrendingSlider from "../components/TrendingSlider";

function ProductPage() {
  const { id: productId } = useParams();

  const product = items.find((item) => item.id === Number(productId));

  const [image, setImage] = useState(product.img);

  useEffect(() => {
    setImage(product.img);
  }, [product]);

  return (
    <div className="container mx-auto mb-8 mt-32 px-10">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="basis-3/6 p-8">
          <div className="flex h-4/5 justify-center">
            <img src={image} alt="Product main image" className="w-3/4" />
          </div>
          <div className="mt-4 flex h-1/5 justify-center gap-3">
            <img
              src={product.img}
              alt="Product main image"
              className="h-1/4 w-1/4  hover:border-2 hover:border-mediumGray"
              onMouseEnter={() => setImage(product.img)}
            />

            {product.otherImgs.map((oImg) => (
              <img
                src={oImg}
                key={oImg}
                alt="Product main image"
                className="h-1/4 w-1/4 hover:border-2 hover:border-mediumGray"
                onMouseEnter={() => setImage(oImg)}
              />
            ))}
          </div>
        </div>

        <div className="flex basis-3/6 flex-col justify-between bg-mediumGray px-6 py-10 lg:px-16 lg:py-20">
          <h2 className="mb-8 text-center text-2xl font-bold md:mb-16 md:text-4xl">
            {product.description}
          </h2>
          <p className="mb-6 text-lg md:mb-12 md:text-xl">{product.specs}</p>

          <div className="mb-6 flex flex-col items-center justify-between gap-4 md:mb-10 lg:flex-row lg:gap-0">
            <p className="text-2xl font-bold">Quantity</p>

            <div className="flex text-2xl">
              <button className="border-2 border-black bg-white px-4 py-2">
                -
              </button>
              <span className="border-2 border-x-0 border-black px-4 py-2">
                1
              </span>
              <button className="border-2 border-black bg-white px-4 py-2">
                +
              </button>
            </div>

            <p className="text-2xl font-bold">{`${product.price} $`}</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <button className="h-14 w-full border-2 border-black text-xl font-medium uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white md:w-1/2 lg:text-2xl">
              Add to cart
            </button>
            <button className="h-14 w-full border-2 border-mainColor bg-mainColor text-xl text-white transition-all duration-300 ease-in-out hover:bg-mediumGray hover:text-mainColor md:w-1/2 md:text-2xl">
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-10 sm:text-left">
        <div className="w-full bg-mediumGray p-6 sm:w-2/6">
          <h2 className="text-xl font-bold">Texture:</h2>
          <p className="mt-2 text-lg">{product.texture}</p>
        </div>
        <div className="w-full bg-mediumGray p-6 sm:w-2/6">
          <h2 className="text-xl font-bold">Weight:</h2>
          <p className="mt-2 text-lg">{product.weight}</p>
        </div>
        <div className="w-full bg-mediumGray p-6 sm:w-2/6">
          <h2 className="text-xl font-bold">Size:</h2>
          <p className="mt-2 text-lg">{product.size}</p>
        </div>
      </div>

      <TrendingSlider />
    </div>
  );
}

export default ProductPage;
