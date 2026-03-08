import { Link } from "react-router-dom";
import Title, { Subtitle } from "./Title";

const Items = ({ id, image, title, price }) => {
  return (
    <Link
      to={`/productDetails/${id}`}
      className="cursor-pointer shadow p-2 rounded"
    >
      <div className="overflow-hidden">
        <img
          src={image && image[0]}
          alt={title}
          width="160"
          height="144"
          loading="lazy"
          className="hover:scale-110 transition ease-in-out w-40 h-36"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{title}</p>
      <p className="text-sm font-medium">
        {"Rs."}
        {price}
      </p>
    </Link>
  );
};

export default Items;

export const SearchItems = ({ id, image, title, price, subtitle, tags }) => {
  const tag = tags.slice(0,4)
  // console.log("t", tag)
  return (
    <Link
      to={`/productDetails/${id}`}
      className="cursor-pointer p-2 rounded"
    >
      <div className="w-full flex gap-10 py-5 px-2 rounded-lg shadow overflow-hidden">
        <img
          src={image && image[0]}
          alt={title}
          // width="186"
          // height="186"
          loading="lazy"
          className="hover:scale-110 transition ease-in-out w-20 h-20 md:w-48 md:h-full"
        />
        <div>
          <div className="hidden md:block flex gap-3 mb-2">
            {tag.map((item, index) => (
              <span key={index} className="text-sm text-white bg-blue-400 mr-2 py-1 px-4 rounded-2xl" >{item}</span>
            ))}
          </div>
          <Title title={title} />
          <Subtitle subtitle={subtitle} />
          {/* <p>{subtitle}</p> */}
          <p className="text-md font-medium my-3">
            {"Rs."}
            {price}
          </p>
          <button onClick={() => console.log("Ok")} className="my-3 bg-black text-white py-2 px-5 rounded-lg hover:border hover:bg-white hover:text-black transition-all duration-150">Add To Cart</button>
        </div>
      </div>
    </Link>
  );
};
