import { Button, Divider, Drawer } from "antd";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiHome9Line } from "react-icons/ri";
import { BiBookAlt } from "react-icons/bi";
import { PiNewspaper } from "react-icons/pi";
import { RiCellphoneLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/landing/logoDrawer.svg";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { useDarkMode } from "../../context/theme/themeContext";
import { TfiAlignLeft } from "react-icons/tfi";

const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="lg:hidden">
      <Button
        variant="text"
        color="default"
        onClick={showDrawer}
        style={darkMode && { color: "#fff" }}
      >
        <TfiAlignLeft />
      </Button>

      <Drawer
        onClose={onClose}
        maskClosable={true}
        destroyOnClose
        closeIcon={null}
        placement="bottom"
        height={250}
        open={open}
        headerStyle={{ display: "none" }}
        bodyStyle={{
          padding: "24px",
          backgroundColor: darkMode ? "#1f2937" : "#fff",
        }}
        style={{
          borderRadius: "24px 24px 0 0",
          color: darkMode ? "white" : "inherit",
        }}
      >
        <div className="">
          <div className="flex flex-col space-y-5">
            <div className="flex justify-between text-base font-semibold">
              <NavLink to="/">
                <span className="flex justify-center items-center gap-2 dark:text-white">
                  <RiHome9Line />
                  خانه
                </span>
              </NavLink>
              <span className="text-gray-400 text-sm">صفحه اصلی</span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <NavLink to="/courses">
                <span className="flex justify-center items-center gap-2 dark:text-white">
                  <BiBookAlt />
                  دوره ها
                </span>
              </NavLink>
              <span className="text-gray-400 text-sm">
                تمامی دوره های برگزارشده
              </span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <NavLink to="/news">
                <span className="flex justify-center items-center gap-2 dark:text-white">
                  <PiNewspaper />
                  اخبار و مقالات
                </span>
              </NavLink>
              <span className="text-gray-400 text-sm">خبر های پژوهشگاه</span>
            </div>
          </div>
          <Divider className="dark:bg-gray-600" />
          <div className="flex justify-between">
            <div>
              <img src={logo} alt="not set" className="w-40 dark:invert" />
            </div>
            <div className="flex space-x-4">
              <PiTelegramLogoLight className="w-8 h-8 text-[#3772FF]" />
              <PiInstagramLogoLight className="w-8 h-8 text-[#FF4242]" />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
