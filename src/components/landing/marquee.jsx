import { motion, useScroll, useTransform } from "framer-motion";

const Layers = () => {
  return (
    <>
      <motion.h1 className="text-sm lg:text-xl font-bold text-white whitespace-nowrap">
        خدماتی که ما به شما ارائه می دهیم
      </motion.h1>
      <motion.div className="rounded-full p-1 bg-white"></motion.div>
    </>
  );
};

const Marquee = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0.17, 0.25], [4, -4]);
  const content = Array.from({ length: 75 }, (_, index) => {
    return <Layers key={index} />;
  });

  return (
    <div className="w-full overflow-hidden min-h-[160px] 2xl:min-h-[180px] flex justify-center items-center">
      <motion.div
        style={{ rotate, direction: "ltr" }}
        className="w-full min-w-[120vw] py-6 bg-navyBlue z-20"
      >
        <motion.div className="whitespace-nowrap font-bold text-black ">
          <motion.div
            className=" w-full flex items-center gap-14 "
            initial={{ x: 0 }}
            animate={{ x: `-900%` }}
            transition={{ ease: "linear", repeat: Infinity, duration: 120 }}
          >
            {...content}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export { Marquee };
