import React from "react";
import { Link, NavLink } from "react-router-dom";
import arrowUpLeft from "./../../assets/images/arrow-up-left-01.svg";
import arrowUpLeftStoke from "./../../assets/images/arrow-up-left-01-stroke-rounded 1.svg";
import Group from "./../../assets/images/Group 143.svg";
import panel from "./../../assets/images/landing/panel.svg";
import http from "./../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Marquee } from "./marquee";

const FirstPartOfLanding = () => {
  const { t, i18n } = useTranslation();

  const { data } = useQuery({
    queryKey: ["landing"],
    queryFn: async () => {
      const res = await http.get("/Home/LandingReport");
      return res;
    },
  });

  return (
    <div className="max-w-[1536px]">
      <div className="mt-16 mx-auto gap-4 md:flex md:flex-row md:justify-center md:w-10/12">
        <div className="overflow-hidden text-right indent-2 w-[300px] h-[45%] mx-auto md:mx-0 mb-6 border-[#E4E4E4] dark:border-gray-700 border-4 rounded-4xl relative xl:w-4/12 md:h-64 dark:bg-gray-800">
          <h1 className="font-bold mt-4 text-[20px] dark:text-white">
            {t("studentPanelTitle")}
          </h1>
          <h6 className="text-[12px] indent-2 mt-4 dark:text-gray-300">
            {t("studentPanelDescription")}
          </h6>
          <h6 className="text-[12px] mt-2 indent-4 dark:text-gray-300">
            {t("studentPanelManagement")}
          </h6>
          <img
            src={panel}
            alt={t("studentPanelImageAlt")}
            className="size-3/4 mt-4 mr-28 md:mr-20 lg:mr-24 xl:mr-32 2xl:mr-40 rounded-t-2xl"
          />
        </div>

        <div className="w-[300px] indent-2 mx-auto md:mx-0 h-[45%] p-3 rounded-4xl bg-[#3772FF] relative xl:w-3/12 md:h-64 font-bold md:text-[12px]">
          <h1 className="text-white font-bold mt-4">
            {t("summerCoursesTitle")}
          </h1>
          <div className="w-36 h-16 mt-2 text-[13px] mr-3 text-white md:text-[10px] md:mr-0">
            <h2>{t("summerCoursesDescription1")}</h2>
            <h2>{t("summerCoursesDescription2")}</h2>
          </div>
          <Link>
            <img
              src={arrowUpLeft}
              alt={t("summerCoursesImageAlt")}
              className="rounded-full bg-white absolute top-4 left-4 w-8 h-8 p-1 object-contain"
            />
          </Link>
          <img
            src={Group}
            alt={t("summerCoursesImageAlt")}
            className="w-[55%] h-[40%] mr-36 md:mr-20 md:w-[65%] md:h-[50%] md:mt-8 lg:mr-24 lg:w-[75%] lg:h-[60%] lg:mt-4 2xl:mr-32"
          />
        </div>

        <div className="w-[300px] indent-2 mx-auto md:mx-0 h-[45%] mt-4 md:h-64 md:mt-0 border-[#E4E4E4] dark:border-gray-700 border-4 rounded-4xl relative xl:w-2/12 dark:bg-gray-800">
          <div>
            <h3 className="mt-3 mr-2 font-semibold dark:text-white">
              {t("aboutUsTitle")}
            </h3>
            <h4 className="mr-2 font-semibold dark:text-white">
              {t("readMore")}
            </h4>
          </div>

          <div className="mt-3 mr-2">
            <h1 className="font-semibold text-2xl dark:text-white">
              {data?.teacherCount}
            </h1>
            <h6 className="text-[10px] text-gray-500 dark:text-gray-400">
              {t("teachers")}
            </h6>
          </div>

          <div className="mt-3 mr-2">
            <h1 className="font-semibold text-2xl dark:text-white">
              {data?.studentCount}
            </h1>
            <h6 className="text-[10px] text-gray-500 dark:text-gray-400">
              {t("students")}
            </h6>
          </div>

          <div className="mt-3 mr-2">
            <h1 className="font-semibold text-2xl dark:text-white">
              {data?.courseCount}
            </h1>
            <h6 className="text-[10px] text-gray-500 dark:text-gray-400 mb-4">
              {t("courses")}
            </h6>
          </div>

          <NavLink to="/aboutUs">
            <img
              src={arrowUpLeftStoke}
              alt={t("aboutUsImageAlt")}
              className="rounded-full bg-[#3772FF] absolute top-4 left-4 w-8 h-8 p-1 object-contain fill-white"
            />
          </NavLink>
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default FirstPartOfLanding;
