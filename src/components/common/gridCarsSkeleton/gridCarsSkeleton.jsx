import { Skeleton } from "antd";
import React from "react";

const GridCarsSkeleton = () => {
  return (
    <div className="w-full my-5 rounded-2xl h-[300px] bg-lightGray ">
      <div className="flex 2xl:gap-5 gap-2 ">
        <div>
          <Skeleton.Image
            style={{ width: "350px", height: "300px", borderRadius: "16px" }}
          />
        </div>
        <div className="mt-10 w-full mx -10">
          <Skeleton style={{ width: "600px" }} />
          <Skeleton.Input style={{ width: "600px", marginTop: "10px" }} />
          <Skeleton.Input style={{ width: "600px", marginTop: "10px" }} />
        </div>
      </div>
    </div>
  );
};

export default GridCarsSkeleton;
