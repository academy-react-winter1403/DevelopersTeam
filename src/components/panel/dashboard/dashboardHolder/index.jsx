import React from 'react'
import HeaderDashboard from '../headerDashboard/headerDashboard'
import MainDashboard from '../mainDashboard/mainDashboard'
import TopCourseDashbord from '../topCourseDashbord/topCourseDashbord'

const DashboardHolder = () => {
  return (
    <div>
        <HeaderDashboard />
        <MainDashboard/>
        <TopCourseDashbord/>
    </div>
  )
}

export default DashboardHolder