import { useQuery } from "@tanstack/react-query";
import React from "react";
import http from "./../../../core/services/interceptor";
import defImg from "./../../../assets/images/courses/courseimg.svg";

const ResponsivNews = () => {
  const getFavNews = async () => {
    const res = await http.get(`/SharePanel/GetMyFavoriteNews`);
    return res;
  };
  const { data } = useQuery({
    queryKey: "favNewsPanel",
    queryFn: getFavNews,
  });

  return (
    <div className=" w-full h-auto sm:hidden">
      <div className="w-full h-auto  flex justify-around items-center mt-5">
        <h2 className="text-lg font-bold">علاقه مندی مقاله</h2>
        <h2 className="w-20 h-9 rounded-3xl bg-navyBlue leading-9 pr-6">
          <span className="text-white ">فیلتر</span>
        </h2>
      </div>

      {data?.myFavoriteNews.map((item) => {
        return (
          <div className="bg-white w-full h-auto mt-5">
            <div className="border-b-1 border-[#E4E4E4] w-11/12 mx-auto h-32 flex items-center gap-3">
              <div className=" w-1/3  my-5">
                <img
                  src={
                    item.currentImageAddressTumb == null
                      ? defImg
                      : item.currentImageAddressTumb
                  }
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold line-clamp-1">{item.title}</div>
                 {/* <div className='text-[#787878] font-semibold'>{item.محسن}</div> */}
                        {/* <div className='text-[#787878] font-semibold'>{item.title}</div>  */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResponsivNews;
