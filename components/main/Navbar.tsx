import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TfiAlignRight } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px]  text-gray-300">
            Shovon Roy Shuvro
          </span>
        </Link>

        <div className="w-[500px] h-full hidden lg:flex flex-row items-center justify-between    ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/about-me" >
              About me
            </Link>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Real-World-Experiences
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-row gap-5   ">
          {Socials.map((social) => (
            <Link href={`${social.link}`} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>

        <div className=" block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <TfiAlignRight className="text-white" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col gap-y-3 text-xl font-semibold">
                    <Link href="/about-me">About me</Link>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Real-World-Experience</a>
                    <a href="#projects">Projects</a>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
