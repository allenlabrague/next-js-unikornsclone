import { translate } from "@/utils/motion";
import { motion } from "framer-motion";

const NavFooter = () => {
  return (
    <div className="flex px-5 justify-between items-end flex-wrap uppercase mt-[40px]">
      <ul className="text-sm">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-gray-400">Made by: </span>Allen
        </motion.li>
      </ul>
      <ul className="text-sm">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-gray-400">Typography: </span> Google Fonts
        </motion.li>
      </ul>
      <ul className="text-sm">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-gray-400">Images: </span> Freepik, Envato
        </motion.li>
      </ul>
    </div>
  );
};

export default NavFooter;
