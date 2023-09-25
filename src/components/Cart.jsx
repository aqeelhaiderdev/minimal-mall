import { AiOutlineClose } from "react-icons/ai";
import EmptyCart from "./EmptyCart";

function Cart({ cart, cartFn }) {
  return (
    <div>
      <div
        className="absolute left-0 top-0 z-40 h-screen w-full bg-hoverOverLayColor"
        onClick={() => cartFn(!cart)}
      ></div>

      <div className="absolute right-0 top-0 z-50 flex h-screen w-full flex-col bg-lightGray px-4 py-7 sm:w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-between text-xl font-bold">
            <h2>Your Shopping Cart</h2>
            <span>
              <AiOutlineClose onClick={() => cartFn(!cart)} />
            </span>
          </div>

          <EmptyCart cart={cart} cartFn={cartFn} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
