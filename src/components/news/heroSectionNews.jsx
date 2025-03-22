import React from 'react'
import StarOfNewsPage from './../../assets/images/StarOfNewsPage.svg'
import GlassyGradientNewsPage from './../../assets/images/GlassyGradientNewsPage.svg'
import StarNewsPage from './../../assets/images/StarNewsPage.svg'
import FrameNewsPage from './../../assets/images/FrameNewsPage.svg'

const HeroSectionNews = () => {
  return (
    <div className='mx-auto w-[1500px] mt-13 h-60 relative'>
      <img src={StarOfNewsPage} alt="" className='absolute left-[600px] top-[-45px] w-4 h-4'/>
      <h2 className='text-3xl font-bold indent-[590px]'>اخبار و مقالات آکادمی </h2>
      <div className='text-gray-500 text-[14px] indent-[560px] mt-5'>
      <h2 >اخبار و مقالات که میتوانند برای پیشرفت و یادگیری شما مفید</h2>
      <h2 className='indent-[630px]'>باشند رو ما در اختیار شما قرار میدیم</h2>
      <h2 className='mt-14 indent-[660px]'>لیست اخبار و مقالات</h2>
      </div>
      <img src={GlassyGradientNewsPage} alt="" className='w-8 h-8 absolute right-[500px] top-14'/>
      <img src={StarNewsPage} alt="" className='absolute left-[600px] top-28'/>
      <img src={FrameNewsPage} alt="" className='w-5 h-5 absolute right-[700px]'/>
    </div>
  )
}

export default HeroSectionNews
