import React from "react";
import { RxGithubLogo, RxLinkedinLogo,  } from "react-icons/rx";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


import { FaSlack } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
      <div className="w-full h-full bg-black text-gray-200 shadow-lg p-14 flex flex-col gap-10 ">
        <div className="w-full h-full flex flex-wrap  justify-between gap-10 z-20">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-md text-white">Contact</p>
            <Link
              href="https://www.linkedin.com/in/shovonroy-mern-developer/"
              className="text-[15px] flex flex-row items-center   gap-2 cursor-pointer"
            >
              <RxLinkedinLogo />
              <span>Linkedin</span>
            </Link>

            <Link
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=shovonroy2003@gmail.com&tf=1
"
              className="text-[15px]  flex flex-row items-center   gap-2 cursor-pointer"
            >
              <IoMail />
              <span>                shovonroy2003@gmail.com
              </span>
            </Link>
            <p className="text-[15px]  flex flex-row items-center   gap-2 cursor-pointer"
            >
              <FaPhoneAlt />
              <span>+88 01904167449</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-md text-white">All Projects</div>

            <p className="flex flex-row items-center gap-2 cursor-pointer  ">
              <RxGithubLogo />
              <span>Github</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-md text-white">About</div>

            <Link
              href="/about-me"
              className="text-[15px]   cursor-pointer"
            >
              Learn about me
            </Link>

          </div>
        </div>

        <div className="text-sm text-center">
          &copy; shovonroy173 2024 Inc. All rights reserved
        </div>
      </div>

  );
};

export default Footer;
