import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <section className="flex flex-col sm:flex-row sm:justify-between px-[4%] pt-16 pb-6">
        <div className="w-full sm:w-[50%] flex flex-col gap-3">
          <h2 className="text-2xl font-bold w-full sm:w-[70%]">
            Stay in the loop, With exclusive after and product previews.
          </h2>
          <div className="w-full py-[3%] flex justify-between">
            <form action="" className="w-full flex flex-col sm:flex-row gap-5">
              <input
                type="text"
                placeholder="Send your FeedBack"
                className="border-b outline-none w-full sm:w-64"
              />
              <button className="w-full sm:w-48 p-2 mb-4 font-bold rounded-lg bg-[#ff5500]">
                Send{" "}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-[50%] flex justify-end">
          <div className="w-full sm:w-[60%] flex justify-between">
            <ul>
              <h3 className="font-bold mb-3 text-3">Pages</h3>
              <li className="text-[#888686] font-bold text-3">Home</li>
              <li className="text-[#888686] font-bold text-3">About</li>
              <li className="text-[#888686] font-bold text-3">Product</li>
            </ul>
            <ul>
              <h3 className="font-bold mb-3">Information</h3>
              <li className="text-[#888686] font-bold text-3">Search</li>
              {/* <li>WishList</li> */}
              <li className="text-[#888686] font-bold text-3">Contact</li>
            </ul>
            <ul>
              <h3 className="font-bold mb-3">Legal</h3>
              <li className="text-[#888686] font-bold text-3">Privacy Policy</li>
              <li className="text-[#888686] font-bold text-3">Term & Condition</li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
      {/* <h2>footer</h2>
      <p>&copy; 2024 Your Company. All rights reserved.</p> */}
    </footer>
  );
};

export default Footer;
