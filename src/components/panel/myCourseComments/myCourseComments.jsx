// import React from "react";
// import FavBottomCourse from "../favCourse/favBottomCourse";
// import TableHolder from "./table/tableHolder";

// const MyCourseComments = () => {
//   return (
//     <div>
//       <div className="hidden sm:block">
//         <h2 className="w-full h-10 mt-5 font-bold text-xl">کامنت های دوره</h2>
//       </div>
//       <div className="flex items-center">
//         <div>
//           <FavBottomCourse />
//         </div>
//       </div>
//       <TableHolder />
//     </div>
//   );
// };

// export default MyCourseComments;

import React, { useState } from "react";
import TableHolder from "./table/tableHolder";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";

const MyCourseComments = () => {
  const [convertedData, setCovertedData] = useState([]);

  const getMyCourseComment = async () => {
    const res = await http.get(`/SharePanel/GetMyCoursesComments`);
    return res;
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["myCourseComment"],
    queryFn: getMyCourseComment,
  });

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10 mt-5 font-bold text-xl">کامنت های دوره</h2>
      </div>
      <TableHolder
        data={data}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
      />
    </div>
  );
};

export default MyCourseComments;