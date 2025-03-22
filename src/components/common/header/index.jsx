import React from 'react'
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import darkMood from "./../../../assets/images/darkLego.svg";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div  className=' h-[56px]  border-[#E4E4E4] mt-5 mx-auto flex flex-nowrap justify-between px-10'>
      <div className='flex w-1/5 justify-center'>
        <img src={logo} alt="logo" className=" h-[42px] " />
        <img src={logoText} alt="text" className="w-[189px] h-[38px] mt-3 " />
      </div>     
      <div className='w-3/5 flex justify-center gap-10'>
        <span className=' mt-3 '>خانه</span>
        <span className='mt-3 '>دوره ها</span>
        <span className=' h-28 mt-3'>اخبار و مقالات</span>
        <span className=' h-28 mt-3'>ارتباط با ما</span>
      </div>

      <div className='w-1/5 ps-10 flex gap-5'>
      <div className='border-2 border-gray-200 h-9 w-9 p-2 mt-3 rounded-full'>
      <img src={darkMood} alt="" className=' ' />
      </div>
      <Link className='bg-[#3772FF] px-7 text-white pt-1 rounded-2xl h-2/3 mt-3'>ورود یا ثبت نام</Link>
      </div>    
    </div>
  )
}

export default Header