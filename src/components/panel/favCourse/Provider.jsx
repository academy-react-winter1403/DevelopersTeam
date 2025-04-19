import React, { useEffect, useState } from "react";
import TableFaveCourseHandle from "./tableFavCourse/tableFaveCourseHandle";
import axios from "axios";

const Provider = ({ data }) => {
  const [finalData, setFinalData] = useState();
  async function convertData() {
    let convertedData = [];
    for (let index = 0; index < data?.favoriteCourseDto.length; index++) {
        const element = data?.favoriteCourseDto[index];
        // console.log(element);
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
    // console.log("convertedData",convertedData);
  }

  useEffect(() => {
    if (data) {
      convertData();
    }
  }, [data]);

//   console.log("data2", finalData);

  return data && <TableFaveCourseHandle data={finalData} isSuccess={true} />;
};

export default Provider;
