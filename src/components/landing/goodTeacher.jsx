import React from "react";
import http from "../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import ax from "../../assets/images/3d-glassy-abstract-spiral-band-blue 1.svg";
import { Link } from "react-router-dom";

const GoodTeacher = () => {
  const getGoodTeacher = async () => {
    const res = await http.get("/Home/GetTeachers");
    return res;
  };

  const { data } = useQuery({
    queryKey: ["goodTeacher"],
    queryFn: getGoodTeacher,
  });

  return (
    <div>
      <h2 className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl dark:text-white">
        برترین اساتید هفته
      </h2>
      <h2 className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] dark:text-gray-400 xl:text-[15px]">
        اساتیدی که با نظرسنجی در دوره‌ها به آنها بیشترین رای مثبت را دادند
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mt-12 sm:mt-18 w-10/12 mx-auto h-auto ">
        {data?.slice(0, 3).map((item, index) => (
          <React.Fragment key={item.id}>
            <div
              className={`border-[#E4E4E4] dark:border-gray-700 rounded-4xl border-4 xl:w-1/4 w-4/5 sm:w-3/5 md:w-[30%] mx-auto mt-12 relative h-[300px] dark:bg-gray-800
                hover:border-navyBlue hover: group
                `}
            >
              <div className="absolute top-[-50px] left-[50%] transform -translate-x-[50%] rounded-full  bg-white dark:bg-gray-800">
                <img
                  src={item.pictureAddress || ax}
                  alt=""
                  className={`rounded-full border-4 border-[#E4E4E4] dark:border-gray-700 object-cover w-20 h-20 sm:w-24 sm:h-24 group-hover:border-navyBlue`}
                />
              </div>

              <h2 className="text-center mt-16 font-bold text-xl dark:text-white">
                {item.fullName || "بینام"}
              </h2>

              <h3 className="text-center mt-4 font-semibold text-md dark:text-gray-300">
                تعداد دروس: {item.courseCounts}
              </h3>

              <p className="text-sm text-right pr-3 ml-5 mt-6 text-[#787878] dark:text-gray-400">
                این استاد در هفته جاری بالاترین بازخورد مثبت را دریافت کرده است.
              </p>

              <div
                className={`bg-[#3772FF] rounded-full w-3/4 mx-auto mt-6 text-[10px] md:text-[12px] h-8 leading-8 text-center text-white
                `}
              >
                <Link to={item.linkdinProfileLink}>ورود به لینکدین</Link>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GoodTeacher;