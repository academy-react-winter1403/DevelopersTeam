import { Modal } from "antd";
import React from "react";
import { BiImageAdd } from "react-icons/bi";

const StepUploadImg = ({
  thirdModal,
  handleThirdOk,
  setThirdModal,
  handleAddPaymentImage,
}) => {
  return (
    <Modal
      title="ارسال فیش واریزی"
      open={thirdModal}
      onOk={handleThirdOk}
      onCancel={() => setThirdModal(false)}
      footer={false}
    >
      <input
        type="file"
        name=""
        className="hidden"
        onChange={(e) => handleAddPaymentImage(e.target.files[0])}
        id="file-inp"
      />
      <label htmlFor="file-inp" className="flex flex-row">
        <div className="w-20 h-20 border-4 rounded-2xl border-borderGray flex justify-center items-center cursor-pointer hover:border-blue-200 transition-colors">
          <BiImageAdd className="text-navyBlue w-10 h-10" />
        </div>
      </label>
    </Modal>
  );
};

export default StepUploadImg;
