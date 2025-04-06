import React from "react";
import YourComments from "./yourComments/yourComments";
import Calender from "./calender/calender";
import ProgressComp from "./progress/progressComp";

const MainDashboard = () => {
  return (
    <div className="md:grid md:grid-cols-7 mt-3 border gap-5">
      <YourComments />
      <Calender />
      <ProgressComp />
    </div>
  );
};

export default MainDashboard;
