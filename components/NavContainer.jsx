"use client";

import { motion } from "framer-motion";
import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavImage from "./NavImage";
import { height } from "@/utils/motion";
import { useState } from "react";
import { links } from "@/constants";

const NavContainer = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      className="overflow-hidden"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="flex mb-[80px] items-center">
        <div className="container">
          <NavBody
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <NavFooter />
        </div>
        <NavImage
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
};

export default NavContainer;
