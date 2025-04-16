import React, { useState } from "react";
import { Button, Drawer, Radio, Rate, Space } from "antd";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";

const PanelModal = ({ onClose, open }) => {
  return (
    <>
      <Drawer
        title="Drawer with extra actions"
        placement="left"
        width={500}
        onClose={onClose}
        open={open}
        headerStyle={""}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="lg:w-[719px] h-auto m-4 lg:m-0 dark:text-white">
          <div className="w-full md:h-[428px] rounded-3xl overflow-hidden">
            <img
              src={defaultImg}
              alt="not set"
              className="w-full h-full"
              // onError={addDefaultImg}
            />
          </div>
          <div className="w-full p-2 space-y-5 mt-5">
            <h1 className="text-gray dark:text-gray-400">مدرس</h1>
            <div className="flex space-x-3 items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={defaultImg} alt="" className="w-14 h-14" />
              </div>
              <div>
                <h1 className="font-semibold dark:text-white">ddsdfsd</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-auto p-2 space-y-3">
            <h1 className="text-gray dark:text-gray-400">توضیحات</h1>
            <div className="space-y-5">
              <h1 className="font-bold text-xl dark:text-white">
                ری اکت چیست؟
              </h1>
              <p className="dark:text-gray-300">dddddddddddd</p>
            </div>
          </div>
          <div className="p-2 mt-10 space-x-4 flex items-center dark:text-white">
            {/* <img src={star} alt="" className="dark:invert" /> */}
            <span>امتیاز بدید</span>
            <span>100</span>
            <Rate
              allowHalf
              value={4}
              // onChange={(rateValue) => mutate(rateValue)}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default PanelModal;
