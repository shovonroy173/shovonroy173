import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  img: string;
  live_link: string ;
  frontend: string;
  // backend: string ;
}

const ProjectCard = ({ title, img, live_link, frontend }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full group">
      <div className="w-full h-[200px] flex justify-center">
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className="w-full h-full object-cover group-hover:scale-110  transition-all ease-in-out duration-300"
      />
      </div>
      

      <div className="relative p-4 flex flex-col gap-2 bg-black/50">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p>
          <span className="text-gray-200">Live Link:</span>{" "}
          <Link href={live_link} className="mt-2 text-blue-300 underline underline-offset-1 cursor-pointer">{live_link}</Link>
        </p>
        <p>
          <span className="text-gray-200">FrontEnd:</span>{" "}
          <Link href={frontend} className="mt-2 text-blue-300 underline  underline-offset-1">{frontend}</Link>
        </p>

      </div>
    </div>
  );
};

export default ProjectCard;
