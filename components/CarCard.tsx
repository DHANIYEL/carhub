"use client";

import { CustomButton } from "./CustomButton";
import { useState } from "react";
import { CarProps } from "@/types";
import React from "react";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

const CarCard = ({ car }: CarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
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
    </div>
  );
};

export default CarCard;
