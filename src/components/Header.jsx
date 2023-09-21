import { Link } from "react-router-dom";
import logo from "../assets/img/logo-trim.png";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [mobNav, setMobNav] = useState(false);
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-whiteColor shadow-md">
        <div className="container mx-auto">
          <div className="flex h-28 items-center justify-between px-10">
            <Link to="/">
              <img src={logo} alt="logo" className="h-24 w-24" />
            </Link>
            <nav className="flex items-center justify-evenly gap-5 text-lg uppercase">
              <Link
                to="categories/all"
                className="hidden hover:underline md:block"
              >
                Categories
              </Link>
              <Link
                to="categories/product/1"
                className="hidden hover:underline md:block"
              >
                Product page
              </Link>
              <ul className="flex items-center gap-5 text-2xl">
                <li className="block md:hidden">
                  <AiOutlineMenu onClick={() => setMobNav(!mobNav)} />
                </li>
                <li>
                  <AiOutlineShoppingCart />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}

      {mobNav && (
        <div className="absolute left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-lightGray">
          <span className="absolute right-16 top-10 text-2xl">
            <AiOutlineClose onClick={() => setMobNav(!mobNav)} />
          </span>
          <nav className="flex flex-col items-center gap-5 text-2xl uppercase">
            <Link to="categories/all">categories</Link>
            <Link to="categories/product/1">Product page</Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
