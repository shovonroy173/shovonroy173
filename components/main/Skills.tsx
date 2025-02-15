
"use client"
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Language,
  Other_skill,
  Deploy, 
  Skill_data,
} from "@/constants";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <motion.div
          variants={slideInFromRight(0.5)}
          className="Welcome-box py-2 px-6 border border-[#7042f88b] opacity-[.9]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
          <h1 className="text-white text-lg">
            Next.js Specialization
          </h1>
        </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <motion.div
          variants={slideInFromLeft(0.6)}
          className="Welcome-box py-2 px-6 border border-[#7042f88b] opacity-[.9]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
          <h1 className="text-white text-[20px]">
            FrontEnd
          </h1>
        </motion.div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <motion.div
          variants={slideInFromRight(0.7)}
          className="Welcome-box py-2 px-6 border border-[#7042f88b] opacity-[.9]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
          <h1 className="text-white text-[20px]">
            BackEnd
          </h1>
        </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <motion.div
          variants={slideInFromLeft(0.8)}
          className="Welcome-box py-2 px-6 border border-[#7042f88b] opacity-[.9]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
          <h1 className="text-white text-[20px]">
            Language
          </h1>
        </motion.div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Language.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <motion.div
          variants={slideInFromRight(0.8)}
          className="Welcome-box py-2 px-6 border border-[#7042f88b] opacity-[.9]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
          <h1 className="text-white text-[20px]">
            Version Control & Deployment
          </h1>
        </motion.div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Deploy.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <motion.div
          variants={slideInFromLeft(1)}
          className="Welcome-box py-2 px-6 border border-[#7042f88b] opacity-[.9]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-5" />
          <h1 className="text-white text-[20px]">
            Others
          </h1>
        </motion.div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/public_cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
