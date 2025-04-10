"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "Web Development",
    desc: "Build fast, responsive, and powerful websites—from landing pages to complex web applications that make an impact.",
    link: "/contact",
  },
  {
    no: "02",
    title: "UI/UX Design",
    desc: "Design that delights users. Clean, intuitive interfaces focused on seamless experiences and eye-catching visuals.",
    link: "/contact",
  },
  {
    no: "03",
    title: "App Development",
    desc: "Develop sleek, high-performing apps for Android, iOS, or cross-platform—efficient, user-friendly, and ready to scale.",
    link: "/contact",
  },
  {
    no: "04",
    title: "SEO Optimization",
    desc: "Boost rankings and drive real traffic. Smart SEO strategies that deliver measurable results, not just promises.",
    link: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group cursor-pointer">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500">
                    {service.no}
                  </div>
                  <Link
                    href={service.link}
                    className="w-[70px] h-[70px] rounded-full bg-textLight group-hover:bg-prime transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-white text-3xl" />
                  </Link>
                </div>
                {/* Heading */}
                <h2 className="text-[42px] font-bold leading-none text-textLight group-hover:text-prime transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-textLight/60">{service.desc}</p>
                {/* Border */}
                <div className="border-b border-textLight/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
