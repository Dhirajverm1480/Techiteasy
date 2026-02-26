import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import Title, { Subtitle } from "../components/Title";
import { IconImg, reviews } from "../constants";
import axios from "axios";
import { ReviewCard } from "../components/ReviewCard";

const formatDate = (date) =>
  new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
  });

const Product = () => {
  const { productId } = useParams();
  // console.log("ProductId ", productId);
  const { products, addToCart } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState("");
  const [visible, setVisible] = useState(false);

  const productData = useMemo(() => {
    if (!products) return null;
    const product = products.find((item) => item._id === productId);
    if (product && !mainImage) setMainImage(product.image[0]);
    return product || null;
  }, [products, productId, mainImage]);

  const onSubmitNewReviewByUser = async (id, e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        backendUrl + `/api/v1/${id}/review`,
        {
          rating,
          comment,
        },
        {
          withCredentials: true,
        },
      );
      console.log("Review Data : ", response)
    } catch (error) {
      console.log("Reviews Err : ", error);
    }
  };

  if (!productData) {
    // Skeleton Loader while product data is loading
    return (
      <section className="page-frame min-h-screen p-6">
        <div className="animate-pulse flex flex-col sm:flex-row gap-12">
          <div className="flex-1 flex flex-col sm:flex-row gap-3">
            <div className="flex sm:flex-col gap-2 w-full sm:w-[18.7%]">
              {[1, 2, 3, 4].map((idx) => (
                <div
                  key={idx}
                  className="w-[20%] sm:w-full h-20 bg-gray-300 rounded"
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%] h-96 bg-gray-300 rounded" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="h-8 bg-gray-300 rounded w-3/4" />
            <div className="h-6 bg-gray-300 rounded w-1/2" />
            <div className="h-6 bg-gray-300 rounded w-1/4" />
            <div className="h-12 bg-gray-300 rounded w-full mt-4" />
          </div>
        </div>
      </section>
    );
  }

  return productData ? (
    <section className="page-frame min-h-screen transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[20%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border rounded p-2"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] md:mb-20">
            <img
              className="w-full md:w-[70%] h-96 cursor-pointer"
              src={mainImage}
              alt={productData.title}
            />
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

          <div className="mt-3 mb-5 py-3 flex justify-between items-center gap-1">
            <button
              onClick={() => addToCart(productData._id)}
              className="w-full bg-black text-white px-8 py-3 mt-1 text-sm active:bg-gray-700 hover:bg-white hover:text-black border border-black rounded cursor-pointer"
            >
              Add To Cart
            </button>
            <a href="#" className="border py-2 px-2 rounded mt-1">
              <img src={IconImg.Heart} alt="" className="w-9 h-7" />
            </a>
          </div>
          {/* <hr className="mt-8 sm:w-4/5 " /> */}
          <div className="bg-[#f2f2f2] px-4 rounded-lg mb-6">
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
      <div className="w-full md:flex justify-between my-20">
        <div className="w-full md:w-[55%] pr-4">
          <Title title={"Description"} />
          <p className="mb-5">{productData.description}</p>
          {/* <Title title={"Features"} /> */}
          <Subtitle subtitle={"Features"} />
          <div className="pl-4">
            {productData.features.map((item, index) => (
              <div key={index} className="flex gap-1">
                {/* <span>-</span> */}
                <li className="mb-1 text-sm">{item}</li>
              </div>
            ))}
          </div>
        </div>
        <div className="sticky top-14 w-full md:w-[40%] my-3 py-3 px-2 h-fit bg-[#f2f2f2] rounded-lg">
          <img src={mainImage} alt={productData.title} />
        </div>
      </div>

      <div className="bg-[#f2f2f2] px-[4%] py-[3%] rounded-xl my-24">
        <Title title={"Product Reviews"} />
        <div className="flex gap-10 py-5 flex-wrap md:flex-nowrap md:overflow-x-auto scrollbar-hide scroll-smooth">
          {reviews.map((item) => (
            <ReviewCard key={item.id} id={item.id} userName={item.userName} rating={item.rating} comment={item.comment} reviewDate={formatDate(item.reviewDate)} />
          ))}
        </div>

        <div className="my-6">
          <button
            onClick={() => setVisible(true)}
            className="w-44 h-12 pb-1 bg-white text-lg font-bold rounded-lg shadow-md cursor-pointer"
          >
            <span className="mr-3 text-2xl font-bold">+</span>Add Review
          </button>
        </div>
        <div
          className={`bg-white shadow-md rounded-md ${visible ? "block" : "hidden"}`}
        >
          <form action="" className="py-2 px-4">
            <input
              type="number"
              name=""
              id=""
              placeholder="rating"
              className="w-full md:w-56 border-b outline-none py-2 px-2 my-4 mr-3"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="comment"
              className="w-full md:w-56 border-b outline-none mb-4 md:mr-4 py-2 px-2"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md text-base font-bold hover:border border-black hover:bg-white hover:text-black shadow-md cursor-pointer"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
      {/* <hr /> */}
      <div>
        <Title title={"You may also like"} />
      </div>
    </section>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
