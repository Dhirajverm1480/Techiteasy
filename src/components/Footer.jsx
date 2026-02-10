const Footer = () => {
  return (
    <footer className="w-full bg-black text-white page-frame">
      <section className="flex flex-col sm:flex-row sm:justify-between pt-16 pb-6">
        <div className="w-full sm:w-[50%] flex flex-col gap-3">
          <h2 className="text-2xl font-bold w-full sm:w-[70%]">
            Stay in the loop, With exclusive after and product previews.
          </h2>
          <div className="w-full py-[3%]">
            <form action="" className="w-full flex flex-col sm:flex-row gap-5">
              <input
                type="text"
                placeholder="Send your FeedBack"
                className="border-b outline-none w-full sm:w-64"
              />
              <button className="w-full sm:w-48 p-2 mb-4 lg:mb-0 font-bold rounded-lg bg-[#ff5500] hover:bg-transparent hover:border border-[#ff5500] hover:text-[#ff5500] cursor-pointer">
                Send{" "}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full sm:w-[50%] flex justify-end">
          <div className="w-full sm:w-[70%] flex justify-between">
            <ul className="flex flex-col">
              <h3 className="font-bold mb-3 text-lg">Pages</h3>
              <a href="#" className="text-[#888686] font-bold text-md mb-1 cursor-pointer">Home</a>
              <a href="#" className="text-[#888686] font-bold text-md mb-1 cursor-pointer">About</a>
              <a href="#" className="text-[#888686] font-bold text-md">Product</a>
            </ul>
            <ul className="flex flex-col">
              <h3 className="font-bold mb-3 text-lg">Information</h3>
              <a href="#" className="text-[#888686] font-bold text-md mb-1 cursor-pointer">Search</a>
              <a href="#" className="text-[#888686] font-bold text-md mb-1 cursor-pointer">WishList</a>
              <a href="#" className="text-[#888686] font-bold text-md mb-1 cursor-pointer">Contact</a>
            </ul>
            <ul className="flex flex-col">
              <h3 className="font-bold mb-3 text-lg">Legal</h3>
              <a href="#" className="text-[#888686] font-bold text-md mb-1 cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-[#888686] font-bold text-md mb-1 cursor-pointer">
                Term & Condition
              </a>
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
