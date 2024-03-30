"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonPorps } from "@/types";

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonPorps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
