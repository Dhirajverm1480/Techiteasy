import React from "react";

export const Hero = () => {
  return (
      <div className="absolute -top-14 -z-50 overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/bVq4NvV5SkQBR0D7VqD3K4BXIdM.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>
      //   {/* <video src="https://framerusercontent.com/assets/bVq4NvV5SkQBR0D7VqD3K4BXIdM.mp4" loop="" preload="auto" muted="" playsinline="" style="cursor:auto;width:100%;height:100%;border-radius:0px;display:block;object-fit:cover;background-color:rgba(0, 0, 0, 0);object-position:50% 50%" autoplay=""></video> */}
  );
};
