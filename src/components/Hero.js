import { PlayIcon } from "@heroicons/react/solid";
import React from "react";

function Hero() {
  return (
    // parent div
    <main className="container mt-4 md:flex flex-row-reverse justify-between items-center">
      <div className="md:max-w-[50%]">
        <img src="./images/amico.svg" alt="hero" />
      </div>

       {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          Take your SLA game to the next level
        </h1>
        <p className="mt-4 text-[18px] leading-[28px] font-normal">
          Integrate Intercom and Google Sheets to export all the missed SLA conversations and have in depth analysis of your SLA performance hourly.
        </p>
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <button className="primary-button">Request a Demo</button>
         </p>
      </div>
    </main>
  );
}

export default Hero;
