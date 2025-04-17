import React, { useEffect, useState } from "react";
import FavBottomCourse from "../favCourse/favBottomCourse";
import TableMyCoursesHolder from "./tableMyCourses/tableMyCoursesHolder";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import PanelModal from "../../common/panelModal/panelModal";

const MyCourse = () => {
  const [convertedData, setCovertedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const getMyCourses = async () => {
    const res = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate`
    );
    return res;
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["myCoursesPanel"],
    queryFn: getMyCourses,
  });

  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!data) return;
    if (!query.trim()) {
      setFilteredData(data);
      return;
    }

    const filteredCourses = data.listOfMyCourses.filter((item) =>
      item.courseTitle.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData({
      ...data,
      listOfMyCourses: filteredCourses,
      totalCount: filteredCourses.length,
    });
  };

  return (
    <div className="">
      <div>
        <h2 className="w-full h-10 mt-5 font-bold text-xl">دوره من</h2>
      </div>
      <FavBottomCourse handleSearch={handleSearch} />
      {filteredData && (
        <TableMyCoursesHolder
          data={filteredData}
          convertedData={convertedData}
          setCovertedData={setCovertedData}
          isSuccess={isSuccess}
          showDrawer={showDrawer}
        />
      )}


      {data?.listOfMyCourses.map((item) =>{
        return(
          
          <PanelModal isMyCourses={true} onClose={onClose} open={open} img={item.tumbImageAddress} title={item.courseTitle} paymentStatus={item.paymentStatus} describe={item.describe} teacher={item.fullName} lastUpdate={item.lastUpdate} cost={item.cost}/>
        )
      })}
    </div>
  );
};

export default MyCourse;
