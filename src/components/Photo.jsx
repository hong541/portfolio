"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-multiply opacity-85 brightness-90 absolute">
          <Image
            src="/assets/Hong-ai.png"
            alt=""
            priority
            quality={100}
            fill
            className="object-contain rounded-full shadow-md"
          />
        </motion.div>
      </motion.div>

      {/* Circle */}
      <motion.svg
        className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#38bdf8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            delay: 2.4,
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeIn",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
