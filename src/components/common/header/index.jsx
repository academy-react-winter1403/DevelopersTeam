import React, { useEffect } from "react";
import Joyride from "react-joyride";
import { NavLink, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { Button } from "antd";
import HeaderDrawer from "../../headerDrawer/headerDrawer";
import { IoMoonOutline } from "react-icons/io5";
import { useDarkMode } from "../../../context/theme/themeContext";
import { GoSun } from "react-icons/go";
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import { getData } from "../../../core/localStorage/localStorage";


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

  // مراحل راهنمای Joyride
  const steps = [
    {
      target: ".header-logo",
      content: "این لوگوی سایت است. با کلیک روی آن به صفحه اصلی بروید.",
    },
    {
      target: ".header-menu",
      content: "از طریق این منو به صفحات مختلف دسترسی داشته باشید.",
    },
    {
      target: ".header-darkmode",
      content: "برای تغییر حالت تم (تاریک/روشن) از این دکمه استفاده کنید.",
    },
    {
      target: ".header-auth",
      content: "برای ورود یا دسترسی به پنل دانشجویی از این بخش استفاده کنید.",
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
            next: "بعدی",
            back: "قبلی",
            skip: "رد کردن",
            last: "پایان",
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
        {["خانه", "دوره‌ها", "مقالات"].map((item, index) => {
          const paths = ["/", "/courses", "/news"];
          return (
            <NavLink
              key={item}
              to={paths[index]}
              className={({ isActive }) =>
                isActive
                  ? "text-navyBlue dark:text-blue-400"
                  : "dark:text-gray-300"
              }
            >
              {item}
            </NavLink>
          );
        })}
      </div>

      {/* تنظیمات و دکمه‌های اکانت */}
      <div className="flex w-1/5 justify-center items-center space-x-3">
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
            <NavLink
              to="/panel/dashboard"
            >
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
                پنل دانشجویی
              </Button>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
            >
              <Button type="primary" shape="round" style={{ fontFamily: "yekan" }}>
                ورود یا ثبت‌نام
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
