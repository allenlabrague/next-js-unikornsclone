"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const Discover = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="p-10 lg:w-[95%] lg:mx-auto flex flex-col justify-between h-screen"
      id="home"
    >
      test
    </motion.div>
  );
};

export default Discover;
