import { Hero } from "../components/Hero";
import ProductSections from "../components/ProductSections";

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col sm:flex-row justify-end sm:items-end bg-[#dddff8] -z-4 pb-[4%] sm:p-0">
        {/* #aeb5cf, #dddff8 #b0b6d0*/}
        <Hero />
        <div className="w-full sm:w-[60%] page-frame mb-[6%]">
          <header>
            <h1 className="text-4xl sm:text-6xl font-bold">
              Tech for Every Mind That Loves to Level Up
            </h1>

            <p className="mt-4 text-sm font-bold text-[#797979] font-popins">
              Whether you're gaming late, optimizing your setup, reading a great
              book, or exploring new software, we bring you the gear and tools
              that make every moment better.
            </p>
          </header>
        </div>
        <div className="w-full sm:w-[40%] mb-[6%] px-[4%] flex sm:justify-end">
          <div className="my-6">
            <a href="#" className="w-full border rounded p-3 mr-3 font-bold hover:bg-black hover:text-white cursor-pointer">
              Shop Now
            </a>
            <a href="#" className="w-full rounded p-3 mr-3 bg-black text-white font-bold hover:bg-transparent hover:text-black">
              Explore More
            </a>
          </div>
        </div>
      </section>
      <section className="mt-10 px-[4%]">
        <ProductSections />
      </section>
    </>
  );
};

export default Home;
