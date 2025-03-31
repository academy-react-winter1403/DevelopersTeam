import React from "react";
import GridCarsSkeleton from "../common/gridCarsSkeleton/gridCarsSkeleton";

const NewsIsLoading = ({isLoading}) => {
  return (
    <div className="flex flex-wrap justify-evenly space-y-5 p-2 ">
      {isLoading &&
        Array.from({ length: 9 }).map((item, index) => (
          <GridCarsSkeleton key={index} />
        ))}
    </div>
  );
};

export default NewsIsLoading;
