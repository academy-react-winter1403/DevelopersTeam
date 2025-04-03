import { AlignLeftOutlined } from "@ant-design/icons";
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

const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=" lg:hidden ml-10">
      <Button variant="text" color="default" onClick={showDrawer}>
        <AlignLeftOutlined />
      </Button>

      <Drawer
        onClose={onClose}
        maskClosable={true}
        destroyOnClose
        closeIcon={null}
        placement="bottom"
        open={open}
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: "24px" }}
        style={{ borderRadius: "24px 24px 0 0" }}
      >
        <div className="">
          <div className="flex flex-col space-y-5">
            <div className=" flex justify-between text-base font-semibold">
              <NavLink to="/">
                <span className="flex justify-center items-center gap-2 text-black">
                  <RiHome9Line />
                  خانه
                </span>
              </NavLink>
              <span className="text-gray text-sm">صفحه اصلی</span>
            </div>
            <div className=" flex justify-between text-base font-semibold">
              <NavLink to="/courses">
                <span className="flex justify-center items-center gap-2 text-black">
                  <BiBookAlt />
                  دوره ها
                </span>
              </NavLink>
              <span className="text-gray text-sm">
                تمامی دوره های برگزارشده
              </span>
            </div>
            <div className=" flex justify-between text-base font-semibold">
              <NavLink to="/news">
                <span className="flex justify-center items-center gap-2 text-black">
                  <PiNewspaper />
                  اخبار و مقالات
                </span>
              </NavLink>
              <span className="text-gray text-sm">خبر های پژوهشگاه</span>
            </div>
            <div className=" flex justify-between text-base font-semibold">
              <span className="flex justify-center items-center gap-2">
                <RiCellphoneLine />
                ارتباط باما
              </span>
            </div>
          </div>
          <Divider />
          <div className=" flex justify-between">
            <div>
              <img src={logo} alt="not set" className=" w-40" />
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
