"use client";

import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import useDimension from "@/useDimension";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
];

export default function Parallax() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div>
      <div
        ref={container}
        className=" h-[175vh] bg-[rgb(45,45,45)] flex flex-row gap-[2vw] p-[2vw] box-border [&>*:nth-child(1)]:top-[-45%] [&>*:nth-child(2)]:top-[-95%] [&>*:nth-child(3)]:top-[-45%] [&>*:nth-child(4)]:top-[-75%] relative"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </div>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div
      style={{ y }}
      className="w-[25%] h-full flex flex-col gap-[2vw] min-w-[250px] relative"
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className="w-full h-full relative rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              fill
              alt={`image ${src}`}
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
