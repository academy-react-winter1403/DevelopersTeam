import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center'>
<<<<<<< HEAD
      <h2 className='mx-auto  w-[70%]  text-[30px] font-bold border-2 border-red-400 text-center'>تجربه ای بی نظیردر یادگیری کدنویسی;</h2>
      <h2 className='mx-auto h-16 w-[700px] text-[30px] font-bold indent-52'>
        از <span className='text-blue-500 '>مبتدی</span> تا <span className='text-red-500'>حرفه ای</span> 
=======
      <h2 className='mx-auto w-[70%] text-[20px] md:text-3xl font-bold text-center'>تجربه ای بی نظیر در یادگیری کدنویسی;</h2>
      <h2 className='mx-auto w-[70%] text-[20px] md:text-3xl md:mt-2 font-bold text-center'>
        از <span className='text-blue-500 '>مبتدی</span> تا <span className='text-red-500'>حرفه ای</span><span>!</span>
>>>>>>> origin/develop
        </h2>
      <h5 className='mx-auto w-[70%] text-[#787878] mt-4 text-[13px] text-center'>آکادمی فوق تخصصی کدنویسی و برنامه نویسی از سنین کودکی تا بزگسالی</h5>
      <Link className='mx-auto m-2 w-[25%] text-sm h-8 leading-8 xs:w-[20%] sm:w-[17%] md:w-[14%] xl:w-[8%] xl:p-2 xl:leading-4 text-center rounded-full bg-[#3772FF]  text-white '>شروع یادگیری</Link>
    </div>
  )
}

export default HeroSection
