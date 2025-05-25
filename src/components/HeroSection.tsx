import React from "react";

const HeroSection: React.FC = () => {
  return (
    <main className="bg-[rgb(34,60,83)] flex flex-col gap-6 md:gap-8 lg:gap-12 lg:flex-row items-center justify-between py-10 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="w-full max-w-[36rem] lg:max-w-[48rem]">
        <h1 className="text-white text-[clamp(1.75rem,5vw,4rem)] text-center lg:text-start font-bold leading-[clamp(2.25rem,6vw,4.5rem)] py-4">
          Productivity That Feels Right
        </h1>
        <div className="pb-4 space-y-2">
          <p className="text-white text-[clamp(0.875rem,2.5vw,1rem)] text-center lg:text-start leading-[clamp(1.25rem,3vw,1.5rem)] font-extralight">
            Moodify helps you plan tasks that match how you feel.
          </p>
          <p className="text-white text-[clamp(0.875rem,2.5vw,1rem)] text-center lg:text-start leading-[clamp(1.25rem,3vw,1.5rem)] font-extralight">
            Simple, smart and mood-aware.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <a
            className="block w-[120px] text-center bg-white text-[rgb(34,63,89,1)] font-semibold box-content py-4 px-5 text-sm border-[rgb(96,181,255,1)] hover:bg-[rgb(96,181,255)] hover:text-white hover:border-transparent transition-all duration-300 ease-in-out transform border-2 rounded-lg"
            href="https://animepahe.ru/"
          >
            Download App
          </a>
        </div>
      </div>
      <div className="w-full max-w-[36rem] lg:max-w-[48rem]">
        <img
          className="w-full h-auto max-h-[36rem] object-contain"
          src="/images/hero-image.png"
          alt="hero-section image"
        />
      </div>
    </main>
  );
};

export default HeroSection;
