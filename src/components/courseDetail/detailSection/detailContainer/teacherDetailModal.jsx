import { Modal } from "antd";
import React from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { BiBookAlt } from "react-icons/bi";

const TeacherDetailModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  teacherData,
}) => {
  return (
    <Modal
      footer={false}
      title="درباره استاد"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {teacherData?.length === 0 ? (
        <div className="text-gray">اطلاعاتی یافت نشد</div>
      ) : (
        <div className="flex flex-col text-lg">
          <div className="flex items-center space-x-1">
            <span>
              <LiaChalkboardTeacherSolid className="w-5 h-5" />
            </span>
            <span className="ml-2 font-bold">نام استاد : </span>
            {teacherData?.fullName}
          </div>
          <div className="flex items-center space-x-1">
            <span>
              <CiLinkedin className="w-5 h-5" />
            </span>
            <span className="ml-2 font-bold">لینکدین: </span>
            {teacherData?.linkdinProfileLink}
          </div>
          <div className="flex items-center space-x-1">
            <span>
              <HiOutlineBookOpen className="w-5 h-5" />
            </span>
            <span className="ml-2 font-bold">دوره ها : </span>
            {teacherData?.courseCounts}
          </div>
          <div className="flex items-center space-x-1">
            <span>
              <BiBookAlt className="w-5 h-5" />
            </span>
            <span className="ml-2 font-bold">مقاله ها : </span>
            {teacherData?.newsCount}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default TeacherDetailModal;
