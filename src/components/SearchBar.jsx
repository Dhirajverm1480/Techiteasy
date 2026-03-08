import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { useLocation } from "react-router-dom"; // this hook is used for get the page location
import { IconImg } from "../constants";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) return;
    navigate(`/results?query=${search}`);
    setShowSearch(false)
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    // console.log(location.pathname); // Using .pathname we get the location
    if (location.pathname.includes("products")) {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  }, [location]);

  return showSearch ? (
    <div className="absolute z-50 w-full h-screen bg-white md:bg-transparent border-b backdrop-blur-3xl flex justify-center items-start">
      <div className="w-full flex items-center justify-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 outline-none bg-inherit text-sm"
            type="text"
            placeholder="Search"
          />
          <img
            onClick={handleSearch}
            className="w-4 cursor-pointer"
            src={IconImg.SearchImg}
            alt="Search"
          />
        </div>
        <div>
          <img
            onClick={(e) => setShowSearch(false)}
            className="inline w-6 cursor-pointer"
            src={IconImg.Close}
            alt="close"
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
