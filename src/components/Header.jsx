import { Link } from "react-router-dom";
import logo from "../assets/img/logo-trim.png";

import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";
import Cart from "./Cart";

function Header() {
  const [mobNav, setMobNav] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <>
      <header className="fixed left-0 top-0 z-30 w-full bg-whiteColor shadow-md">
        <div className="container mx-auto">
          <div className="flex h-28 items-center justify-between px-10">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="logo" className="h-24 w-24" />
            </Link>
            <nav className="flex items-center justify-evenly gap-5 text-lg uppercase">
              <Link
                to="categories/all"
                className="hidden hover:underline md:block"
                onClick={() => window.scrollTo(0, 0)}
              >
                Categories
              </Link>
              <Link
                to="categories/product/1"
                className="hidden hover:underline md:block"
                onClick={() => window.scrollTo(0, 0)}
              >
                Product page
              </Link>
              <ul className="flex items-center gap-5 text-2xl">
                <li className="block md:hidden">
                  <AiOutlineMenu onClick={() => setMobNav(!mobNav)} />
                </li>
                <li>
                  <AiOutlineShoppingCart onClick={() => setCart(!cart)} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Nav */}

        {mobNav && (
          <div className="absolute left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-lightGray">
            <span className="absolute right-16 top-10 text-2xl">
              <AiOutlineClose onClick={() => setMobNav(!mobNav)} />
            </span>
            <nav className="flex flex-col items-center gap-5 text-2xl uppercase">
              <Link to="categories/all" onClick={() => setMobNav(!mobNav)}>
                categories
              </Link>
              <Link
                to="categories/product/1"
                onClick={() => setMobNav(!mobNav)}
              >
                Product page
              </Link>
            </nav>
          </div>
        )}

        {/* Cart */}

        {cart && <Cart cart={cart} cartFn={setCart} />}
      </header>
    </>
  );
}

export default Header;
