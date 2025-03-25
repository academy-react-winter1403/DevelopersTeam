import React from "react";
import http from "../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import ax from '../../assets/images/3d-glassy-abstract-spiral-band-blue 1.svg'

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
      <h2 className="text-center mx-auto font-bold text-2xl xl:mt-24 mt-[1200px] sm:mt-[450px] xl:text-3xl">برترین اساتید هفته</h2>
      <h2 className="text-center mx-auto font-bold text-[12px] mt-4 text-[#787878] xl:text-[15px]">اساتیدی که با نظرسنجی در دوره ها به آنها بیشترین رای مثبت را دادند  </h2>
      <div className=" flex flex-col lg:flex-row gap-4 mt-16 sm:mt-14 w-10/12 mx-auto ">
      {data?.slice(0, 3).map((item,index) => (
        <React.Fragment key={item.id}>
          <div className="border-[#E4E4E4] rounded-2xl border-2 xl:w-1/4 w-4/5 mx-auto mt-16 relative h-[300px] sm:w-3/5 sm:mt-10 md:w-3/7 ">
            
            <div>
              <img src={item.pictureAddress ? item.pictureAddress : ax} alt='' className="rounded-full w-25 h-25 absolute xl:right-20 2xl:right-[110px] sm:right-28 md:right-22 right-[80px] top-[-50px] border-2"/>
            </div>

            <h2 className="text-center mt-20 font-bold text-xl">{item.fullName ? item.fullName : 'بینام'}</h2>
            
            <div className="" >
              <h2 className="text-center mt-5 font-bold text-md" >تعداد دروس : {item.courseCounts}</h2> 
            </div>
            <div className="text-sm text-left ml-6 mt-10 text-[#787878]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="bg-[#3772FF] rounded-full w-3/4 mt-5 text-[10px] mx-auto h-8 leading-8 text-center">
              {item.linkdinProfileLink}
            </div>

            
          </div>
        </React.Fragment>
      ))}
    </div>
    </div>
  );
};

export default GoodTeacher;
