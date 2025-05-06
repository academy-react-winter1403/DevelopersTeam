import React from "react";
import Joyride from "react-joyride";
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import { NavLink } from "react-router-dom";
import { getData } from "../../../core/localStorage/localStorage";
import { FiUser } from "react-icons/fi";
import { Button, Select } from "antd"; // Select برای انتخاب زبان
import HeaderDrawer from "../../headerDrawer/headerDrawer";
import { IoMoonOutline } from "react-icons/io5";
import { useDarkMode } from "../../../context/theme/themeContext";
import { GoSun } from "react-icons/go";
import { useTranslation } from "react-i18next"; // اضافه کردن هوک ترجمه

const Header = () => {
  const token = getData("authToken");
  const { darkMode, setDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation(); // گرفتن شیء i18n برای تغییر زبان

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // تغییر زبان
  };

  const steps = [
    {
      target: ".header-logo",
      content: t("این لوگوی سایت ماست. با کلیک به صفحه اصلی می‌روی!"),
    },
    {
      target: ".header-menu",
      content: t("از اینجا به صفحه‌های خانه، دوره‌ها و مقالات برو."),
    },
    {
      target: ".header-darkmode",
      content: t("darkMode"),
    },
    {
      target: ".header-auth",
      content: t("auth.login"),
    },
  ];

  return (
    <div className="border-[#E4E4E4] dark:border-gray-700 cursor-pointer mt-5 mx-auto flex flex-nowrap justify-between px-10">
      <Joyride
        steps={steps}
        continuous
        showSkipButton
        locale={{
          next: t("بعدی"),
          back: t("قبلی"),
          skip: t("رد کردن"),
          last: t("پایان"),
        }}
      />

      <NavLink
        to="/"
        className="flex w-1/5 justify-center items-center header-logo"
      >
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 xs:w-12 xs:h-14"
        />
        <img src={logoText} alt="text" className="w-24 h-10" />
      </NavLink>

      <div className="w-3/5 lg:flex justify-center items-center gap-10 hidden header-menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-navyBlue dark:text-blue-400"
                : "dark:text-gray-300"
            }`
          }
        >
          <span className={`${i18n.language === "fa" ? "rtl-text" : "ltr-text"} leading-12`}>
            {t("home")}
          </span>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-navyBlue dark:text-blue-400"
                : "dark:text-gray-300"
            }`
          }
        >
          <span className={`${i18n.language === "fa" ? "rtl-text" : "ltr-text"} leading-12`}>
            {t("courses")}
          </span>
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-navyBlue dark:text-blue-400"
                : "dark:text-gray-300"
            }`
          }
        >
          <span
            className={`${i18n.language === "fa" ? "rtl-text" : "ltr-text"} h-28 leading-12`}
          >
            {t("news")}
          </span>
        </NavLink>
      </div>

      <div className="flex w-1/5 justify-center items-center space-x-3">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="header-darkmode border-0 lg:border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full"
        >
          {darkMode ? (
            <GoSun className="size-5 text-white cursor-pointer" />
          ) : (
            <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
          )}
        </div>

        {/* Dropdown برای انتخاب زبان */}
        <Select
          defaultValue={i18n.language} // زبان پیش‌فرض
          onChange={changeLanguage} // هنگام تغییر زبان
          style={{ width: 120 }}
          options={[
            { value: "fa", label: t("فارسی") },
            { value: "en", label: t("انگلیسی") },
          ]}
        />

        <div className="flex items-center justify-center header-auth">
          {token ? (
            <NavLink to="/panel/dashboard">
              <Button
                type="primary"
                shape="round"
                icon={<FiUser className="w-4 h-4 mt-1" />}
                style={{
                  fontFamily: "yekan",
                  marginRight: "4px",
                  fontSize: "12px",
                }}
              >
                {t("auth.dashboard")}
              </Button>
            </NavLink>
          ) : (
            <Button
              type="primary"
              shape="round"
              style={{ fontFamily: "yekan" }}
            >
              <NavLink to="/login">{t("auth.login")}</NavLink>
            </Button>
          )}
          <HeaderDrawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
