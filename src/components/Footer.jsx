import React from "react";

const footerSections = [
  {
    title: "Pages",
    links: ["Home", "About", "Product"],
  },
  {
    title: "Information",
    links: ["Search", "Wishlist", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions"],
  },
];

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="font-bold mb-4 text-lg">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-gray-400 font-medium hover:text-white transition"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted");
  };

  return (
    <footer className="w-full bg-black text-white page-frame">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold max-w-md">
              Stay in the loop with exclusive offers and product previews.
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="flex-1 border-b border-gray-500 bg-transparent outline-none py-2"
              />

              <button
                type="submit"
                className="px-6 py-2 font-bold rounded-lg bg-orange-600 hover:bg-transparent hover:border border-orange-600 hover:text-orange-600 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
