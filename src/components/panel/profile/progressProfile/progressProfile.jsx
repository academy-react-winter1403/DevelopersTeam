import Progress from "react-circle-progress-bar";
import React from "react";
import { LuPencilLine } from "react-icons/lu";

const ProgressProfile = ({ profileCompletionPercentage }) => {
  return (
    <div className=" w-full flex flex-col items-center">
      <span className="font-semibold text-base">وضعیت اطلاعات حساب</span>
      <div className="mt-2">
        <Progress progress={profileCompletionPercentage} />
      </div>
      <h1 className="text-gray text-sm">
        {profileCompletionPercentage == 100 ? (
          <span>اطلاعات حساب‌کابری شما تکمیل است</span>
        ) : (
          <span>اطلاعات حساب‌کابری شما تکمیل نیست</span>
        )}
      </h1>
    </div>
  );
};

export default ProgressProfile;
