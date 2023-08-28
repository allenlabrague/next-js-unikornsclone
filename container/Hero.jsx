"use client";

import { MaskTextBodyText, MaskTextHeading } from "@/components/CustomText";
import { phrasesBodyText, phrasesHeading } from "@/constants";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { BsFillPlayFill } from "react-icons/bs";
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";

import scrollDown from "/public/scroll.json";

export default function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="p-10 lg:w-[95%] lg:mx-auto flex flex-col justify-between h-screen relative"
      id="home"
    >
      <motion.div
        variants={textVariant(0.3)}
        className=" absolute bottom-[250px] lg:bottom-[100px] left-0 right-0 mx-auto"
      >
        <h3 className="font-medium animate-bounce text-center">
          Keep scrolling...
        </h3>
        <div className="w-[100px] mx-auto">
          <Lottie animationData={scrollDown} />
        </div>
      </motion.div>
      <div className="mt-8">
        <MaskTextHeading phrases={phrasesHeading} />
      </div>
      <div className="md:flex md:flex-col md:items-end">
        <MaskTextBodyText phrases={phrasesBodyText} />
        <motion.div
          variants={textVariant(0.4)}
          className="flex items-center justify-between mt-10 md:w-[430px] lg:w-[535px]"
        >
          <div className="flex items-center gap-3">
            <Image
              width={65}
              height={65}
              src="/ceo1.png"
              alt="ceo1"
              className="rounded-full"
            />
            <Image
              width={65}
              height={65}
              src="/ceo2.png"
              alt="ceo2"
              className="rounded-full"
            />
            <Image
              width={65}
              height={65}
              src="/ceo3.png"
              alt="ceo3"
              className="rounded-full hidden md:block"
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
