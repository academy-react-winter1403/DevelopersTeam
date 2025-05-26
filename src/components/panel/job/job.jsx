// import React, { useEffect, useState } from "react";
// // import TableFaveCourseHandle from "./tableFavCourse/tableFaveCourseHandle";
// import http from "./../../../core/services/interceptor";
// import { useQuery } from "@tanstack/react-query";
// // import Provider from "./Provider";
// import JobBottom from "./jobBottom";
// import TableJob from "./table/tableJob";

// const Job = () => {
//   const [searchQuery, setSearchQuery] = useState("");

// const getJob = async () => {
//   const res = await http.get(`/SharePanel/GetMyJobHistories`);
//   return res;
// };
// const { data } = useQuery({
//   queryKey: ["jobPanel"],
//   queryFn: getJob,
// });

//   console.log("job",data);

//   const [filteredData, setFilteredData] = useState(null);

//   // useEffect(() => {
//   //   if (data) {
//   //     setFilteredData(data);
//   //   }
//   // }, [data]);

//   // const handleSearch = (e) => {
//   //   const query = e.target.value;
//   //   setSearchQuery(query);

//   //   if (!data) return;
//   //   if (!query.trim()) {
//   //     setFilteredData(data);
//   //     return;
//   //   }

//   //   const filteredJob = data.jobLists.filter((item) =>
//   //     item.jobTitle.toLowerCase().includes(query.toLowerCase())
//   //   );

//   //   setFilteredData({
//   //     ...data,
//   //     jobLists: filteredJob,
//   //     totalCount: filteredJob.length,
//   //   });
//   // };

//   return (
//     <div>
//       <div className="hidden sm:block">
//         <h2 className="w-full h-10  mt-5 font-bold text-xl ">
//            شغل ها
//         </h2>
//       </div>
//       <TableJob data={data?.jobLists} />
//       <JobBottom  data={data} />
//       {/* <Provider data={filteredData || data} /> */}
//     </div>
//   );
// };

// export default Job;

import React, { useState } from "react";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import TableHolderJobs from "./jobTable/tableHolder";
import JobBottom from "./jobBottom";
import AddJob from "./addJob/addJob";

const Job = () => {
  const [convertedData, setCovertedData] = useState([]);

  const getJob = async () => {
    const res = await http.get(`/SharePanel/GetMyJobHistories`);
    return res;
  };
  const { data, isSuccess } = useQuery({
    queryKey: ["jobPanel"],
    queryFn: getJob,
  });

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl "> شغل ها </h2>
      </div>
      <div className="flex justify-between items-end">
        <JobBottom />
        <AddJob isEdit={false} />
      </div>
      <TableHolderJobs
        data={data?.jobLists}
        isSuccess={isSuccess}
        convertedData={convertedData}
        setCovertedData={setCovertedData}
      />
    </div>
  );
};

export default Job;
