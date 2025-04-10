"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "+62 857-8853-1938",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "hong.addclasslist@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    desc: "Lampung, Indonesia",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#e4e4e4] rounded-xl">
              <h3 className="text-4xl text-prime">Let's Work Together</h3>
              <p className="text-textLight/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                dolorem officia? Nihil eligendi quos voluptatum fugiat aliquid
                labore beatae cupiditate!
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">App Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                placeholder="Type Your Message Here!"
                className="h-[200px]"
              />
              {/* Button */}
              <Button
                size="md"
                className="max-w-40 p-4">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center justify-center order-1 xl:order-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li
                    className="flex items-center gap-4"
                    key={index}>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex items-center justify-center rounded-md bg-[#e4e4e4] text-prime ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-textLight/60">{item.title}</p>
                      <h3 className="text-xl font-semibold">{item.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
