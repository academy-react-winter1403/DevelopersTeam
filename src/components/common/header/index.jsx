import React from 'react'
import logo from "./../../../assets/images/logo.svg";
import logoText from "./../../../assets/images/logoText.svg";
import darkMood from "./../../../assets/images/darkLego.svg";


const Header = () => {
  return (
    <div  className='w-[1320px] h-[56px]  border-2 border-[#E4E4E4] mt-5 mx-auto flex flex-nowrap'>
      
      <img src={logo} alt="logo" className="w-14" />
      <img src={logoText} alt="text" className="w-44 h-8 mt-3" />
      <span>خانه</span>
      <span>دوره ها</span>
      <span>اخبار و مقالات</span>
      <span>ارتباط با ما</span>
      <img src={darkMood} alt="" className='w-14 h-56 border-[1px] left-[254px]' />
      <span className=''>ورود یا ثبت نام</span>
    </div>
  )
}

export default Header