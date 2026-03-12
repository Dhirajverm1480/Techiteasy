export const Hero = () => {
  return (
    <div className="absolute inset-0 sm:-top-14 z-0 bg-[#dddff8]">
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
        className="absolute inset-0 w-full h-[80%] md:h-full object-cover object-top pointer-events-none"
      />
      {/* Blend Gradient */}
      <div className="absolute bottom-[18%] md:bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#dddff8]" />
    </div>
  );
};
