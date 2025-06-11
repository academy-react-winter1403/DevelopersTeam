import React from "react";
import HeaderDashboard from "../headerDashboard/headerDashboard";
import MainDashboard from "../mainDashboard/mainDashboard";
import TopCourseDashbord from "../topCourseDashbord/topCourseDashbord";
import { useQuery } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";

const DashboardHolder = () => {
  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };
  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <div className="mb-32 md:mb-0">
      <HeaderDashboard userData={userData} />
      <MainDashboard userData={userData} />
      <TopCourseDashbord />
    </div>
  );
};

export default DashboardHolder;
