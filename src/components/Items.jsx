import { Link } from "react-router-dom";
import Title from "./Title";

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
  return (
    <Link
      to={`/productDetails/${id}`}
      className="cursor-pointer p-2 rounded"
    >
      <div className="w-full flex gap-10 py-5 px-2 rounded-lg shadow overflow-hidden">
        <img
          src={image && image[0]}
          alt={title}
          width="186"
          height="186"
          loading="lazy"
          className="hover:scale-110 transition ease-in-out"
        />
        <div>
          {/* <div className="w-72 h-20 overflow-hidden">
            {tags.map((item, index) => (
              <span key={index} className="mr-4" >{item}</span>
            ))}
          </div> */}
          <Title title={title} />
          <p>{subtitle}</p>
          <p className="text-md font-medium">
            {"Rs."}
            {price}
          </p>
          <button className="my-5 bg-black text-white py-2 px-5 rounded-lg hover:border hover:bg-white hover:text-black transition-all duration-150">Add To Cart</button>
        </div>
      </div>
    </Link>
  );
};
