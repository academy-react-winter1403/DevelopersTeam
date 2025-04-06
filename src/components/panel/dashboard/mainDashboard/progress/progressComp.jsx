import React from "react";
import Progress from "react-circle-progress-bar";
import { LuPencilLine } from "react-icons/lu";

const ProgressComp = () => {
  return (
    <div className="col-span-2 flex flex-col justify-c enter items-center bg-[#FEFDFF] rounded-2xl">
      <div className="flex justify-between w-full px-5 mt-5">
        <span className="font-semibold">وضعیت اطلاعات حساب</span>
        <span>
          <LuPencilLine className="w-5 h-5 text-navyBlue" />
        </span>
      </div>
      <div className="mt-2">
        <Progress progress={75} />
      </div>
      <div>
        <h1 className="text-navyBlue">اطلاعات حساب‌کابری شما تکمیل است</h1>
      </div>
    </div>
  );
};

export default ProgressComp;
