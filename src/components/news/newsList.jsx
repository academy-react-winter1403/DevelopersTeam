import React, { useEffect, useState } from 'react'
import http from '../../core/services/interceptor'
import { useQuery } from '@tanstack/react-query';
import CoursesNavbar from '../courses/coursesNavbar/coursesNavbar';
import FilterPartOfNews from './filterPartOfSection';
import NewsItemCard from './newsItemCard';
import PaginationSection from '../common/PaginationSection/paginationSection';

const NewsList = () => {

  const [newsList, setNewsList] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const numberOfPage =
  newsList && Math.ceil(newsList.totalCount / itemPerPage);



  const getNewsList = async () => {
    const res = await http.get(`/News?PageNumber=1&RowsOfPage=9&SortingCol=InsertDate&SortType=DESC=${pageNum}&RowsOfPage=${itemPerPage}`);
    return res;
  };


  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["news-list", pageNum, itemPerPage],
    queryFn: getNewsList,
  });

  
    useEffect(() => {
      refetch();
    }, [pageNum, itemPerPage, refetch]);
  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;
  

  return (
    <div className="grid grid-cols-4 h-auto m-4 border-4 border-borderGray rounded-4xl">
      <div className="col-span-4 lg:col-span-3 w-full  ">
        <CoursesNavbar />
        <div className=' '>
          {data?.news.map((item,index)=>{
            return (
              <NewsItemCard
                key={item.id}
                addUserProfileImage={item.addUserProfileImage}
                title={item.title}
                miniDescribe={item.miniDescribe}
                addUserFullName={item.addUserFullName}
              />
            )
          })}
        </div>
        <PaginationSection
          totalCount={data?.totalCount}
          pageNum={pageNum}
          itemPerPage={itemPerPage}
          setPageNum={setPageNum}
        />
      </div>
      <div className="hidden md:block p-8">
        <FilterPartOfNews />

      </div>
    </div>
  );

 
}

export default NewsList
