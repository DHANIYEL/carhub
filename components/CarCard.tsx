"use client";

import { CustomButton } from "./CustomButton";
import { useState } from "react";
import { CarProps } from "@/types";
import React from "react";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

interface carCardProps {
  car: CarProps;
}

const CarCard = ({ car }: carCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group my-6">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-2xl font-extrabold">
        <span className="font-semibold text-xs self-start">$</span>
        {carRent}
        <span className="font-medium text-xs self-end">/day</span>
      </p>
      <div className="object-contain h-40 w-full relative my-3">
        <Image
          src="/hero.png"
          fill
          priority
          className="object-contain"
          alt="car img"
        />
      </div>
      <div className="relative w-full mt-2 flex">
        <div className="flex group-hover:invisible justify-between w-full text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            {transmission === "a" ? "Automatic" : "Manual"}
            <p className="text-[14px]"></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tier" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
