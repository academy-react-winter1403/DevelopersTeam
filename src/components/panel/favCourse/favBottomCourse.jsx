import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineCalendarDateRange } from 'react-icons/hi2'
import NewsNavbar from '../../news/newsNavbar'

const FavBottomCourse = () => {
  return (
    <div>
      <div className="w-full h-auto mt-5 flex items-center gap-5">
        <div className=" ">
            <div className="flex items-center gap-2">
              <CiSearch className="w-6 h-6" />
              <h2>جستجو دوره</h2>
            </div>
            
          <div className="flex justify-between items-center relative mt-2">
            <input
              type="text"
              placeholder="جستجو کنید..."
              className="bg-[#D9D9D9] text-[#787878] rounded-xl px-6 py-1 outline-none focus:outline-none h-12"
            />
            <CiSearch className="w-10 h-12 rounded-xl bg-navyBlue absolute left-0 text-white " />
          </div>
        </div>
        <div className=" ">
            <div className="flex items-center gap-2">
              <HiOutlineCalendarDateRange className="w-6 h-6" />
              <h2> تاریخ برگزاری</h2>
            </div>
            
          <div className="flex justify-between items-center relative mt-2">
            <input
              type="text"
              placeholder="1403/5/20 - 1403/6/20"
              className="bg-[#D9D9D9] text-[#787878] text-sm text-left rounded-xl pr-10 pl-2 py-1 outline-none focus:outline-none h-12"
            />
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  )
}

export default FavBottomCourse
