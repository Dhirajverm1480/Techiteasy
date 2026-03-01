import { Link, NavLink } from "react-router-dom";
// import Icon from "../assets/Icon.webp";
import { useContext, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { IconImg } from "../constants";

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/products", label: "Product" },
  { id: 3, path: "/about", label: "About" },
  { id: 4, path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const { setShowSearch, getCartCount, token, setToken, loading, user } =
    useContext(ShopContext);

  console.log("User: ", user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setShowBox(false);
  };

  if (loading) return null;

  return (
    <header className="sticky top-0 z-50 px-[4%] backdrop-blur-3xl">
      <div className="flex justify-between items-center px-3 py-2">
        <ul className="hidden sm:flex gap-5 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              <p>{link.label}</p>
            </NavLink>
          ))}
        </ul>

        <Link to="/">
          <p className="text-2xl sm:text-3xl font-bold">TechItEasy</p>
        </Link>

        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center rounded-xl">
            <img
              onClick={() => setShowSearch((prev) => !prev)}
              className="p-1 cursor-pointer"
              src={IconImg.SearchImg}
              alt="Search Image"
            />
          </div>
          <div>
            {!token ? (
              <NavLink to="/login">
                <p className="bg-orange-400 text-white py-1 px-2 rounded hover:bg-transparent hover:border border-orange-400 hover:text-orange-400">
                  Login
                </p>
              </NavLink>
            ) : (
              <div>
                <div
                  onClick={() => setShowBox((prev) => !prev)}
                  className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
                />
                <div className="relative">
                  <div
                    className={`absolute right-0 transition-all duration-200 w-36 my-3 rounded-md p-3 shadow-md bg-white ${
                      showBox ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <p onClick={handleLogout} className="px-2 pb-1 text-lg">
                      LogOut
                    </p>
                    <p className="px-2 text-lg">theme</p>
                    <p className="px-2"></p>
                    <p className="px-2"></p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative hidden md:block">
            <img className="w-5 min-w-5" src={IconImg.Cart} alt="Cart Image" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-300 text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          {/* <div className="group relative hidden md:block">
            <img className="cursor-pointer" src={IconImg.Gears} alt="" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-transparent backdrop:blur-lg border rounded">
                <Link
                  to={"/wish"}
                  className="cursor-pointer hover:text-black border-b"
                >
                  <p>WishList</p>
                </Link>
              </div>
            </div>
          </div> */}
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
            <p className="text-md font-bold">Close</p>
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
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
