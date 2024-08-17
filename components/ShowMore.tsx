"use client";

import React from "react";
import { CustomButton } from "./CustomButton";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="flex-center w-full gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
          btnType="button"
        />
      )}
    </div>
  );
};

export default ShowMore;
