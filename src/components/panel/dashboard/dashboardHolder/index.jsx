import React from 'react'
import HeaderDashboard from '../headerDashboard/headerDashboard'
import MainDashboard from '../mainDashboard/mainDashboard'
import TopCourseDashbord from '../topCourseDashbord/topCourseDashbord'
import { useQuery } from '@tanstack/react-query'
import http from "./../../../../core/services/interceptor";

const DashboardHolder = () => {

  const getProfile = async () => {
    const res = await http.get(`/SharePanel/GetProfileInfo`);
    return res;
  };
  const { data:userData } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <div>
        <HeaderDashboard userData={userData} />
        <MainDashboard/>
        <TopCourseDashbord/>
    </div>
  )
}

export default DashboardHolder