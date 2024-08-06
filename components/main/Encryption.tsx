"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const Encryption = () => {
  return (
    <div id="experience" className="relative flex flex-col items-center justify-center  w-full h-auto">
      <div className="z-[20] mb-7">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200 "
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Real World Experience
          </span>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-4 items-center justify-center   z-[20] ">
        <div className="bg-[#030014]/[.9]  w-[400px] h-[500px]  rounded-lg text-white shadow-lg shadow-[#2A0E61]/50">
          <Image
            src="/opensource.png"
            width={400}
            height={100}
            alt="opensource"
            className="rounded-t-lg"
          />
          <hr />
          <div className="flex flex-col m-2 gap-y-1">
            <p className="text-xl">
              The Product I Worked On:{" "}
              <Link
                href="https://www.projectmate.net/"
                className="underline italic text-gray-400"
              >
                www.projectmate.net
              </Link>
            </p>
            <p>
              Description: <span className="italic text-gray-200"></span>
            </p>
          </div>
        </div>

        <div className="bg-[#030014]/[.9] w-[400px] h-[500px]   rounded-lg text-white shadow-lg shadow-[#2A0E61]/50">
          <Image
            src="/acl.jpg"
            width={400}
            height={100}
            alt="opensource"
            className="h-[250px] w-full rounded-t-lg"
          />
          <hr />
          <div className="flex flex-col m-2 gap-y-1">
            <p className="text-xl">
              The Company I Worked With:{" "}
              <Link
                href="https://alphacodelabs.com/"
                className="underline italic text-gray-400"
              >
                alphacodelabs.com
              </Link>
            </p>
            <p>
              Description: <span className="italic text-gray-200"></span>
            </p>
          </div>
        </div>

        <div className="bg-[#030014]/[.9] w-[400px] h-[500px]  rounded-lg text-white shadow-lg shadow-[#2A0E61]/50">
          <Image
            src="/janos.jpg"
            width={400}
            height={100}
            alt="opensource"
            className="h-[250px] rounded-t-lg"
          />
          <hr />
          <div className="flex flex-col m-2 gap-y-1">
            <p className="text-xl">
              The Company I Worked With:{" "}
              <Link
                href="http://janos.com.bd/"
                className="underline italic text-gray-400"
              >
                janos.com.bd
              </Link>
            </p>
            <p>
              Description: <span className="italic text-gray-200"></span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/public_encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
