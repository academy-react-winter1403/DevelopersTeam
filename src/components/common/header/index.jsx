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
      <div className='w-3/5 xl:flex justify-center gap-10 hidden'>
        <Link> <span className=' leading-12'>خانه</span></Link>
        <Link><span className='leading-12'>دوره ها</span></Link>
        <Link><span className=' h-28 leading-12'>اخبار و مقالات</span></Link>
        <Link><span className=' h-28 leading-12'>ارتباط با ما</span></Link>
      </div>

      <div className='ps-10 hidden xl:flex '>
        <div className='border-2 border-gray-200 h-9 w-9 p-2 mt-3 rounded-full'>
         <img src={darkMood} alt="" className=' ' />
        </div>
      </div>    
      <Link className='bg-[#3772FF] text-white rounded-3xl m-2 p-2'>ورود یا ثبت نام</Link>
    </div>
  )
}

export default Header