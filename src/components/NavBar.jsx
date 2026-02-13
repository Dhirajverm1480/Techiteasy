import { Link, NavLink } from "react-router-dom";
// import Icon from "../assets/Icon.webp";
import { useContext, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { IconImg } from "../constants";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/tech", label: "Product" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <header className="sticky top-0 z-1000 px-[4%] backdrop-blur-3xl">
      <div className="flex justify-between items-center px-3 py-2">
        <ul className="hidden sm:flex gap-5 text-sm">
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              <p>{link.label}</p>
            </NavLink>
          ))}
        </ul>

        <Link to={`/`}>
          <p className="text-2xl sm:text-3xl font-bold">TechItEasy</p>
        </Link>

        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center rounded-xl">
            <img
              onClick={() => setShowSearch(true)}
              className="p-1 cursor-pointer"
              src={IconImg.SearchImg}
              alt="Search Image"
            />
          </div>
          <NavLink to="/login">
            <p className="bg-orange-400 text-white py-1 px-2 rounded hover:bg-transparent hover:border border-orange-400 hover:text-orange-400">
              Login
            </p>
          </NavLink>
          <Link to="/cart" className="relative">
            <img className="w-5 min-w-5" src={IconImg.Cart} alt="Cart Image" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-300 text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <div className="group relative">
            <img className="cursor-pointer" src={IconImg.Gears} alt="" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-transparent backdrop:blur-lg border rounded">
                <p className="cursor-pointer hover:text-black border-b">
                  WishList
                </p>
                <p className="cursor-pointer hover:text-black border-b">Dark</p>
                <p className="cursor-pointer hover:text-black border-b">Mode</p>
              </div>
            </div>
          </div>
          <img
            className="sm:hidden"
            onClick={() => setVisible(true)}
            src={IconImg.Menu}
            alt="Menu Image"
          />
        </div>
        {/* Side */}
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white  transition-all ${visible ? "w-full h-screen" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={IconImg.Close} alt="Close Menu" />
            <p>Close</p>
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              onClick={() => setVisible(false)}
              // className="py-2 pl-6 border"
              className={({ isActive }) =>
                `py-2 pl-6 border-b ${isActive ? "text-orange-500" : ""}`
              }
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
