import { opacity } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const NavImage = ({ src, isActive }) => {
  return (
    <motion.div
      className="hidden md:block md:relative md:w-[550px] md:h-[350px]"
      variants={opacity}
      animate={isActive ? "open" : "closed"}
    >
      <Image
        src={src}
        fill={true}
        alt="image"
        className="object-cover rounded-xl"
      />
    </motion.div>
  );
};

export default NavImage;
