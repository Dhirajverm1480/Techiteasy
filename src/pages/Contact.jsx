import { HeaderCard } from "../components/HeaderCard";

const Contact = () => {
  return (
    <section className="bg-[#f2f2f2] min-h-screen">
      <HeaderCard />
      <section className="flex flex-col md:flex-row justify-between gap-10 page-frame md:mt-10">
        <div className="w-[40%] flex flex-col justify-between bg-white rounded-md shadow-xs page-frame">
          <div className="mb-[20%] mt-3 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" ></div>
              <h3 className="text-lg font-medium">Contact</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold my-4">Get In Touch</h2>
            <p className="text-sm md:text-lg text-gray-500 font-medium">
              Whether you have questions, want to book a consultation, or need
              support with your product, our team is here to help
            </p>
          </div>
          <div className="flex items-center gap-5 mt-4 mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-sm"></div>
            <div>
              <p className="text-md md:text-lg text-gray-500">Head of Sales</p>
              <h2 className="text-lg md:text-2xl font-bold">Sarah Jude</h2>
              <a href="#" className="text-lg md:text-xl text-gray-500">sarahjune@mail.com</a>
            </div>
          </div>
        </div>
        <div className="w-[40%] bg-white rounded-md shadow-xs page-frame">
          <form action="">
            <p className="font-medium mt-7 mb-1">Name</p>
            <input type="text" placeholder="Enter your Name" className="w-full border-b py-3 outline-none" />

            <p className="font-medium mt-7 mb-1">Email</p>
            <input type="text" placeholder="Enter your Name" className="w-full border-b py-3 outline-none" />

            <p className="font-medium mt-7 mb-1">Phone</p>
            <input type="text" placeholder="Enter your Name" className="w-full border-b py-3 outline-none" />

            <p className="font-medium mt-7 mb-1">Message</p>
            <textarea name="" id="" rows={4} placeholder="Enter your Message" className="w-full border-b outline-none"></textarea>

            <button className="w-full h-10 md:h-12 bg-orange-300 text-white font-bold text-lg mt-5 rounded-md shadow cursor-pointer">Send</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
