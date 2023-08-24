"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
];

const Gallery = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.5%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[400vh] bg-neutral-900"
      id="projects"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw] h-full relative">
          {images.map((src, index) => (
            <div
              className="flex w-[300vw] h-full relative overflow-hidden"
              key={index}
            >
              <Image
                src={src}
                fill
                alt={`image ${src}`}
                className=" object-cover"
              />
            </div>
          ))}
          <div className="bg-white flex-col gap-5 text-black flex items-center justify-center text-4xl w-[100%] md:w-[70%] h-screen">
            <h3 className="font-medium text-base md:text-4xl">Want more?</h3>
            <p className="text-sm md:text-base">Keep scrolling...</p>
            <div className="p-1 md:p-3 bg-white rounded-full border-1 border-black animate-bounce">
              <AiOutlineArrowDown className="text-[18px] md:text-[25px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
