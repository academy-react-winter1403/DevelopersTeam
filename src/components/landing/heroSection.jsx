import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <motion.div
      className="flex flex-col justify-center mt-10"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h2
        variants={item}
        className="mx-auto w-[70%] text-[20px] md:text-3xl font-bold text-center dark:text-white"
      >
        تجربه ای بی نظیر در یادگیری کدنویسی
      </motion.h2>

      <motion.h2
        variants={item}
        className="mx-auto w-[70%] text-[20px] md:text-3xl md:mt-2 font-bold text-center dark:text-white"
      >
        از<span> </span>
        <motion.span
          className="text-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          مبتدی<span> </span>
        </motion.span>
        تا<span> </span>
        <motion.span
          className="text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          حرفه ای
        </motion.span>
        <span>!</span>
      </motion.h2>

      <motion.h5
        variants={item}
        className="mx-auto w-[70%] text-[#787878] dark:text-gray-400 mt-4 text-[13px] text-center"
      >
        آکادمی فوق تخصصی کدنویسی و برنامه نویسی از سنین کودکی تا بزرگسالی
      </motion.h5>

      <NavLink
        to="/courses"
        className="mx-auto m-2 w-[35%] text-sm h-8 leading-8 xs:w-[20%] sm:w-[17%] md:w-[14%] xl:w-[8%] xl:p-2 xl:leading-4 text-center rounded-full bg-[#3772FF] hover:opacity-85 text-white "
      >
        شروع یادگیری
      </NavLink>
    </motion.div>
  );
};

export default HeroSection;
