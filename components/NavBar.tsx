import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from "./CustomButton";

const NavBar = () => {
  return (
    <header className="absolute w-full z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center ">
          <Image
            src="/logo.svg"
            alt="logo"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue bg-white rounded-full "
        />
      </nav>
    </header>
  );
};

export default NavBar;
