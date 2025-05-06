import React from "react";
import Academi from "./../../../assets/images/Academi.svg";
import Instagram from "./../../../assets/images/instagram.svg";
import Telegram from "./../../../assets/images/telegram.svg";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import { useTranslation } from "react-i18next"; // هوک ترجمه

const Footer = () => {
  const { t } = useTranslation(); // استفاده از هوک ترجمه

  return (
    <div className="w-11/12 h-auto md:h-52 bg-lightGray dark:bg-gray-800 rounded-4xl mx-auto mb-10 space-y-7 flex flex-col md:flex-row lg:space-x-20">
      <div className="p-4 order-1 md:order-1">
        <div>
          <img src={Academi} alt="not set" className="size-20 " />
        </div>
        <div className="hidden md:block space-y-3 mt-5">
          <div className="h-8 w-32 flex justify-center items-center bg-white dark:bg-gray-700 rounded-2xl text-red-400 border border-borderGray dark:border-gray-600 space-x-2">
            <img src={Instagram} alt="" className="h-5 w-5  " />
            <span className="text-sm dark:text-gray-300">{t("instagram")}</span>
          </div>
          <div className="h-8 w-32 flex justify-center items-center bg-white dark:bg-gray-700 rounded-2xl text-blue-400 border border-borderGray dark:border-gray-600 space-x-2">
            <img src={Telegram} alt="" className="h-5 w-5  " />
            <span className="text-sm dark:text-gray-300">{t("telegram")}</span>
          </div>
        </div>
      </div>
      <div className="flex lg:mt-2 ml-5 space-x-12 md:space-x-12 order-2 md:order-3">
        <div>
          <h1 className="text-gray-600 dark:text-gray-400 leading-14 mr-6">
            {t("pages")}
          </h1>
          <Link to="/">
            <h2 className="mr-6 dark:text-gray-300">{t("home")}</h2>
          </Link>
          <Link to="/courses">
            <h2 className="mr-6 whitespace-nowrap dark:text-gray-300">
              {t("courses")}
            </h2>
          </Link>
          <Link to="/news">
            <h2 className="mr-6 whitespace-nowrap dark:text-gray-300">
              {t("news")}
            </h2>
          </Link>
        </div>
        <div>
          <h1 className="text-gray-600 dark:text-gray-400 leading-14 mr-6">
            {t("aboutUs")}
          </h1>
          <Link to="/professors">
            <h2 className="mr-6 dark:text-gray-300">{t("professors")}</h2>
          </Link>
          <Link to="/about">
            <h2 className="mr-6 whitespace-nowrap dark:text-gray-300">
              {t("about")}
            </h2>
          </Link>
          <Link to="/contact">
            <h2 className="mr-6 whitespace-nowrap dark:text-gray-300">
              {t("contactUs")}
            </h2>
          </Link>
        </div>
        <div className="hidden xs:block">
          <h1 className="text-gray-600 dark:text-gray-400 leading-14 mr-6">
            {t("pages")}
          </h1>
          <Link to="/">
            <h2 className="mr-6 dark:text-gray-300">{t("home")}</h2>
          </Link>
          <Link to="/courses">
            <h2 className="mr-6 whitespace-nowrap dark:text-gray-300">
              {t("courses")}
            </h2>
          </Link>
          <Link to="/news">
            <h2 className="mr-6 whitespace-nowrap dark:text-gray-300">
              {t("news")}
            </h2>
          </Link>
        </div>
      </div>
      <div className="space-y-3 p-4 order-3 md:order-2 md:w-80 md:mt-2">
        <h1 className="font-bold text-[15px] dark:text-white">
          {t("academyName")}
        </h1>
        <h5 className="text-gray-600 dark:text-gray-400 text-justify text-[12px]">
          {t("academyDescription")}
        </h5>
      </div>
      <div className="flex space-x-4 md:hidden p-4 order-4">
        <div className="h-8 w-32 flex justify-center items-center bg-white dark:bg-gray-700 rounded-2xl text-red-400 border border-borderGray dark:border-gray-600 space-x-2">
          <img src={Instagram} alt="" className="h-5 w-5 dark:invert" />
          <span className="text-sm dark:text-gray-300">{t("instagram")}</span>
        </div>
        <div className="h-8 w-32 flex justify-center items-center bg-white dark:bg-gray-700 rounded-2xl text-blue-400 border border-borderGray dark:border-gray-600 space-x-2">
          <img src={Telegram} alt="" className="h-5 w-5 dark:invert" />
          <span className="text-sm dark:text-gray-300">{t("telegram")}</span>
        </div>
      </div>
      <div className=" w-64 mt-7 mr-4 h-40 order-5 hidden xl:block">
        <MapComponent />
      </div>
    </div>
  );
};

export default Footer;
