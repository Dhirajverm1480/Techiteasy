import { Link } from "react-router-dom";

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
