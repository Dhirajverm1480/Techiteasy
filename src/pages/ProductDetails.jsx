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
          <div className='flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img src={item} key={index} className='w-[20%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border rounded p-2' />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%] md:mb-20">
            <img className="w-full md:w-[70%] h-96 cursor-pointer" src={image} alt={productData.title} />
          </div>
        </div>
        {/* -------Product Info------ */}
        <div className="flex-1">
          <Title title={productData.title} />
          <Subtitle subtitle={productData.subtitle} />
          <p className="mt-3 text-gray-500 text-lg md:w-4/5">
            {"Rs."}
            {productData.price}
          </p>

          <div className="mt-3 mb-5 py-3">
            <button
              onClick={() => addToCart(productData._id)}
              className="w-full bg-black text-white px-8 py-3 mt-1 text-sm active:bg-gray-700 hover:bg-white hover:text-black border border-black rounded"
            >
              Add To Cart
            </button>
          </div>
          {/* <hr className="mt-8 sm:w-4/5 " /> */}
          <div  className="bg-[#f2f2f2] px-4 rounded-lg mb-6">
            <div className="py-3">
              <Subtitle
                subtitle={"No extra costs at checkout, delivered to your door."}
              />
            </div>
            <hr />
            <div className="py-3">
              <Subtitle subtitle={"Not Satisfied? Full refund, no hassle."} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full md:flex justify-between my-3">
        <div className="w-full md:w-[55%] pr-4">
          <Title title={"Description"} />
          <p className="mb-5">{productData.description}</p>
          {/* <Title title={"Features"} /> */}
          <Subtitle subtitle={"Features"} />
          <div className="pl-4">
            {
              productData.features.map((item, index) => (
                <div key={index} className="flex gap-1">
                  {/* <span>-</span> */}
                  <li className="mb-1 text-sm">{item}</li>
                </div>
              ))
            }
          </div>
        </div>
        <div className="sticky top-14 w-full md:w-[40%] my-3 py-3 px-2 h-fit bg-[#f2f2f2] rounded-lg">
          <img src={image} alt={productData.title} />
        </div>
      </div>
      <hr />
      {/* <div className="bg-[#f2f2f2] p-5">
        <Title title={"Product Reviews"} />
      </div>
      <hr />
      <div>
        <Title title={"You may also like"} />
      </div> */}
    </section>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
