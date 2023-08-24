"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@nextui-org/image";
import { AiOutlineMenu } from "react-icons/ai";
import { navVariants, background } from "@/utils/motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import NavContainer from "@/components/NavContainer";
import { opacity } from "@/utils/motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="fixed top-0 left-0 right-0z-20 w-full bg-white z-10"
      >
        <div className="flex flex-col items-center justify-between w-full py-2 px-4 bg-white ">
          <div className="flex items-center justify-between w-full">
            <div>
              <Image src="/unikorns.svg" width={120} />
            </div>
            <div
              className="flex items-center gap-3"
              onMouseDown={() => {
                setIsActive(!isActive);
              }}
            >
              <motion.p
                variants={opacity}
                animate={!isActive ? "closed" : "open"}
                className="font-semibold text-sm opacity-0 relative -right-[53px]"
              >
                Close
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "closed" : "open"}
                className="font-semibold text-sm"
              >
                Menu
              </motion.p>
              <div className="bg-white hover:bg-black transition-all hover:text-white p-3 rounded-full border-1 border-gray-500 cursor-pointer">
                {isActive ? (
                  <AiOutlineClose fontSize={18} />
                ) : (
                  <AiOutlineMenu fontSize={18} />
                )}
              </div>
            </div>
            <motion.div
              variants={background}
              animate={isActive ? "enter" : "exit"}
              className="h-[100%] w-[100%] absolute bg-black opacity-[0.5] top-0 left-0 -z-10"
            />
          </div>

          <AnimatePresence mode="wait">
            {isActive && <NavContainer />}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
