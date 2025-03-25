// import React from "react";
// import http from '../../core/services/interceptor'
// import NewsCard from "../common/news-card/newsCard";
// import { useQuery } from "@tanstack/react-query";

// const TopNews = () => {
//   const getTopNews = async () => {
//     const res = await http.get("/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC");
//     return res;
//   };

//   const { data } = useQuery({
//     queryKey: "topNews",
//     queryFn: getTopNews,
//   });
//   return (
//     <div>
//       <h1 className="text-[25px]  h-10 mx-auto mt-8 indent-[650px] font-bold">
//         اخبار و مقالات هفته
//       </h1>
//       <h6 className="text-[13px] mx-auto indent-[620px] h-10 text-gray-600">
//         خبرها و مقاله هایی که دراین هفته منتشر شدند
//       </h6>
//       <div className="my-4 flex justify-center gap-4 mb-16">
//         {data?.news.map((item) => {
//           return (
//            <NewsCard addUserProfileImage={item.addUserProfileImage} title={item.title} miniDescribe={item.miniDescribe} addUserFullName={item.addUserFullName}/>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TopNews;



import React from "react";
import http from "../../core/services/interceptor";
import NewsCard from "../common/news-card/newsCard";
import { useQuery } from "@tanstack/react-query";

const TopNews = () => {
  const getTopNews = async () => {
    const res = await http.get(
      "/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC"
    );
    return res;
  };

  const { data } = useQuery({
    queryKey: "topNews",
    queryFn: getTopNews,
  });

  return (
    <div className="container mx-auto px-4 mt-[80px] sm:px-6 sm:mt-16 lg:px-8">
      <h1 className="text-2xl sm:text-[25px] font-bold text-center mt-8">
        اخبار و مقالات هفته
      </h1>
      <h6 className="text-[13px] sm:text-[13px] text-[#787878] text-center font-bold mt-2">
        خبرها و مقاله‌هایی که در این هفته منتشر شدند
      </h6>
      <div className="flex flex-wrap justify-center gap-y-4  my-8  w-[85%] mx-auto">
        {data?.news.map((item) => (
          <NewsCard
            key={item.id}
            addUserProfileImage={item.addUserProfileImage}
            title={item.title}
            miniDescribe={item.miniDescribe}
            addUserFullName={item.addUserFullName}
          />
        ))}
      </div>
    </div>
  );
};

export default TopNews;
