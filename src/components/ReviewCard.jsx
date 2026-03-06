import { useRef, useState } from "react";
import Title from "./Title";
import { IconImg, webPageReviews } from "../constants";

export const ReviewCard = ({ id, userName, reviewDate, rating, comment }) => {
  return (
    <div
      key={id}
      className="w-full min-w-80 md:min-w-[440px] bg-white mb-2 mr-2 p-4 rounded-lg shadow-md"
    >
      <div className="flex gap-3 items-center mb-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div>
          <h3 className="font-bold">{userName}</h3>
          <span>{reviewDate}</span>
        </div>
      </div>
      <div className="my-3">
        {"⭐".repeat(rating)}
        {/* {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))} */}
      </div>
      <p className="text-gray-500 text-xs md:text-md">{comment}</p>
    </div>
  );
};

export const ReviewForHome = () => {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    setIsStart(el.scrollLeft === 0);
    setIsEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-10 px-[5%] py-10">
      <Title title={"CUSTOMERS REVIEWS"} />
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex py-5 flex-wrap md:flex-nowrap md:overflow-x-auto scrollbar-hide scroll-smooth gap-5 md:gap-0"
      >
        {webPageReviews.map(({ id, img, rating, name, comment }) => (
          <div
            key={id}
            className="w-full min-w-80 md:min-w-[560px] mb-2 mr-2 rounded-lg flex flex-col-reverse md:flex-row gap-3"
          >
            <img src={img} alt="" className="w-full md:w-52 h-76 rounded-md" />
            <div className="bg-[#f2f2f2] px-5 rounded-lg py-2 h-76 overflow-hidden">
              <div className="mb-2">{"⭐".repeat(rating)}</div>
              <h3 className="text-lg font-bold mb-2">{name}</h3>
              <p className="font-medium text-gray-500">{comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="opacity-0 md:opacity-100 w-full h-10 flex justify-end items-center px-[5%]">
        <img
          src={IconImg.Back_Arrow}
          alt="back_arrow"
          onClick={scrollLeft}
          className={` mr-4 hover:scale-110 cursor-pointer ${isStart ? "opacity-10 " : "opacity-100 animate-pulse"}`}
        />
        <img
          src={IconImg.Back_Arrow}
          alt="back_arrow"
          onClick={scrollRight}
          className={`mr-4 rotate-180 hover:scale-110 cursor-pointer ${isEnd ? "opacity-10" : "opacity-100 animate-pulse"}`}
        />
      </div>
    </section>
  );
};
