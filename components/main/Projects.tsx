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

import Autoplay from "embla-carousel-autoplay";

import { Projects_List } from "@/constants/index";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-16 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
        <Carousel
          plugins={[Autoplay()]}
          className="max-w-7xl z-20  flex justify-center"
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
                  // backend={item.backend}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>

  );
};

export default Projects;
