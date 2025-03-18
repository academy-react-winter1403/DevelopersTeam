import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='border-2 border-gray-200 mx-auto h-16 w-[700px] text-[30px] font-bold indent-28'>تجربه ای بی نظیردر یادگیری کدنویسی;</h2>
      <h2 className='border-2 border-gray-200 mx-auto h-16 w-[700px] text-[30px] font-bold indent-52'>از مبتدی تا حرفه ای!</h2>
      <h5 className='border-2 border-gray-200 mx-auto h-10 w-[700px] text-gray-400 text-[12px] indent-32'>آکادمی فوق تخصصی کدنویسی و برنامه نویسی از سنین کودکی تا بزگسالی</h5>
      <Link className='border-2  mx-auto h-10 w-32  rounded-2xl bg-[#3772FF] text-white px-4 pt-1'>شروع یادگیری</Link>
    </div>
  )
}

export default HeroSection
