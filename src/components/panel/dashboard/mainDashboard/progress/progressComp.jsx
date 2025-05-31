import React from "react";
import Progress from "react-circle-progress-bar";
import { LuPencilLine } from "react-icons/lu";

const ProgressComp = ({ userData }) => {
  return (
    <div className="col-span-2 md:flex flex-col justify-center items-center bg-[#FEFDFF] dark:bg-gray-800 rounded-2xl hidden md:order-3">
      <div className="flex justify-between w-full px-5 mt-5">
        <span className="font-semibold dark:text-white">
          وضعیت اطلاعات حساب
        </span>
        <span>
          <LuPencilLine className="w-5 h-5 text-navyBlue dark:text-blue-400" />
        </span>
      </div>
      <div className="mt-2">
        <Progress
          progress={userData?.profileCompletionPercentage}
          fill="#fff"
          renderText={({ percent }) => (
            <span
              style={{
                color: darkMode ? "#fff" : "#1790ff", // مدل رنگ درست برای مد شما
                background: darkMode ? "transparent" : "#1790ff", // پس زمینه فقط حالت عادی
                padding: "4px 12px",
                borderRadius: "4px",
              }}
            >
              {percent}%
            </span>
          )}
        />
      </div>
      <div className="mb-3">
        {userData?.profileCompletionPercentage == 100 ? (
          <span className="text-navyBlue dark:text-blue-400">
            اطلاعات حساب‌کابری شما تکمیل است
          </span>
        ) : (
          <span className="text-navyBlue dark:text-blue-400">
            اطلاعات حساب‌کابری شما تکمیل نیست
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressComp;
