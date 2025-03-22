import React from 'react'
import NewsCard from '../common/news-card/newsCard'
import http from '../../core/services/interceptor'
import { useQuery } from '@tanstack/react-query';

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
    <div className='border-2 border-gray-200 rounded-2xl w-[1500px] min-h-[1500px] mx-auto'>

      <div className='w-[550px] h-12 border-2 border-gray-200 mr-4 mt-4'></div>

      <div className='border-2 border-gray-200 min-h-[1400px] flex justify-around '>
        <div className='w-[1100px] border-2 border-blue-400 min-h-[1400px]'>
            <NewsCard/>
        </div>
        <div className='w-[300px] border-2 border-red-400 h-96'></div>
      </div>

    </div>
  )
}

export default NewsList
