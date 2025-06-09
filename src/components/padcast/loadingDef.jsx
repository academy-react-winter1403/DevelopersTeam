import React from "react";
import CardSkeleton from "../common/cardSkeleton/cardSkeleton";

const LoadingDef = ({ isLoading }) => {
  return (
    <div className="flex flex-wrap justify-evenly space-y-5 p-2 ">
      {isLoading &&
        Array.from({ length: 8 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};

export default LoadingDef;
