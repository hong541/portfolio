"use client";

import { motion } from "framer-motion";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "Project 1",
    description:
      "Fully responsive website with clean layout, optimized performance, and dynamic interactive elements.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/work/1.png",
    live: " https://hong541.github.io/Project-1/",
    github: "",
  },
  {
    num: "02",
    category: "UI/UX",
    title: "Project 2",
    description:
      "Smooth user experience with modern design system and intuitive interface for seamless user interaction.",
    stack: [
      { name: "HTML 5" },
      { name: "Materialize CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/2.png",
    live: "https://hong541.github.io/Project-3/",
    github: "",
  },
  {
    num: "03",
    category: "Front-end",
    title: "Project 3",
    description:
      "High-performance modern web app with sleek design, optimized routing, and fully responsive layout.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-textLight group-hover:text-second transition-all duration-500 capitalize ">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-textLight/60">{project.description}</p>
              {/* Project Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-second text-xl">
                    {item.name}
                    {/* Remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-textLight/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4 ">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#e4e4e4] flex justify-center items-center group">
                        <BsArrowUpRight className="text-textLight text-3xl group-hover:text-second" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#e4e4e4] flex justify-center items-center group">
                        <BsGithub className="text-textLight text-3xl group-hover:text-second" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="w-full h-full relative">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Button */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 xl:bottom-0 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-second hover:bg-second-hover text-textLight text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
