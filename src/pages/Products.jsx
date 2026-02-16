import { useContext, useState } from "react";
import Items from "../components/Items";
import { ShopContext } from "../contexts/ShopContext";
import SideBar from "../components/SideBar";

const Products = () => {
  const { products, categories } = useContext(ShopContext);
  const [selectedCategories, setCategories] = useState([]);
  // console.log("Pro: ", products);

  const filterProduct =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category?._id),
        );

  const pageTitle =
    selectedCategories.length === 0
      ? "All"
      : categories
          .filter((cat) => selectedCategories.includes(cat._id.toString()))
          .map((cat) => cat.name)
          .join(", ");

  return (
    <section className="page-frame flex justify-between mb-4">
      <div className="hidden md:block w-full md:w-[20%] mr-2">
        <SideBar
          selectedCategories={selectedCategories}
          setSelectedCategories={setCategories}
        />
      </div>
      <div>
        <div className="my-3 px-4 py-3">
          <h2 className="font-bold text-lg">{pageTitle}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProduct.map((item) => (
            <Items
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
