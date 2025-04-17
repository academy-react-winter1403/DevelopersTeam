import axios from "axios";
import React, { useEffect, useState } from "react";
import TableMyReserveCoursesHolder from "./tableMyReserveCourses/tableMyReserveCoursesHolder";

const Provider = ({ data }) => {
  const [finalData, setFinalData] = useState();
  async function convertData() {
    let convertedData = [];
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      try {
        await axios
          .get(
            `${import.meta.env.VITE_BASE_URL}/Home/GetCourseDetails?CourseId=${
              element?.courseId
            }`
          )
          .then((el) => {
            if (el?.data) {
              element["courseData"] = el?.data;
              convertedData.push(element);
            }
          });
      } catch (error) {}
    }
    setFinalData(convertedData);
  }

  useEffect(() => {
    if (data) {
      convertData();
    }
  }, [data]);
  return (
    data && <TableMyReserveCoursesHolder  data={finalData} isSuccess={true} />
  );
};

export default Provider;
