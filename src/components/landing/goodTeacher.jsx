import React from "react";
import http from "../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import ax from '../../assets/images/3d-glassy-abstract-spiral-band-blue 1.svg';

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
      
      <h2 className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-10 sm:mt-[50px] xl:text-3xl">
        برترین اساتید هفته
      </h2>
      <h2 className="text-center mx-auto font-normal text-[12px] mt-6 text-[#787878] xl:text-[15px]">
        اساتیدی که با نظرسنجی در دوره‌ها به آنها بیشترین رای مثبت را دادند
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 mt-12 sm:mt-24 w-10/12 mx-auto h-auto">
        {data?.slice(0, 3).map((item, index) => (
          <React.Fragment key={item.id}>
            <div
              className={`border-[#E4E4E4] rounded-2xl border-2 xl:w-1/4 w-4/5 sm:w-3/5 md:w-[30%] mx-auto mt-12 relative h-[300px] ${
                index === 1 && "xl:h-80 sm:!h-72 !mt-[-10px]"
              }`}
            >
              <div className="absolute top-[-50px] left-[50%] transform -translate-x-[50%]">
                <img
                  src={item.pictureAddress || ax}
                  alt=""
                  className={`rounded-full border-[3px] border-[#E4E4E4] object-cover ${
                    index === 1
                      ? "w-28 h-28 xl:w-32 xl:h-32"
                      : "w-20 h-20 sm:w-24 sm:h-24"
                  }`}
                />
              </div>

              <h2 className="text-center mt-20 font-bold text-xl">
                {item.fullName || "بینام"}
              </h2>

              <h3 className="text-center mt-4 font-semibold text-md">
                تعداد دروس: {item.courseCounts}
              </h3>

              <p className="text-sm text-right pr-3 ml-5 mt-6 text-[#787878]">
                این استاد در هفته جاری بالاترین بازخورد مثبت را دریافت کرده است.
              </p>

              <div
                className={`bg-[#3772FF] rounded-full w-3/4 mx-auto mt-6 text-[10px] md:text-[12px] h-8 leading-8 text-center ${
                  index === 1 && "mt-8"
                }`}
              >
                {item.linkdinProfileLink || "linkedin.com"}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GoodTeacher;
