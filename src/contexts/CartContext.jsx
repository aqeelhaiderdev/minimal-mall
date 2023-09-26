import { useContext, useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const productExist = cartItem.find((pro) => pro.id === item.id);
    if (productExist) {
      return null;
    }

    setCartItem([...cartItem, item]);
  };

  const removeToCart = (removeItem) => {
    const newCartItem = cartItem.filter((item) => removeItem.id !== item.id);
    setCartItem(newCartItem);
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
