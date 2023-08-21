"use client";

import { useInView, motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";
import { useRef } from "react";

export function MaskTextBodyText({ phrases }) {
  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isView = useInView(body, { once: false, margin: "10%" });

  return (
    <div ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <motion.p
              variants={animate}
              custom={index}
              initial="initial"
              animate={isView ? "open" : ""}
              className="font-medium md:leading-none leading-relaxed md:text-2xl text-base"
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export function MaskTextHeading({ phrases }) {
  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isView = useInView(body, { once: false, margin: "10%" });

  return (
    <div ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <motion.h2
              variants={animate}
              custom={index}
              initial="initial"
              animate={isView ? "open" : ""}
              className="font-medium leading-tight md:leading-tight md:text-7xl tracking-tight text-4xl"
            >
              {phrase}
            </motion.h2>
          </div>
        );
      })}
    </div>
  );
}

export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className="font-medium text-center md:text-left text-5xl text-black"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold text-black md:text-[64px] text-[40px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
