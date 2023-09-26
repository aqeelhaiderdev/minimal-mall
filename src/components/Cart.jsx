import { AiOutlineClose } from "react-icons/ai";
import EmptyCart from "./EmptyCart";
import { useCart } from "../contexts/CartContext";
import CartItems from "./CartItems";

function Cart({ cart, cartFn }) {
  const { cartItem } = useCart();
  return (
    <div>
      <div
        className="absolute left-0 top-0 z-40 h-screen w-full bg-hoverOverLayColor"
        onClick={() => cartFn(!cart)}
      ></div>

      <div className="absolute right-0 top-0 z-50 flex h-screen w-full flex-col bg-lightGray px-4 py-7 sm:w-1/2 lg:w-1/3">
        <div className="flex flex-col">
          <div className="flex items-center justify-between text-xl font-bold">
            <h2>Your Shopping Cart ( {cartItem.length} )</h2>
            <span>
              <AiOutlineClose onClick={() => cartFn(!cart)} />
            </span>
          </div>
          {cartItem.length < 1 ? (
            <EmptyCart cart={cart} cartFn={cartFn} />
          ) : (
            <CartItems />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
