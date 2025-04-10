import React from "react";
import YourComments from "./yourComments/yourComments";
import Calender from "./calender/calender";
import ProgressComp from "./progress/progressComp";
import http from '../../../../core/services/interceptor'
import { useQuery } from "@tanstack/react-query";

const MainDashboard = () => {
  const getUserInfo = async () =>{
    const res = await http.get('/SharePanel/GetProfileInfo')
    return res
  }

  const {data } = useQuery({
    queryKey:'userInfo',
    queryFn:getUserInfo
  })

  // data && console.log(data)
  return (
    <div className="md:grid md:grid-cols-7 mt-3 gap-5">
      <YourComments />
      <Calender />
      <ProgressComp />
    </div>
  );
};

export default MainDashboard;
