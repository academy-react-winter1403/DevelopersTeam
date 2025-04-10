import Progress from "react-circle-progress-bar";
import React from "react";
import { LuPencilLine } from "react-icons/lu";

const ProgressProfile = () => {
  return (
    <div className=" w-full flex flex-col items-center">
      <span className="font-semibold text-base">وضعیت اطلاعات حساب</span>
      <div className="mt-2">
        <Progress progress={75} />
      </div>
      <h1 className="text-gray text-sm">اطلاعات حساب‌کابری شما تکمیل نیست</h1>
    </div>
  );
};

export default ProgressProfile;
