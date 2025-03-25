import { DownOutlined } from "@ant-design/icons";
import React from "react";
import { TbChevronsDown } from "react-icons/tb";
import img1 from "./../../../assets/images/courses/Star1.png";
import img2 from "./../../../assets/images/courses/Star2.png";
import img3 from "./../../../assets/images/courses/3dline.png";

const HeroSection = () => {
  return (
    <div className="md:w-1/2 px-5 md:px-0 m-auto h-96 flex flex-col justify-center items-center relative ">
      <h1 className="text-2xl xs:text-3xl md:text-5xl font-bold mb-7 ">
        دوره های متنوع!
      </h1>
      <p className="w-auto text-sm md:text-lg text-gray text-center mb-10">
        ما به شما تنوعی از دوره‌های آموزشی تخصصی را ارائه می‌دهیم که به شما کمک
        می‌کند تا مهارت‌های برنامه‌نویسی و کدنویسی خود را به سطح بالاتری
        برسانید.
      </p>
      <h2 className="text-gray hidden sm:block">لیست دوره ها</h2>
      <div className="text-gray sm:flex flex-col text-xl hidden">
        <TbChevronsDown />
      </div>
      <div className="w-full h-full absolute">
        <img src={img2} alt="not set" className="absolute top-1/6 left-1/5" />
        <img src={img1} alt="not set" className="absolute top-1/3 " />
        <img
          src={img3}
          alt="not set"
          className="hidden sm:block absolute top-2/3 left-1/4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
