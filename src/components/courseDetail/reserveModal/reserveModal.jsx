import React, { useState } from "react";
import { Button, Modal } from "antd";
import img from "./../../../assets/images/courseDetail/reserveModal.svg";
import { LuCircleCheckBig } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const ReserveModal = ({ isModalOpen, setIsModalOpen }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        bodyStyle={{
          height: "390px",
        }}
        width={450}
      >
        <div className="w-full h-96">
          <div className="w-full h-9 bg-[#2CDA5D] rounded-4xl flex items-center justify-center space-x-2">
            <h1 className="font-semibold text-white text-base">
              دوره با موفقیت به لیست رزرو های شما اضافه شد
            </h1>
            <LuCircleCheckBig className="text-white w-5 h-5" />
          </div>
          <div>
            <img src={img} alt="" className="" />
          </div>
          <p className="text-gray text-lg text-center px-14">
            بعد از تایید ادمین مربوط دوره شما به{" "}
            <span className="font-semibold text-black underline">دوره من</span>{" "}
            اضافه خواهد شد
          </p>
          <div className="mt-5 flex justify-between">
            <NavLink to="/panel/myreservecourse">
              <Button
                type="primary"
                shape="round"
                style={{ fontFamily: "yekan", width: "275px", height: "36px" }}
              >
                لیست رزرو های من
              </Button>
            </NavLink>
            <Button
              shape="round"
              style={{ fontFamily: "yekan", width: "115px", height: "36px" }}
              onClick={() => setIsModalOpen(false)}
            >
              باشه
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReserveModal;
