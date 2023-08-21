"use client";

import { MaskTextBodyText, MaskTextHeading } from "@/components/CustomText";
import { phrasesBodyText, phrasesHeading } from "@/constants";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { BsFillPlayFill } from "react-icons/bs";
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="p-10 lg:w-[95%] lg:mx-auto flex flex-col justify-between h-screen"
      id="home"
    >
      <div className=" mt-8">
        <MaskTextHeading phrases={phrasesHeading} />
      </div>
      <div className="md:flex md:flex-col md:items-end">
        <MaskTextBodyText phrases={phrasesBodyText} />
        <motion.div
          variants={textVariant(0.4)}
          className="flex items-center justify-between mt-10 md:w-[425px]"
        >
          <div className="flex items-center gap-3">
            <Avatar src="/ceo1.png" className="w-16 h-16 text-large" />
            <Avatar src="/ceo2.png" className="w-16 h-16 text-large" />
            <Avatar
              src="/ceo3.png"
              className="w-16 h-16 text-large hidden md:block"
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="font-semibold text-sm tracking-tighter">Watch us</p>
            <Button
              isIconOnly
              className="rounded-full bg-black hover:bg-white text-white hover:text-black"
            >
              <BsFillPlayFill fontSize={20} />
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={textVariant(0.5)}
        className="hidden md:flex items-center justify-between text-xl font-semibold"
      >
        <p>Brand Identity Design</p>
        <Divider orientation="vertical" className="bg-gray-500" />
        <p>Website Design</p>
        <Divider orientation="vertical" className="bg-gray-500" />
        <p>Product Design</p>
        <Divider orientation="vertical" className="bg-gray-500" />
        <p>Web Development</p>
      </motion.div>
    </motion.div>
  );
}