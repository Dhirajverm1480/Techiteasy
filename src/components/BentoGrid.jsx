export const BentoGrid = () => {
  return (
    <section className="mt-12 mb-8 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-auto md:auto-rows-[220px]">
        <div className="md:col-span-6 lg:col-span-4 md:row-span-2">
          <video
            src="https://framerusercontent.com/assets/kPVYFfkuZzRtO2tnXX2Lcb5MS8.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="md:col-span-3 lg:col-span-2 md:row-span-2 flex flex-col gap-4">
          <div className="flex-1">
            <video
              src="https://framerusercontent.com/assets/qpr0DHIHWImApUJmTc2MJZQPM.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="h-40 md:flex-1 w-full bg-orange-600 rounded-xl">
            <div></div>
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-2 md:row-span-2">
          <video
            src="https://framerusercontent.com/assets/d10TyCPywRtGk9729zm5H1yhoX4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export const BannerVid = () => {
  return (
    <section className="relative mt-16 mb-10 px-[5%] h-96 lg:h-[540px] overflow-hidden">
      <video
        src="https://framerusercontent.com/assets/U2dGKks5Wh8AvI4wJnpft0oH24.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute z-10 top-0 md:w-96 h-full text-white flex flex-col justify-center px-[5%]">
        <p className="bg-white text-black text-md font-bold w-34 text-center px-2 py-1 rounded-lg mb-5">Weekend Offer</p>
        <h1 className="text-4xl font-bold mb-6">20% OFF</h1>
        <p className="font-bold">
          Get a Premium Quality Product stay with you through in every thought
        </p>
        <button className="bg-orange-600 w-28  font-medium py-3 px-3 my-6 rounded-lg">Shop Sale</button>
      </div>
      <div className="absolute top-0 w-52 h-full bg-gradient-to-l from-transparent to-[#000000af] z-5 rounded-lg"></div>
    </section>
  );
};
