import React, { useContext, useEffect, useState } from "react";
import Items from "../components/Items";
import { ShopContext } from "../contexts/ShopContext";
import SideBar from "../components/SideBar";

const Products = () => {
  const { products } = useContext(ShopContext);
  const [tectProduct, setTechProduct] = useState([]);

  useEffect(() => {
    setTechProduct(products.slice());
  }, [products]);
  
  return (
    <section className="page-frame flex justify-between mb-4">
      <div className="hidden md:block w-full md:w-[20%] mr-2">
        <SideBar />
      </div>
      <div>
        <div className="my-3 px-4 py-3">
          <h2 className="font-bold text-lg">All</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {tectProduct.map((item, index) => (
            <Items
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {tectProduct.map((item, index) => (
            <Items
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {tectProduct.map((item, index) => (
            <Items
              key={index}
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
