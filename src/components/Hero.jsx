export const Hero = () => {
  return (
      <div className="absolute inset-0 sm:-top-14 -z-10 bg-[#dddff8]">
        <video
          src="https://framerusercontent.com/assets/bVq4NvV5SkQBR0D7VqD3K4BXIdM.mp4"
          autoPlay
          loop
          muted
          playsInline
          // preload="auto"
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
  );
};
