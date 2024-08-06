"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";


import { Projects_List } from "@/constants/index";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className=" w-full flex  md:flex-row gap-10 px-10">
        <Carousel 
        plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {Projects_List?.map((item) => (
              <CarouselItem
                key={item.project_name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard
                  title={item.project_name}
                  img={item.project_image}
                  live_link={item.live_link}
                  frontend={item.frontend}
                  backend={item?.backend}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>

    </div>
  );
};

export default Projects;
