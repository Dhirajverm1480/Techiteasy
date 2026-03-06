import { useState } from "react";
import { Img } from "../constants";

export const StoreCard = () => {
  const [visible, setVisible] = useState({
    block_One: false,
    block_Two: false,
    block_Three: false,
  });
  const [active, setActive] = useState(1)

  const toggle = (id) => {
    setActive(active === id? null : id)
  }

  // const toggleVisibility = (key) => {
  //   setVisible((prev) => ({
  //     ...prev,
  //     [key]: !prev[key],
  //   }));
  // };

  return (
    <section className="flex flex-col md:flex-row justify-between md:mt-10 page-frame">
      <div className="w-full md:w-[43%]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <h3 className="text-lg font-medium">Our Store</h3>
        </div>
        <h1 className="text-4xl font-bold mt-6 mb-12">
          Visit us at one of our locations nationwide
        </h1>
        <div className="w-full h-80 mb-10 rounded-xl overflow-hidden">
          <img src={Img.ShowRoom_Day} alt="" />
        </div>
      </div>
      <div className="w-full md:w-[53%]">
        <div
          // onClick={() => toggleVisibility("block_One")}
          onClick={() => toggle(1)}
          className="bg-white w-full px-8 py-6 mb-4 rounded-lg cursor-pointer"
        >
          <h3 className="text-xl font-bold cursor-pointer">Delhi Tech Hub</h3>
          {active === 1 && (
            <div className="">
              <div className="flex flex-col gap-2 py-6">
                <p>(555) 123-4573</p>
                <p>delhiTech@mail.com</p>
                <p>254 tech street, heart of Delhi</p>
              </div>
              <hr />
              <div>
                <h4 className="text-lg font-bold mt-5 mb-2">
                  Hour of operation
                </h4>
                <p className="mb-3">
                  Monday to Friday: 10:00 a.m. to 12:00 p.m. and 2:00 p.m. to
                  7:00 p.m.
                </p>
                <p>Saturday and Sunday: 10:00 a.m. to p.m.</p>
              </div>
            </div>
          )}
        </div>
        <div
          // onClick={() => toggleVisibility("block_Two")}
          onClick={() => toggle(2)}
          className="bg-white w-full px-8 py-6 mb-4 rounded-lg cursor-pointer"
        >
          <h3 className="text-xl font-bold cursor-pointer">Delhi Tech Hub</h3>
          {active === 2 && (
            <div>
              <div className="flex flex-col gap-2 py-6">
                <p>(555) 123-4573</p>
                <p>delhiTech@mail.com</p>
                <p>254 tech street, heart of Delhi</p>
              </div>
              <hr />
              <div>
                <h4 className="text-lg font-bold mt-5 mb-2">
                  Hour of operation
                </h4>
                <p className="mb-3">
                  Monday to Friday: 10:00 a.m. to 12:00 p.m. and 2:00 p.m. to
                  7:00 p.m.
                </p>
                <p>Saturday and Sunday: 10:00 a.m. to p.m.</p>
              </div>
            </div>
          )}
        </div>
        <div
          // onClick={() => toggleVisibility("block_Three")}
          onClick={() => toggle(3)}
          className="bg-white w-full px-8 py-6 rounded-lg cursor-pointer"
        >
          <h3 className="text-xl font-bold cursor-pointer">Delhi Tech Hub</h3>
          {active === 3 && (
            <div>
              <div className="flex flex-col gap-2 py-6">
                <p>(555) 123-4573</p>
                <p>delhiTech@mail.com</p>
                <p>254 tech street, heart of Delhi</p>
              </div>
              <hr />
              <div>
                <h4 className="text-lg font-bold mt-5 mb-2">
                  Hour of operation
                </h4>
                <p className="mb-3">
                  Monday to Friday: 10:00 a.m. to 12:00 p.m. and 2:00 p.m. to
                  7:00 p.m.
                </p>
                <p>Saturday and Sunday: 10:00 a.m. to p.m.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
