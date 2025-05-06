import React, { useEffect } from "react";
import Joyride from "react-joyride";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { Button, Select } from "antd"; // Select برای انتخاب زبان
import HeaderDrawer from "../../headerDrawer/headerDrawer";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import { useDarkMode } from "../../../context/theme/themeContext";
import { getData } from "../../../core/localStorage/localStorage";
import { useTranslation } from "react-i18next"; // هوک ترجمه استفاده شده است

// هوک برای بررسی اندازه صفحه (ریسپانسیو)
function useIsLargeScreen(minWidth = 1024) {
  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWidth >= minWidth
  );

  useEffect(() => {
    const onResize = () => setIsLargeScreen(window.innerWidth >= minWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [minWidth]);

  return isLargeScreen;
}

const Header = () => {
  const token = getData("authToken");
  const { darkMode, setDarkMode } = useDarkMode(); // مدیریت تم
  const isLargeScreen = useIsLargeScreen(); // هوک ریسپانسیو
  const { t, i18n } = useTranslation(); // هوک ترجمه اضافه شد

  // تغییر زبان
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // مراحل راهنمای Joyride
  const steps = [
    {
      target: ".header-logo",
      content: t("joyrideLogo"),
    },
    {
      target: ".header-menu",
      content: t("joyrideMenu"),
    },
    {
      target: ".header-darkmode",
      content: t("joyrideTheme"),
    },
    {
      target: ".header-auth",
      content: t("joyrideAuth"),
    },
  ];

  return (
    <div className="border-[#E4E4E4] dark:border-gray-700 cursor-pointer mt-5 mx-auto flex flex-nowrap justify-between px-10">
      {/* Joyride */}
      {isLargeScreen && (
        <Joyride
          steps={steps}
          continuous
          showSkipButton
          locale={{
            next: t("next"),
            back: t("back"),
            skip: t("skip"),
            last: t("last"),
          }}
        />
      )}

      {/* لوگو */}
      <NavLink
        to="/"
        className="flex w-1/5 justify-center items-center header-logo"
      >
        <img src={logo} alt="لوگو" className="w-10 h-10 xs:w-12 xs:h-14" />
        <img src={logoText} alt="متن لوگو" className="w-24 h-10" />
      </NavLink>

      {/* منوی اصلی */}
      <div className="w-3/5 lg:flex justify-center items-center gap-10 hidden header-menu">
        {["home", "courses", "news"].map((key, index) => {
          const paths = ["/", "/courses", "/news"];
          return (
            <NavLink
              key={key}
              to={paths[index]}
              className={({ isActive }) =>
                isActive
                  ? "text-navyBlue dark:text-blue-400"
                  : "dark:text-gray-300"
              }
            >
              {t(key)}
            </NavLink>
          );
        })}
      </div>

      {/* تنظیمات و دکمه‌های اکانت */}
      <div className="flex w-1/5 justify-center items-center space-x-3">
        {/* دکمه تغییر زبان */}
        <Select
          defaultValue={i18n.language} // زبان پیش‌فرض
          onChange={(lng) => {
            i18n.changeLanguage(lng); // تغییر زبان
            document.body.dir = i18n.dir(lng); // راست‌چین یا چپ‌چین کردن صفحه
          }}
          style={{ width: 90, marginLeft: 20 }}
          options={[
            { value: "fa", label: "فارسی" },
            { value: "en", label: "English" },
          ]}
        />

        {/* تم */}
        <div
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="header-darkmode border-0 lg:border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full"
        >
          {darkMode ? (
            <GoSun className="size-5 text-white cursor-pointer" />
          ) : (
            <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
          )}
        </div>

        {/* ورود یا پنل دانشجویی */}
        <div className="flex items-center justify-center header-auth">
          {token ? (
            <NavLink to="/panel/dashboard">
              <Button
                type="primary"
                shape="round"
                icon={<FiUser />}
                style={{
                  fontFamily: "yekan",
                  marginRight: "4px",
                  fontSize: "12px",
                }}
              >
                {t("studentPanel")}
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <Button
                type="primary"
                shape="round"
                style={{ fontFamily: "yekan" }}
              >
                {t("loginRegister")}
              </Button>
            </NavLink>
          )}
          <HeaderDrawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
