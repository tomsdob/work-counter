import React from "react";
import moment from "moment";
import { motion } from "framer-motion";
import { fadeTopDown } from "../assets/animations/animations";

const Header = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeTopDown}
      className="fixed top-0 inset-x-0"
    >
      <div className="p-4 flex justify-center items-center shadow-lg">
        <span className="text-base font-semibold text-gray-800 leading-none text-center">
          Count your work time ⌛
        </span>
      </div>
    </motion.div>
  );
};

export default Header;
