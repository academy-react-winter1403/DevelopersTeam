import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='mx-auto w-[70%] text-[30px] font-bold text-center'>تجربه ای بی نظیر در یادگیری کدنویسی;</h2>
      <h2 className='mx-auto w-[70%] text-[30px] font-bold text-center'>
        از <span className='text-blue-500 '>مبتدی</span> تا <span className='text-red-500'>حرفه ای</span> 
        </h2>
      <h5 className='mx-auto w-[70%] text-gray-400 text-[12px] text-center'>آکادمی فوق تخصصی کدنویسی و برنامه نویسی از سنین کودکی تا بزگسالی</h5>
      <Link className='mx-auto m-2 w-[22%] md:w-[20%] sm:w-[15%] xl:w-[10%] text-center rounded-2xl bg-[#3772FF]  text-white '>شروع یادگیری</Link>
    </div>
  )
}

export default HeroSection
