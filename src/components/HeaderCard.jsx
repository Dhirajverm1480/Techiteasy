import React from "react";
import Contact_Img from "../assets/contact_img.webp";
import { Link } from "react-router-dom";

export const HeaderCard = ({image, title, path, pathTitle}) => {
  return (
    <div className="relative min-h-screen md:min-h-96">
      <div className="absolute inset-0 sm:-top-14">
        <img
          src={Contact_Img}
          alt="Contact_img"
          className="w-full h-[438px] object-center object-top object-cover"
        />
      </div>
      <div className="absolute top-60 md:top-44  page-frame flex flex-col items-center md:items-start">
        <h1 className="text-white md:text-black text-5xl md:text-7xl font-bold font-poppins mb-7">Contact Us</h1>
        <div className="flex items-center">
            <Link to='/'><p className="text-white md:text-black font-bold ml-2">Home</p></Link>
            <span className="text-white md:text-black font-bold mx-4" >|</span>
            <Link to='/about'><p className="text-white md:text-black font-bold" >About Us</p></Link>
        </div>
      </div>
    </div>
  );
};
{/* <img decoding="auto" width="4800" height="2873" sizes="100vw" srcset="https://framerusercontent.com/images/26YXRWZoFFzCaaZPkbOZIuGiWk.jpg?scale-down-to=512&amp;width=4800&amp;height=2873 512w,https://framerusercontent.com/images/26YXRWZoFFzCaaZPkbOZIuGiWk.jpg?scale-down-to=1024&amp;width=4800&amp;height=2873 1024w,https://framerusercontent.com/images/26YXRWZoFFzCaaZPkbOZIuGiWk.jpg?scale-down-to=2048&amp;width=4800&amp;height=2873 2048w,https://framerusercontent.com/images/26YXRWZoFFzCaaZPkbOZIuGiWk.jpg?scale-down-to=4096&amp;width=4800&amp;height=2873 4096w,https://framerusercontent.com/images/26YXRWZoFFzCaaZPkbOZIuGiWk.jpg?width=4800&amp;height=2873 4800w" src="https://framerusercontent.com/images/26YXRWZoFFzCaaZPkbOZIuGiWk.jpg?width=4800&amp;height=2873" alt="Image of a guy operating a laptop" style="display: block; width: 100%; height: 100%; border-radius: inherit; corner-shape: inherit; object-position: center top; object-fit: cover;"></img> */}

{/* <img decoding="auto" width="7952" height="5304" src="https://framerusercontent.com/images/psHANhKbKcEBFthsO179xLEwVc.jpg?width=7952&amp;height=5304" alt="Lady looking straight to the camera and smiling" style="display: block; width: 100%; height: 100%; border-radius: inherit; corner-shape: inherit; object-position: center top; object-fit: cover;"></img> */}