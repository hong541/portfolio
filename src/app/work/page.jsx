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
    category: "Event Management System",
    title: "Project 1",
    description:
      "A modern event management platform built with the MERN Stack (MongoDB, Express.js, React, Node.js) This project was developed to streamline how organizers manage events covering everything from ticketing and event categories to payments and participant data in a seamless workflow.",
    stack: [
      { name: "React" },
      { name: "Next" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Node" },
      { name: "Midtrans" },
    ],
    image: "/assets/work/work-1.png",
    live: "https://front-end-acara-livid.vercel.app/",
    github: "https://github.com/hong541",
  },
  {
    num: "02",
    category: "Full Stack Next JS : Realtime Point Of Sale Apps",
    title: "Project 2",
    description:
      "This Realtime POS Application is more than just a cash register system — it is a dynamic, cloud-powered solution built with Supabase that transforms the way businesses handle transactions. With seamless real-time updates, smart inventory tracking, and secure authentication, this project showcases not only my technical ability to build full-stack applications, but also my passion for creating scalable, modern solutions that deliver immediate impact.",
    stack: [
      { name: "React" },
      { name: "Next" },
      { name: "Typescript" },
      { name: "Tailwind" },
      { name: "Express" },
      { name: "Supabase" },
      { name: "Node" },
      { name: "Midtrans" },
    ],
    image: "/assets/work/work-2.png",
    live: "https://hongcafe.vercel.app/",
    github: "https://github.com/hong541",
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
    github: "https://github.com/hong541",
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
              <ul className="flex gap-2">
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
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="w-full h-full relative rounded-xl">
                        <Image
                          src={project.image}
                          fill
                          className="object-fit"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Button */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 xl:bottom-0 w-full justify-between"
                btnStyles="bg-second hover:bg-second-hover text-textLight text-[22px] w-[44px] h-[44px] flex justify-center rounded-xl items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
