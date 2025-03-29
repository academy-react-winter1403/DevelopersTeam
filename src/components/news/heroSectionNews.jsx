import React from "react";
import StarOfNewsPage from "./../../assets/images/StarOfNewsPage.svg";
import GlassyGradientNewsPage from "./../../assets/images/GlassyGradientNewsPage.svg";
import StarNewsPage from "./../../assets/images/StarNewsPage.svg";
import FrameNewsPage from "./../../assets/images/FrameNewsPage.svg";

const HeroSectionNews = () => {
  return (
    <div className="md:w-1/2 px-5 md:px-0 m-auto h-96 flex flex-col justify-center items-center relative ">
      <img
        src={StarOfNewsPage}
        alt=""
        className="absolute sm:top-10  md:top-[45px] w-4 h-4 left-20 top-20 sm:left-52 md:left-16 xl:left-56 xl:top-10"
      />
      <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-7 ">
        اخبار و مقالات آکادمی{" "}
      </h2>
      <div className="text-[#787878] text-[14px] text-center mt-2 ">
        <p className="w-auto text-sm lg:text-lg text-gray text-center mb-4 ">
        اخبار و مقالات که میتوانند برای پیشرفت و یادگیری شما مفید
        </p>
        <p className="w-auto text-sm lg:text-lg text-gray text-center mb-12">
           باشند رو ما
          در اختیار شما قرار میدیم
        </p>

        <h2 className="text-gray hidden mb-8 sm:block">لیست اخبار و مقالات</h2>
      </div>
      <img src={GlassyGradientNewsPage} alt="" className='w-10 h-10 absolute hidden sm:block sm:right-14 md:right-[-60px] lg:right-0 xl:right-15 2xl:right-[100px] 2xl:top-40'/>
      <img src={StarNewsPage} alt="" className='absolute hidden sm:block sm:left-36 sm:top-56 md:left-6 lg:left-18 xl:left-36 2xl:left-[210px] 2xl:top-58'/>
      <img src={FrameNewsPage} alt="" className='w-5 h-5 absolute hidden sm:block sm:top-72 lg:right-[240px] xl:right-76 2xl:right-92'/> 
    </div>
  );
};

export default HeroSectionNews;
