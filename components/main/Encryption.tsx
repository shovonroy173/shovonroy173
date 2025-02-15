"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/constants";

const Encryption = () => {
  return (
    <div
      id="experience"
      className="relative flex flex-col items-center justify-center  w-full h-auto"
    >
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
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center   z-[20] ">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="bg-[#030014]/90 w-[350px]    rounded-xl text-white shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/90 flex flex-col items-center justify-center gap-5 p-5 group hover:scale-105 transition-all ease-in-out duration-300"
          >
            <Image
              src={item?.img}
              width={300}
              height={100}
              alt={item.company}
              className="rounded-lg object-cover"
            />
            <div className="flex flex-col gap-2">
            <p>
                Position:{" "}
                <span className="text-gray-400">
                 {item.title}
                </span>
              </p>
              <p >
                Company:{" "}
                <span className="text-gray-400">
                  {item.company}
                  </span>
              </p>
              <p>
                Task:{" "}
                <span className="text-gray-400">
                 {item.task}
                </span>
              </p>
              <p>
                Description:{" "}
                <span className="text-gray-400">
                  {item.description}
                </span>
              </p>
              <p className="opacity-0 h-0 group-hover:opacity-100 group-hover:h-10 transition-all ease-in-out duration-300">
                Company Url:{" "}
                <Link href={item.url} className="text-gray-400">
                  {item.url}
                </Link>
              </p>
            </div>
          </div>
        ))}


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
