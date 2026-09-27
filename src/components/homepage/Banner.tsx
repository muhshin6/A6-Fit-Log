import Image from 'next/image';
import React from 'react';
import banner from "@/assets/banner.png"

const Banner = () => {
    return (
      <div className="container mx-auto px-6 pt-12 pb-16">
        <div className="flex md:flex-row flex-col  justify-between items-center gap-10 p-14 bg-[#191c22] rounded-2xl ">
          <div className="flex flex-col items-start justify-center gap-5  ">
            <h3 className="text-lime-300 bg-transparent font-semibold text-xl ">
              WORKOUT LIBRARY
            </h3>
            <h1 className="text-6xl font-bold text-white">
              TRAIN WITH INTENT. LOG <br />
              EVERY SET.
            </h1>
            <p>
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br />
              into today's plan, and watch the week's work add up.
            </p>
            <button className=" rounded px-4 py-1 font-semibold bg-lime-300 text-black">
              BROWSE WORKOUTS
            </button>
          </div>
          <Image src={banner} width={350} height={350} alt="Banner" />
        </div>
      </div>
    );
};

export default Banner;