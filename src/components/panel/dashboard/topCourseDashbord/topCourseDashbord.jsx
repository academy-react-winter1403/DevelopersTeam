import React, { lazy, Suspense, useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
const TableTopCourses = lazy(() => import("./tableTopCourses"));
import http from "./../../../../core/services/interceptor";
import {useQuery} from '@tanstack/react-query'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DateComponent from "../../../common/date/dateComponent";
import PriceComponent from "../../../common/priceComponent/priceComponent";


const TopCourseDashbord = () => {
  const [convertedData,setCovertedData]=useState([])

  const getTopCourses = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`
    );
    return res;
  };

  const { data,isSuccess } = useQuery({
    queryKey: "topCoursesPanel",
    queryFn: getTopCourses,
  });
  useEffect(()=>{
    if (isSuccess) {
      // console.log(data.listOfMyCourses)
      const i = data.listOfMyCourses.map(el=>{
        let newData = {}
        newData["name"]=el.courseTitle
        newData["desc"]=el.describe 
        newData["teacher"]=el.fullName 
        newData["date"]=<DateComponent insertDate={el.lastUpdate } />
        newData["price"]=<PriceComponent cost={el.cost }/>
        newData["eye"]=<MdOutlineRemoveRedEye className="w-5 h-5 text-gray"/>
        return newData
      })
      setCovertedData(i)
    }
  },[isSuccess])

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-10 flex justify-between items-center px-6 py-2 font-bold">
          <h2>جدیدترین دوره ها</h2>
          <div className="flex items-center text-navyBlue gap-1 ">
            <h2>مشاهده همه</h2>
            <MdKeyboardArrowLeft />
          </div>
        </div>
        <div className=" w-full h-70">
          <Suspense fallback={<h1>loading...</h1>}>
           {isSuccess&& <TableTopCourses data={convertedData} />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default TopCourseDashbord;
