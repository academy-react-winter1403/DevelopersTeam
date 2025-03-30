import React from "react";
import CardSkeleton from "../../../common/cardSkeleton/cardSkeleton";
import GridCarsSkeleton from "../../../common/gridCarsSkeleton/gridCarsSkeleton";

const IsLoadingComponent = ({ isLoading, viewMode }) => {
  return (
    <div className="flex flex-wrap justify-evenly space-y-5 p-2 ">
      {isLoading &&
        Array.from({ length: 9 }).map((_, index) =>
          viewMode === "list" ? (
            <CardSkeleton key={index} />
          ) : (
            <GridCarsSkeleton key={index} />
          )
        )}
    </div>
  );
};

export default IsLoadingComponent;
