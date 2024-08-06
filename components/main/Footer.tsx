import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import { FaSlack } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
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
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">All Projects</div>

            <p className="flex flex-row items-center gap-2 cursor-pointer my-[15px]">
              <RxGithubLogo />
              <span>Github</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <Link
              href="/about-me"
              className="text-[15px] ml-[6px] cursor-pointer"
            >
              Learn about me
            </Link>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                shovonroy2003@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; shovonroy173 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
