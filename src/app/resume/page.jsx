"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
// About Data

const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. I have experience in various technologies and frameworks, and I am always eager to learn more.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jabar Maulana",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 857-8853-1938",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Jabar Maulana",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Email",
      fieldValue: "hong.addclasslist@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian, Arabic",
    },
  ],
};

// Experience Data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have handled diverse projects that enhanced my skills and professionalism.",
  items: [
    {
      company: "PT. Kerta Gaya Pusaka",
      position: "Courier",
      duration: "2023 - Present",
    },
    {
      company: "Freelancer",
      position: "Freelance Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Sribulancer",
      position: "Freelance Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Fiverr",
      position: "Freelance Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Linkedin",
      position: "Freelance Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "Hong Company",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Islamic Boarding School",
      position: "Grammar Teacher",
      duration: "2020 - 2021",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I completed my studies with a strong academic background in tech-related fields.",
  items: [
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development",
      duration: "2022",
    },
    {
      institution: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Universitas Terbuka",
      degree: "System Information",
      duration: "2022 - Present",
    },
  ],
};

// Skills Data

const skills = {
  title: "My Skills",
  description:
    "Proficient in web development, UI/UX, mobile apps, and SEO optimization tools.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS",
    },
    {
      icon: <SiExpress />,
      name: "Express.JS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <TbBrandReactNative />,
      name: "React Native",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent
              value="experience"
              className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-textLight/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#e1e1e1] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-second">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-2">
                            {/* Dhot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-second"></span>
                            <p className="text-textLight/80">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent
              value="education"
              className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-textLight/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#e1e1e1] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-second">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2">
                            {/* Dhot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-second"></span>
                            <p className="text-textLight/80">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent
              value="skills"
              className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-textLight/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#e4e4e4] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-second transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="text-sm font-semibold">
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About Me */}
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-textLight/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-textLight/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
