import { HeaderCard } from "../components/HeaderCard";

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
        <div className="flex justify-center items-center my-5 py-3">
          <div className="w-96 h-96 shadow-2xl rounded-xl"></div>
        </div>
      </section>
      <section className="page-frame bg-white md:mt-10 pointer-events-none">
        <div className="flex items-center justify-center gap-2 mb-6 mt-6">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <h3 className="text-lg font-medium">Why Choose Us</h3>
        </div>
        <div className="flex flex-col items-center mb-5">
          <h1 className="w-96 text-center text-3xl leading-12 font-bold pb-4">
            Experience Product the Way It's Meant to Be
          </h1>
          <p className="w-full md:w-1/2 text-center text-lg text-gray-500 font-medium pb-4">
            Experience exceptional quality, expert guidance, and customer
            service that puts your satisfaction first every step of the way.
          </p>
        </div>
        <div className="w-full bg-[#f2f2f2] flex flex-col md:flex-row gap-4 rounded-xl page-frame">
          <div>
            <div className="md:w-84 h-48 flex flex-col justify-center bg-white rounded-xl px-6 mb-4">
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
              <h3 className="text-lg font-bold my-3">Curated Selection</h3>
              <p className="text-md font-medium text-gray-500">
                We test and choose only products that meet our quality standards
              </p>
            </div>
            <div className="md:w-84 h-48 flex flex-col justify-center bg-white rounded-xl px-6">
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
              <h3 className="text-lg font-bold my-3">Honest Advice</h3>
              <p className="text-md font-medium text-gray-500">
                We recommend what's right for you, not what costs the most
              </p>
            </div>
          </div>
          <div className="w-96 rounded-xl shadow-sm"></div>
          <div>
            <div className="md:w-84 h-48 flex flex-col justify-center bg-white rounded-xl px-6 mb-4">
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
              <h3 className="text-lg font-bold my-3">Full Support</h3>
              <p className="text-md font-medium text-gray-500">
                From setup guidance to technical support, we're here to help
              </p>
            </div>
            <div className="md:w-84 h-48 flex flex-col justify-center bg-white rounded-xl px-6">
              <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
              <h3 className="text-lg font-bold my-3">Quality Warrenty</h3>
              <p className="text-md font-medium text-gray-500">
                30-days returns and full manufacturer Warranties on everything
                we sell
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white min-h-screen flex flex-col md:flex-row md:items-center page-frame">
        <div className="w-full h-full bg-[#f2f2f2] rounded-xl p-10">
          <div className="w-full h-96 bg-white rounded-xl"></div>
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
