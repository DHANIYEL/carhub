import Image from "next/image";
import React from "react";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap mt-5 border-t border-gray-100 text-black-100">
      <div className="flex max-md:flex-col flex-wrap justify-between sm:px-16 gap-5 px-6 py-10">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub 2024 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-between mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All rights reserved</p>
        <div className="footer__copyrights-link">
          <Link className="text-gray-500 " href="/">
            Privacy Policy
          </Link>
          <Link className="text-gray-500 " href="/">
            Use of Term
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
