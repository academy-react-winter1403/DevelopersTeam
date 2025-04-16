import React, { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { LuBookMarked } from "react-icons/lu";
import { removeData } from "../../core/localStorage/localStorage";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { RiFileMarkedLine } from "react-icons/ri";
import { TfiCommentAlt, TfiMore } from "react-icons/tfi";
const DrawerMenu = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeData("authToken");
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: (
        <NavLink to="/panel/favcourse">
          <h1 className="flex items-center space-x-2">
            <LuBookMarked />
            <span>علاقه‌مندی دوره</span>
          </h1>
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to="/panel/favnew">
          <h1 className="flex items-center space-x-2">
            <RiFileMarkedLine />
            <span>علاقه‌مندی مقالات</span>
          </h1>
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink to="/panel/mycommentscourse">
          <h1 className="flex items-center space-x-2">
            <TfiCommentAlt />
            <span>کامنت های دوره</span>
          </h1>
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink to="/panel/mycommentsnews">
          <h1 className="flex items-center space-x-2">
            <TfiCommentAlt />
            <span>کامنت های مقالات</span>
          </h1>
        </NavLink>
      ),
    },
    {
      key: "5",
      label: (
        <h1 onClick={handleLogOut} className="flex items-center space-x-2">
          <MdOutlineLogout className="text-[#FF5454]" />
          <span className="text-[#FF5454]">خروج از حساب</span>
        </h1>
      ),
    },
  ];
  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="topLeft"
        overlayStyle={{
          fontFamily: "yekan",
          width: "200px",
          borderRadius: "16px",
        }}
      >
        <TfiMore className="w-8 h-8" />
      </Dropdown>
    </>
  );
};
export default DrawerMenu;
