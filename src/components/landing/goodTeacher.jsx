import React from "react";
import http from "../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ax from "../../assets/images/3d-glassy-abstract-spiral-band-blue 1.svg";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const GoodTeacher = () => {
  const { t } = useTranslation();

  const getGoodTeacher = async () => {
    const res = await http.get("/Home/GetTeachers");
    return res;
  };

  const { data } = useQuery({
    queryKey: ["goodTeacher"],
    queryFn: getGoodTeacher,
  });

  return (
    <div>
      <motion.h2
        className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl dark:text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t("Top professors of the week")}
      </motion.h2>

      <motion.h2
        className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] dark:text-gray-400 xl:text-[15px]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        {t(
          "Professors who gave the most positive votes to courses in a survey"
        )}
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-6 mt-12 sm:mt-18 w-10/12 mx-auto h-auto items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4 }}
      >
        {data?.slice(0, 3).map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.045, boxShadow: "0 8px 32px #3772FF33" }}
            className={`border-[#E4E4E4] dark:border-gray-700 rounded-4xl border-4 xl:w-1/4 w-4/5 sm:w-3/5 md:w-[30%] mx-auto mt-12 relative h-[300px] dark:bg-gray-800
              hover:border-navyBlue transition-all duration-700 group
              ${index === 1 ? "md:scale-110 md:-translate-y-5 z-10" : ""}
            `}
          >
            <div className="absolute top-[-50px] left-[50%] transform -translate-x-[50%] rounded-full bg-white dark:bg-gray-800 group-hover:bg-white/90">
              <img
                src={item.pictureAddress || ax}
                alt=""
                className={`rounded-full border-4 border-[#E4E4E4] dark:border-gray-700 object-cover w-20 h-20 sm:w-24 sm:h-24 group-hover:border-navyBlue transition-all duration-700 ${
                  index === 1 ? "w-24 h-24 sm:w-28 sm:h-28" : ""
                }`}
              />
            </div>

            <h2 className="text-center mt-16 font-bold text-xl dark:text-white">
              {item.fullName || "بینام"}
            </h2>
            <h3 className="text-center mt-4 font-semibold text-md dark:text-gray-300">
              تعداد دروس: {item.courseCounts}
            </h3>
            <p className="text-sm text-right pr-3 ml-5 mt-6 text-[#787878] dark:text-gray-400">
              این استاد در هفته جاری بالاترین بازخورد مثبت را دریافت کرده است.
            </p>
            <div
              className={`bg-[#3772FF] rounded-full w-3/4 mx-auto mt-6 text-[10px] md:text-[12px] h-8 leading-8 text-center text-white group-hover:bg-navyBlue transition-all duration-300`}
            >
              {item.linkdinProfileLink ? (
                <a
                  href={item.linkdinProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ورود به لینکدین
                </a>
              ) : (
                <span style={{ opacity: 0.5 }}>لینکدین ناموجود</span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GoodTeacher;
