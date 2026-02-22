export const Hero = () => {
  return (
      <div className="absolute inset-0 sm:-top-14 -z-10 bg-[#dddff8] overflow-hidden">
        <video
          src="https://framerusercontent.com/assets/bVq4NvV5SkQBR0D7VqD3K4BXIdM.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/fallback.jpg"
          // preload="auto"
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          className="w-full h-[60%] md:h-full object-cover pointer-events-none"
        />
      </div>
  );
};
