import { Hero } from "../components/Hero";
import ProductSections from "../components/ProductSections";

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-end bg-[#dddff8] -z-4">
        {/* #aeb5cf, #dddff8 */}
        <Hero />
        <div className="w-full sm:w-[50%] px-[4%] mb-[6%]">
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
          <div className="my-6">
            <a href="#" className="border rounded p-2 mr-3">
              Shop Now
            </a>
            <a href="#" className="border rounded p-2 mr-3">
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
