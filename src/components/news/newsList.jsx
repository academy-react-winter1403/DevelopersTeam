import React from 'react'
import http from '../../core/services/interceptor'
import { useQuery } from '@tanstack/react-query';
import NewsCard from '../common/news-card/newsCard';
import CoursesNavbar from '../courses/coursesNavbar/coursesNavbar';
import FilterPartOfNews from './filterPartOfSection';

const NewsList = () => {

  const getNewsList = async () => {
    const res = await http.get("/News?PageNumber=1&RowsOfPage=9&SortingCol=InsertDate&SortType=DESC");
    return res;
  };


  const { data } = useQuery({
    queryKey: "news-list",
    queryFn: getNewsList,
  });

  // data && console.log(data)

  return (
    <div className="grid grid-cols-4 h-auto m-4 border-4 border-borderGray rounded-4xl">
      <div className="col-span-4 lg:col-span-3 w-full border-2 border-red-400 ">
        <CoursesNavbar />
        <div>
          {data?.news.map((item,index)=>{
            return (
              <NewsCard
                key={item.id}
                addUserProfileImage={item.addUserProfileImage}
                title={item.title}
                miniDescribe={item.miniDescribe}
                addUserFullName={item.addUserFullName}
              />
            )
          })}
        </div>
      </div>
      <div className="hidden md:block p-8">
        <FilterPartOfNews />
      </div>
    </div>
  );

 
}

export default NewsList
