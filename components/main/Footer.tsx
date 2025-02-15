import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import { FaSlack } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
      <div className="w-full h-full bg-black text-gray-200 shadow-lg p-14 flex flex-col gap-10">
        <div className="w-full h-full flex   justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-[16px] text-white">Contact</p>
            <Link
              href="https://www.linkedin.com/in/shovonroy-mern-developer/"
              className="text-[15px] flex flex-row items-center my-[15px] gap-2 cursor-pointer"
            >
              <RxLinkedinLogo />
              <span>Linkedin</span>
            </Link>

            <Link
              href="https://shovonworkspacegroup.slack.com"
              className="text-[15px]  flex flex-row items-center my-[15px] gap-2 cursor-pointer"
            >
              <FaSlack />
              <span>Slack</span>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-[16px] text-white">All Projects</div>

            <p className="flex flex-row items-center gap-2 cursor-pointer my-[15px]">
              <RxGithubLogo />
              <span>Github</span>
            </p>
          </div>
          <div className="  flex flex-col">
            <div className="font-bold text-[16px] text-white">About</div>

            <Link
              href="/about-me"
              className="text-[15px]   cursor-pointer"
            >
              Learn about me
            </Link>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px]  ">
                shovonroy2003@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="text-sm text-center">
          &copy; shovonroy173 2024 Inc. All rights reserved
        </div>
      </div>

  );
};

export default Footer;
