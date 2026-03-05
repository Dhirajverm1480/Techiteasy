import Contact_Img from "../assets/contact_img.webp";
import { Link } from "react-router-dom";

export const HeaderCard = ({
  image,
  title,
  path,
  pathTitle,
  textColor,
  gradient,
}) => {
  return (
    <div className="relative min-h-[450px] md:min-h-96">
      <div className="absolute inset-0 sm:-top-14">
        <img
          src={image || Contact_Img}
          alt="Contact_img"
          className="w-full h-full object-center object-top object-cover"
        />
      </div>
      <div className="absolute top-60 md:top-44  page-frame flex flex-col items-center md:items-start">
        <h1
          className={`text-white md:text-${textColor || "black"} text-5xl md:text-7xl font-bold font-poppins mb-7`}
        >
          {title}
        </h1>
        <div className="flex items-center">
          <Link to="/">
            <p
              className={`text-white md:text-${textColor || "black"} font-bold ml-2`}
            >
              Home
            </p>
          </Link>
          <span
            className={`text-white md:text-${textColor || "black"} font-bold mx-4`}
          >
            |
          </span>
          <Link to={`/${path}`}>
            <p
              className={`text-white md:text-${textColor || "black"} font-bold`}
            >
              {pathTitle}
            </p>
          </Link>
        </div>
      </div>
      {gradient ? (
        <div className="absolute -top-14 w-full h-full bg-gradient-to-t from-transparent to-[#ffffff57] z-5 rounded-lg"></div>
      ) : (
        ""
      )}
    </div>
  );
};
