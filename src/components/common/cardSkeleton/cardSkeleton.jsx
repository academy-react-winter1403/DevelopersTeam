import { Skeleton } from "antd";
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-[310px] h-[450px] bg-lightGray flex flex-col overflow-hidden rounded-3xl">
      <div className="w-full h-[200px] rounded-3xl bg-gray opacity-20">
        <Skeleton.Image
          active
          style={{ width: "310px", height: "200px", borderRadius: "24px" }}
        />
      </div>

      <div className=" w-full h-full px-3 flex flex-col  mt-3 ">
        <div className="grow ">
          <Skeleton active />
        </div>
        <div className="mt-3 flex-none space-y-3 ">
          <Skeleton.Input active style={{ width: "284px" }} />
        </div>
        <div className="flex flex-none justify-between my-3">
          <div className="space-x-2 flex justify-center items-center"></div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1"></div>
            <div className="flex items-center gap-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
