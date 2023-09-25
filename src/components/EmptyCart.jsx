import { Link } from "react-router-dom";
import emptyCartImage from "../assets/img/cart/empty-cart.png";

function EmptyCart({ cart, cartFn }) {
  return (
    <div className="mt-24 flex h-full flex-col items-center justify-center">
      <img src={emptyCartImage} alt="Empty Cart Image" className="w-1/2" />
      <p className="mb-5 text-lg font-semibold">Your Cart is Empty</p>
      <Link
        to="categories/all"
        className="border-2 border-darkGray px-6 py-3"
        onClick={() => {
          cartFn(!cart);
          window.scrollTo(0, 0);
        }}
      >
        Keep Browsing
      </Link>
    </div>
  );
}

export default EmptyCart;
