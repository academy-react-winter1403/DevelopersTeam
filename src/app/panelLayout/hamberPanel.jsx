import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { LuBookMarked } from "react-icons/lu";
import { removeData } from "../../core/localStorage/localStorage";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { RiFileMarkedLine } from "react-icons/ri";
const HamberMenu = () => {
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    removeData("authToken");
    navigate("/");
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        shape="circle"
        onClick={showDrawer}
      >
        <IoIosMore className="w-8 h-8" />
      </Button>
      <Drawer
        placement="bottom"
        title="بستن"
        onClose={onClose}
        open={open}
        className="text-red-400"
      >
        <NavLink
          to="/panel/favcourse"
          className="flex items-center gap-2 my-2 mr-4 text-md"
        >
          <span>
            {" "}
            <LuBookMarked className="w-6 h-6 text-black" />
          </span>{" "}
          <span className="text-black">
          علاقه‌مندی دوره
          </span>
        </NavLink>
        <NavLink
          to="/panel/favnew"
          className="flex items-center gap-2 my-2 mr-4 text-md"
        >
          <span className="text-black">
            <RiFileMarkedLine className="w-6 h-6 text-black" />
          </span>{" "}
          <span className="text-black">
          علاقه‌مندی مقالات
            </span>
        </NavLink>
        <NavLink
          onClick={handleLogOut}
          className="cursor-pointer w-34 h-14 text-[#FF5454]  lg:rounded-4xl sm:rounded-full flex justify-center items-center font-semibold lg:space-x-4 lg:pr-6"
        >
          <MdOutlineLogout className="w-6 h-6 text-[#FF5454]" />
          <span className="block text-[#FF5454]">خروج از حساب</span>
        </NavLink>
      </Drawer>
    </>
  );
};
export default HamberMenu;
