import Link from "next/link";
import { motion } from "framer-motion";
import { translate } from "@/utils/motion";
import { blur } from "@/utils/motion";

const NavBody = ({ links, selectedLink, setSelectedLink }) => {
  const getChar = (title) => {
    let chars = [];

    title.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          custom={[index * 0.02, (title.length - index) * 0.01]}
          variants={translate}
          initial="initial"
          animate="open"
          exit="exit"
          key={`c_${index}`}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className="flex flex-wrap my-[40px]">
      {links.map((href, index) => {
        const { text, link } = href;
        return (
          <Link
            onMouseOver={() => {
              setSelectedLink({ isActive: true, index });
            }}
            onMouseLeave={() => {
              setSelectedLink({ isActive: false, index });
            }}
            href={`#${link}`}
            key={`i_${index}`}
          >
            <motion.p
              variants={blur}
              initial="initial"
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
              className="text-black font-light pl-[10px] pt-[30px] uppercase no-underline text-[32px] md:text-[4.5vw] tracking-tight flex"
            >
              {getChar(text)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBody;
