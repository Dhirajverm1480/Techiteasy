import { useRef } from "react";
import { PeopleImg } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export const AnimatedCard = () => {
  const container = useRef(null);
  const leftAniImg = useRef(null);
  const rightAniImg = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true, // 👈 key part
      },
    });

    tl.to(leftAniImg.current, {
      x: -150,
      duration: 1,
      ease: "none",
    }).to(
      rightAniImg.current,
      {
        x: 150,
        duration: 1,
        ease: "none",
      },
      "<",
    );
  });

  return (
    <div
      ref={container}
      className="relative flex justify-center items-end my-10 py-5"
    >
      <div className="absolute z-10 w-44 md:w-88 h-52 md:h-96 shadow-2xl rounded-xl overflow-hidden">
        <img src={PeopleImg.People_3} alt="" className="w-full h-full" />
      </div>
      <div
        ref={leftAniImg}
        className="w-44 md:w-80 h-44 md:h-80 shadow-2xl rounded-xl overflow-hidden -rotate-12"
      >
        <img src={PeopleImg.People_2} alt="" className="w-full h-full" />
      </div>
      <div
        ref={rightAniImg}
        className="w-44 md:w-80 h-44 md:h-80 shadow-2xl rounded-xl overflow-hidden rotate-12 "
      >
        <img src={PeopleImg.People_1} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};
