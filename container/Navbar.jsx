"use client";

import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import { AiOutlineMenu } from "react-icons/ai";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex items-center justify-between w-full fixed top-0 left-0 right-0 py-2 px-10 bg-white z-10"
    >
      <Image src="/unikorns.svg" width={120} />
      <div className="flex items-center gap-3">
        <p className=" font-semibold text-sm">Menu</p>
        <div className="bg-white hover:bg-black transition-all hover:text-white p-3 rounded-full border-1 border-gray-500 cursor-pointer">
          <AiOutlineMenu fontSize={18} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
