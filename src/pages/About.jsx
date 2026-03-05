import { FeatureCard } from "../components/FeatureCard";
import { HeaderCard } from "../components/HeaderCard";
import { StoreCard } from "../components/StoreCard";
import { Img, linearSlide } from "../constants";

const About = () => {
  return (
    <section className="min-h-screen bg-[#f2f2f2]">
      <HeaderCard
        title={"About Us"}
        path={"contact"}
        pathTitle={"Contact Us"}
      />
      <section className="md:mt-10 page-frame">
        <div className="flex items-center justify-center gap-2 mb-5">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <h3 className="text-lg font-medium">About Us</h3>
        </div>
        <p className="text-3xl font-bold leading-14 text-center pb-10 md:px-[9%]">
          Your trusted destination for premium tech gadgets, games, software,
          and books. We deliver quality products and exceptional service to
          lovers of gaming, technology, and reading.
        </p>
        <div className="relative flex justify-center items-center my-5 py-3">
          <div className="w-96 h-96 shadow-2xl rounded-xl"></div>
          <div className="absolute w-96 h-96 shadow-2xl rounded-xl"></div>
          <div className="absolute w-96 h-96 shadow-2xl rounded-xl"></div>
        </div>
      </section>
      <div className="overflow-hidden w-full my-3">
        <div className="flex gap-20 py-5 animate-marquee whitespace-nowrap">
          {[...linearSlide, ...linearSlide].map(({ name }, index) => (
            <div key={index} className="shrink-0">
              <span className="text-gray-400 text-lg font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-white md:mt-10 pb-14 pointer-events-none">
        <div className="page-frame py-12">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <h3 className="text-lg font-medium">Why Choose Us</h3>
          </div>

          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="max-w-xl text-3xl md:text-4xl font-bold leading-tight pb-4">
              Experience Product the Way It's Meant to Be
            </h1>
            <p className="max-w-2xl text-lg text-gray-500 font-medium">
              Experience exceptional quality, expert guidance, and customer
              service that puts your satisfaction first every step of the way.
            </p>
          </div>

          {/* Grid Section */}
          <div className="bg-[#f2f2f2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl p-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <FeatureCard
                title="Curated Selection"
                description="We test and choose only products that meet our quality standards"
              />
              <FeatureCard
                title="Honest Advice"
                description="We recommend what's right for you, not what costs the most"
              />
            </div>

            {/* Center Highlight */}
            <div className="rounded-xl bg-red-400 min-h-[300px] shadow-sm"></div>

            {/* Right Column */}
            <div className="md:col-span-2 lg:col-span-1 flex flex-col md:flex-row lg:flex-col gap-6">
              <FeatureCard
                title="Full Support"
                description="From setup guidance to technical support, we're here to help"
              />
              <FeatureCard
                title="Quality Warranty"
                description="30-day returns and full manufacturer warranties on everything we sell"
              />
            </div>
          </div>
        </div>
      </section>
      <StoreCard />

      <section className="bg-white min-h-screen flex flex-col md:flex-row md:items-center page-frame pointer-events-none">
        <div className="w-full h-full bg-[#f2f2f2] rounded-xl p-10">
          <div className="w-full h-96 bg-white rounded-xl overflow-hidden">
            <img src={Img.Owner_Img} alt="" className="object-center" />
          </div>
        </div>
        <div className="page-frame">
          <div className="flex items-center gap-2 mt-6 md:mt-0 mb-3">
            <div className="w-5 border"></div>
            <p className="font-medium">FOUNDER</p>
          </div>
          <h2 className="text-3xl font-bold my-6">
            The Vision Behind Our Store
          </h2>
          <p className="text-gray-500 font-medium mb-10">
            Founded in 2026 by gaming and tech enthusiast Dhiraj Verma, our
            store was born from a simple frustration: finding quality
            electronics shouldn’t be complicated or overwhelming. With over 10
            years of experience in gaming and technology, and a passion for
            helping people discover exceptional products, Dhiraj built this
            company on the belief that everyone deserves access to premium
            electronics games and book backed by genuine expertise and honest
            guidance.
          </p>
          <div>
            <h3 className="text-4xl [font-family:cursive] mb-3">Dhiraj</h3>
            <h4 className="text-lg font-medium">Dhiraj Verma</h4>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
