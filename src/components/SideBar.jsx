import { useContext, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";

const SideBar = () => {
  const { categories } = useContext(ShopContext);
  const [visible, setVisible] = useState({
    categories: true,
    price: false,
    brand: false,
  });
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id],
    );
  };

  const toggleVisibility = (key) => {
    setVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <aside className="w-full sticky top-14 h-fit mb-4">
      <div className="border my-3 px-4 py-3">
        <h2 className="font-bold text-lg">Filter</h2>
      </div>
      <div className="border rounded my-3">
        <h2
          onClick={() => toggleVisibility("categories")}
          className="border-b px-4 py-3 font-bold text-lg cursor-pointer"
        >
          Categories
        </h2>
        {visible.categories && (
          <div>
            {categories.map((item) => (
              <div key={item._id} className="border-b flex px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(item._id)}
                  onChange={() => toggleCategory(item._id)}
                  className="mr-4 cursor-pointer"
                />
                <p className="font-bold">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border rounded my-3">
        <h2 className="border-b px-4 py-3 font-bold text-lg">Price</h2>
        <div className="border-b flex px-4 py-3">
          <input type="checkbox" className="mr-4" />
          <p className="font-bold">Min Price</p>
        </div>
        <div className="border-b flex px-4 py-3">
          <input type="checkbox" className="mr-4" />
          <p className="font-bold">Max Price</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
