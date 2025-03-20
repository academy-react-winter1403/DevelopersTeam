import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='mx-auto h-16 w-[700px] text-[30px] font-bold indent-28'>تجربه ای بی نظیردر یادگیری کدنویسی;</h2>
      <h2 className='mx-auto h-16 w-[700px] text-[30px] font-bold indent-52'>
        از <span className='text-blue-500 '>مبتدی</span> تا <span className='text-red-500'>حرفه ای</span> 
        </h2>
      <h5 className='mx-auto h-10 w-[700px] text-gray-400 text-[12px] indent-36'>آکادمی فوق تخصصی کدنویسی و برنامه نویسی از سنین کودکی تا بزگسالی</h5>
      <Link className='mx-auto h-10 w-32  rounded-2xl bg-[#3772FF] text-white px-4 pt-1'>شروع یادگیری</Link>
    </div>
  )
}

export default HeroSection
