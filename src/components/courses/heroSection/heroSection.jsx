import React from "react";
import { TbChevronsDown } from "react-icons/tb";
import { motion } from "framer-motion";
import img1 from "./../../../assets/images/courses/Star1.png";
import img2 from "./../../../assets/images/courses/Star2.png";
import img3 from "./../../../assets/images/courses/3dline.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.8, type: "spring" }
  })
};

const HeroSection = () => (
  <div className="md:w-1/2 px-5 md:px-0 m-auto h-96 flex flex-col justify-center items-center relative dark:text-white">
    {/* پس زمینه: تصویر */}
    <div className="w-full h-full absolute pointer-events-none select-none">
      <motion.img
        src={img2}
        alt="not set"
        className="absolute top-1/6 left-1/5 dark:opacity-70"
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      />
      <motion.img
        src={img1}
        alt="not set"
        className="absolute top-1/3 dark:opacity-70"
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      />
      <motion.img
        src={img3}
        alt="not set"
        className="hidden sm:block absolute top-2/3 left-1/4 dark:opacity-70"
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      />
    </div>

    {/* تیتر اصلی */}
    <motion.h1
      className="text-2xl xs:text-3xl md:text-5xl font-bold mb-7 z-10"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7 }}
    >
      دوره های متنوع!
    </motion.h1>

    {/* توضیحات */}
    <motion.p
      className="w-auto text-sm md:text-lg text-gray dark:text-gray-300 text-center mb-10 z-10"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      ما به شما تنوعی از دوره‌های آموزشی تخصصی را ارائه می‌دهیم که به شما کمک
      می‌کند تا مهارت‌های برنامه‌نویسی و کدنویسی خود را به سطح بالاتری
      برسانید.
    </motion.p>

    {/* عبارت "لیست دوره‌ها" فقط در sm به بالا */}
    <motion.h2
      className="text-gray dark:text-gray-400 hidden sm:block z-10"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      لیست دوره ها
    </motion.h2>

    {/* آیکون پایین - فقط در sm به بالا */}
    <motion.div
      className="text-gray dark:text-gray-400 sm:flex flex-col text-xl hidden z-10"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.7 }}
    >
      <TbChevronsDown />
    </motion.div>
  </div>
);

export default HeroSection;
