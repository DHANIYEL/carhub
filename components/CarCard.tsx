"use client";

import { CustomButton } from "./CustomButton";
import { useState } from "react";
import { CarProps } from "@/types";
import React from "react";

const CarCard = ({ car }: CarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return <div className="car-card">asd</div>;
};

export default CarCard;
