"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const page = () => {
  return (
    <div className="mt-20 text-white">
      <div className="flex flex-col lg:flex-row items-center place-content-center  gap-10">
        <div className="flex flex-col gap-y-5">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl font-semibold">
            Shovon Roy Shuvro
          </p>

          <div>
            <Typewriter
              options={{
                strings: ["MERN", "DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            />
            <p className="text-xl font-bold">
              Full stack javascript/typescript developer|| SaaS Product
              Developer
            </p>
            <Typewriter
              options={{
                strings: ["Next.js", "React.js", "Expresss.js", "Node.js"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="flex flex-col gap-y-3 bg-slate-400 p-2 rounded-lg">
            <p className="text-2xl text-gray-100 font-semibold underline underline-offset-2">
              Work Experience
            </p>
            <div className="bg-slate-600 p-1 rounded-sm">
              <p className="text-xl text-gray-200 font-normal">
                Alpha Code Labs, Gurgaon, India
              </p>
              <p className="text-xl text-gray-200 font-normal">
                Full Stack Developer
              </p>
              <p className="text-xl text-gray-200 font-normal">
                November, 2023 - February, 2024
              </p>
            </div>
            <div className="bg-slate-600 p-1 rounded-sm">
              <p className="text-xl text-gray-200 font-normal">
                Janos Sofsys Engineering Limited, Dhaka
              </p>
              <p className="text-xl text-gray-200 font-normal">Intern</p>
              <p className="text-xl text-gray-200 font-normal">
                September, 2023 - October, 2023
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 bg-slate-400 p-2 rounded-lg">
            <p className="text-2xl text-gray-100 font-semibold underline underline-offset-2">
              Education
            </p>
            <div className="bg-slate-600 p-1 rounded-sm">
              <p className="text-xl text-gray-200 font-normal">
                Bachelor of Technology
              </p>
              <p className="text-xl text-gray-200 font-normal">
                Computer Science & Engineering
              </p>
              <p className="text-xl text-gray-200 font-normal">
                Kurukshetra University, India
              </p>
              <p className="text-xl text-gray-200 font-normal">8.07/10 SGPA</p>
              <p className="text-xl text-gray-200 font-normal">2020 - 2024</p>
            </div>
            <div className="bg-slate-600 p-1 rounded-sm">
              <p className="text-xl text-gray-200 font-normal">
                Higher Secondary Certificate{" "}
              </p>
              <p className="text-xl text-gray-200 font-normal">
                Udayan Higher Secondary School, Dhaka
              </p>
              <p className="text-xl text-gray-200 font-normal">4.83 GPA</p>
              <p className="text-xl text-gray-200 font-normal">2017 - 2019</p>
            </div>
            <div className="bg-slate-600 p-1 rounded-sm">
              <p className="text-xl text-gray-200 font-normal">
                Secondary School Certificate
              </p>
              <p className="text-xl text-gray-200 font-normal">
                Narinda Govt. High School, Dhaka
              </p>
              <p className="text-xl text-gray-200 font-normal">5.00 GPA</p>
              <p className="text-xl text-gray-200 font-normal">2015 - 2017</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 bg-slate-400 p-2 rounded-lg">
            <div className="flex flex-col gap-y-3 bg-slate-400 p-2 rounded-lg">
              <p className="text-2xl text-gray-100 font-semibold underline underline-offset-2">
                Address
              </p>
              <div className="bg-slate-600 p-1 rounded-sm">
                <p>Present Address:</p>
                <p>9, West Jatrabari, Dhaka</p>
              </div>
              <div className="bg-slate-600 p-1 rounded-sm">
                <p>Permenent Address:</p>
                <p>Dumurpota, Satkhira, Ashshuni, Satkhira</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src="/img.png" alt="self" width={300} height={300} className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default page;
