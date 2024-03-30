"use client";

import React from "react";
import { CustomButton } from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue mt-10 rounded-full text-white"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
