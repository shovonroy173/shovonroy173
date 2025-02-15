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
      <div className="w-full h-full flex flex-row items-center justify-between mx-auto ">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin "
          />

          <span className="font-bold ml-[10px]  text-gray-300">
            Shovon Roy Shuvro
          </span>
        </Link>

        <div className=" hidden lg:flex flex-row items-center justify-between    ">
          <div className="flex items-center gap-10 justify-between w-full   text-gray-200">
            <Link href="/about-me" className="cursor-pointer hover:text-white hover:scale-110 hover:font-semibold transition-all ease-in-out duration-300">
              About me
            </Link>
            <a href="#skills" className="cursor-pointer hover:scale-110 hover:font-semibold  transition-all ease-in-out duration-300">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer hover:text-white hover:scale-110 hover:font-semibold transition-all ease-in-out duration-300">
              Real-World-Experiences
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white hover:scale-110 hover:font-semibold transition-all ease-in-out duration-300">
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
                className="rounded-full"
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
