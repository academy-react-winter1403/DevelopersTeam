import React from "react";
import YourComments from "./yourComments/yourComments";
import ProgressComp from "./progress/progressComp";
import http from "../../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
// import CalenderComp from "./calender/calender";

const MainDashboard = ({ userData }) => {
  const getUserInfo = async () => {
    const res = await http.get("/SharePanel/GetProfileInfo");
    return res;
  };

  const { data } = useQuery({
    queryKey: "userInfo",
    queryFn: getUserInfo,
  });

  // data && console.log(data)
  return (
    <div className="lg:grid lg:grid-cols-7 mt-3 gap-5 flex flex-col">
      <YourComments userData={userData} />
      {/* <CalenderComp  /> */}
      <ProgressComp userData={userData} />
    </div>
  );
};

export default MainDashboard;
