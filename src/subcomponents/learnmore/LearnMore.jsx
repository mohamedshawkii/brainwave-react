import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

function LearnMore() {
  return (
    <motion.button
      className="
    flex flex-row justify-center items-center 
    rounded-md
    text-white
    font-base
    text-base
    py-2 px-4 gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.25, 0.75, 1, 0.75, 0.25, 0] }}
      transition={{ ease: "easeInOut", duration: 1.5, repeat: Infinity }}
    >
      <p>Learn more</p>
      <div>
        <HiArrowLongRight size={30} />
      </div>
    </motion.button>
  );
}

export default LearnMore;
