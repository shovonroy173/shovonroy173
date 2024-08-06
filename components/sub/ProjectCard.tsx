import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  img: string;
  live_link: string ;
  frontend: string;
  backend?: string | undefined;
}

const ProjectCard = ({ title, img, live_link, frontend, backend }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={img}
        alt={title}
        width={500}
        height={500}
        className="w-full object-contain"
      />

      <div className="relative p-4 flex flex-col gap-y-2">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p>
          <span className="text-gray-200">Live Link:</span>{" "}
          <Link href={live_link} className="mt-2 text-blue-300 underline underline-offset-1">{live_link}</Link>
        </p>
        <p>
          <span className="text-gray-200">FrontEnd:</span>{" "}
          <Link href={frontend} className="mt-2 text-blue-300 underline  underline-offset-1">{frontend}</Link>
        </p>
        <p>
          <span className="text-gray-200">Backend:</span>
          
          
          
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
