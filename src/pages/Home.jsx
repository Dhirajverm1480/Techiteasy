import { BentoGrid, BannerVid } from "../components/BentoGrid";
import { Hero } from "../components/Hero";
import ProductSections from "../components/ProductSections";
import { ReviewForHome } from "../components/ReviewCard";

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col sm:flex-row justify-end sm:items-end bg-[#dddff8] -z-4 pb-[4%] sm:p-0">
        <Hero />
        <div className="w-full sm:w-[60%] px-[4%] mb-[6%]">
          <header>
            <h1 className="text-3xl sm:text-6xl font-bold">
              Tech for Every Mind That Loves to Level Up
            </h1>

            <p className="mt-4 text-sm font-bold text-[#797979] font-popins">
              Whether you're gaming late, optimizing your setup, reading a great
              book, or exploring new software, we bring you the gear and tools
              that make every moment better.
            </p>
          </header>
        </div>
        <div className="w-full sm:w-[40%] mb-[8%] px-[4%] flex sm:justify-end">
          <div className="my-6">
            <a
              href="#"
              className="w-full border rounded p-3 mr-3 font-bold hover:bg-black hover:text-white cursor-pointer"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="w-full rounded p-3 mr-3 bg-black text-white font-bold hover:bg-transparent hover:text-black"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>
      <section className="mt-10 px-[4%]">
        <ProductSections />
      </section>
      <BentoGrid />
      <BannerVid />
      <ReviewForHome/>
    </>
  );
};

export default Home;

{
  /* <video src="https://framerusercontent.com/assets/kPVYFfkuZzRtO2tnXX2Lcb5MS8.mp4" loop="" preload="auto" playsinline="" style="cursor: auto; width: 100%; height: 100%; border-radius: 0px; display: block; object-fit: cover; background-color: rgba(0, 0, 0, 0); object-position: 50% 50%;" autoplay=""></video> */
}

{
  /* <video src="https://framerusercontent.com/assets/d10TyCPywRtGk9729zm5H1yhoX4.mp4" loop="" preload="auto" playsinline="" style="cursor: auto; width: 100%; height: 100%; border-radius: 0px; display: block; object-fit: cover; background-color: rgba(0, 0, 0, 0); object-position: 50% 50%;" autoplay=""></video> */
}

{
  /* <video src="https://framerusercontent.com/assets/qpr0DHIHWImApUJmTc2MJZQPM.mp4" loop="" preload="auto" playsinline="" style="cursor: auto; width: 100%; height: 100%; border-radius: 0px; display: block; object-fit: cover; background-color: rgba(0, 0, 0, 0); object-position: 50% 50%;" autoplay=""></video> */
}

{
  /* <video src="https://framerusercontent.com/assets/U2dGKks5Wh8AvI4wJnpft0oH24.mp4" loop="" preload="auto" muted="" playsinline="" style="cursor:auto;width:100%;height:100%;border-radius:0px;display:block;object-fit:cover;background-color:rgba(0, 0, 0, 0);object-position:50% 50%" autoplay=""></video> */
}
