import React from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableFaveNews from "./tableNews/tableFaveNews";

const FavNew = () => {
  return (
    <div >
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl">
          علاقه مندی مقالات
        </h2>
      </div>
     <FavBottomCourse />
     <TableFaveNews/>
    </div>
  );
};

export default FavNew;
