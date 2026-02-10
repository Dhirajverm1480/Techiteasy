import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const Product = () => {
  const { productId } = useParams();
  console.log("ProductId ", productId);
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };
  // console.log("Pro", productData)

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <section className="page-frame xl:h-screen transition-opacity ease-in duration-500 opacity-100 px-[2%]">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div> */}
          <div className="w-full sm:w-[80%] mb-20">
            <img className="w-[70%] h-96 cursor-pointer" src={image} alt={productData.title} />
          </div>
        </div>
        {/* -------Product Info------ */}
        <div className="flex-1">
          {/* <h1 className='font-medium text-2xl mt-2'>{productData.title}</h1> */}
          <Title title={productData.title} />
          <p className="mt-5 text-gray-500 text-lg md:w-4/5">
            {"Rs."}
            {productData.price}
          </p>
          {/* <p className='mt-5 text-xl font-medium'>{productData.description}</p> */}
          <Subtitle subtitle={productData.subtitle} />

          <div className="border my-4 py-3">
            <button
              onClick={() => addToCart(productData._id)}
              className="bg-black text-white px-8 py-3 mt-1 text-sm active:bg-gray-700 hover:bg-white hover:text-black border border-black rounded"
            >
              Add To Cart
            </button>
          </div>
          {/* <hr className="mt-8 sm:w-4/5 " /> */}
          <div>
            <div>
              <Subtitle
                subtitle={"No extra costs at checkout, delivered to your door."}
              />
            </div>
            <div>
              <Subtitle subtitle={"Not Satisfied? Full refund, no hassle."} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full md:flex justify-between my-3">
        <div className="w-full md:w-[55%] pr-4">
          <Title title={"Description"} />
          <p>{productData.description}</p>
          <Title title={"Features"} />
          <div>
            {
              productData.features.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="sticky top-14 w-full md:w-[40%] my-3 py-3 h-fit">
          <img src={image} alt={productData.title} />
        </div>
      </div>
      <hr />
    </section>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
