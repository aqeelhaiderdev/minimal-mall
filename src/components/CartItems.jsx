import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { AiOutlineClose } from "react-icons/ai";

function CartItems() {
  const { cartItem, removeToCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);
  return (
    <>
      <div className="mt-10 flex h-96 flex-col gap-2 overflow-scroll overflow-x-auto">
        {cartItem.map((item) => (
          <div key={item.id} className="flex border-2 border-black">
            <div className="w-3/12">
              <img src={item.img} className="h-full w-full" />
            </div>
            <div className="flex w-6/12 flex-col items-start justify-between gap-2 py-4 pl-4">
              <p className="text-xl font-semibold">{item.description}</p>
              <p className="text-lg">{`Quantity: ${item.quantity}`}</p>
            </div>
            <div className="flex w-3/12 flex-col items-center justify-between py-4">
              <p className="mt-2 cursor-pointer text-xl font-bold">
                <AiOutlineClose onClick={() => removeToCart(item)} />
              </p>
              <p className="text-lg font-semibold">{`${item.price} $`}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between border-y-2 border-dashed border-black p-4">
        <div>
          <p className="text-xl">Subtotal</p>
          <p className="text-xl font-bold">{`${totalPrice} $`}</p>
        </div>
        <div>
          <button className="border-2 border-darkGray px-6 py-3">
            Go to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItems;
