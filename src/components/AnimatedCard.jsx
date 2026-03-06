import { PeopleImg } from "../constants";

export const AnimatedCard = () => {
  return (
    <div className="relative flex justify-center items-end my-10 py-3">
      <div className="absolute z-10 w-44 md:w-88 h-52 md:h-96 shadow-2xl rounded-xl overflow-hidden">
        <img src={PeopleImg.People_3} alt="" className="w-full h-full" />
      </div>
      <div className="w-44 md:w-80 h-44 md:h-80 shadow-2xl rounded-xl overflow-hidden -rotate-12 md:-translate-x-48">
        <img src={PeopleImg.People_2} alt="" className="w-full h-full" />
      </div>
      <div className="w-44 md:w-80 h-44 md:h-80 shadow-2xl rounded-xl overflow-hidden rotate-12 md:translate-x-48">
        <img src={PeopleImg.People_1} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
