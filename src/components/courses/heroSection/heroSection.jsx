import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { TbChevronsDown } from "react-icons/tb";
import img1 from './../../../assets/images/courses/Star1.png'
import img2 from './../../../assets/images/courses/Star2.png'
import img3 from './../../../assets/images/courses/3dline.png'

const HeroSection = () => {
  return (
    <div className="h-96 flex flex-col justify-center items-center relative">
      <h1 className="text-5xl font-bold mb-7 ">دوره های متنوع!</h1>
      <p className="w-lg text-lg text-gray text-center mb-10">
        ما به شما تنوعی از دوره‌های آموزشی تخصصی را ارائه می‌دهیم که به شما کمک
        می‌کند تا مهارت‌های برنامه‌نویسی و کدنویسی خود را به سطح بالاتری
        برسانید.
      </p>
      <h2 className="text-gray">لیست دوره ها</h2>
      <div className="text-gray flex flex-col text-xl"> 
        <TbChevronsDown/>
      </div>
      <img src={img1} alt="not set" className="absolute top-1/3 right-1/4" />
      <img src={img2} alt="not set" className="absolute top-1/6 left-1/3" />
      <img src={img3} alt="not set" className="absolute top-1/2 left-1/4" />
    </div>
  );
};

export default HeroSection;
