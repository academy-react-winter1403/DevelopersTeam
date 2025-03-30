import { AlignLeftOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiHome9Line } from "react-icons/ri";
import { BiBookAlt } from "react-icons/bi";
import { PiNewspaper } from "react-icons/pi";
import { RiCellphoneLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);
  //   const [loading, setLoading] = useState(true);
  //   const showLoading = () => {
  //     setOpen(true);
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=" lg:hidden ml-5">
      <Button variant="text" color="default" onClick={showDrawer}>
        <AlignLeftOutlined />
      </Button>

      <Drawer
        onClose={onClose}
        maskClosable={true}
        destroyOnClose
        closeIcon={""}
        placement="bottom"
        open={open}
        // loading={loading}
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
          {/* <div className="border">log</div> */}
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
