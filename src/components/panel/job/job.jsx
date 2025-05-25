import React, { useEffect, useState } from "react";
// import TableFaveCourseHandle from "./tableFavCourse/tableFaveCourseHandle";
import http from "./../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
// import Provider from "./Provider";
import JobBottom from "./jobBottom";

const Job = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getJob = async () => {
    const res = await http.get(`/SharePanel/GetMyJobHistories`);
    return res;
  };
  const { data } = useQuery({
    queryKey: ["jobPanel"],
    queryFn: getJob,
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

    const filteredJob = data.jobLists.filter((item) =>
      item.jobTitle.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData({
      ...data,
      jobLists: filteredJob,
      totalCount: filteredJob.length,
    });
  };

  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="w-full h-10  mt-5 font-bold text-xl ">
           شغل ها
        </h2>
      </div>
      <JobBottom handleSearch={handleSearch} />
      {/* <Provider data={filteredData || data} /> */}
    </div>
  );
};

export default Job;
