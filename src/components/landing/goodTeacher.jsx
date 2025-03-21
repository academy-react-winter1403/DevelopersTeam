import React from "react";
import NoghreMedal from "./../../assets/images/noghre.png";
import TalaMedal from "./../../assets/images/tala.png";
import BoronzMedal from "./../../assets/images/boronz.png";
import { Link } from "react-router-dom";


const GoodTeacher = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-[25px]  w-[1100px] h-10 mt-30 mx-auto indent-[440px]">برترین اساتید هفته</h1>
        <h6 className="text-[13px] w-[1100px] h-10 mx-auto indent-[350px] text-gray-700">
          اساتیدی که با نظرسنجی در دوره ها به آنها بیشترین رای مثبت را دادند
        </h6>
      </div>
      <div className="w-[1100px] h-96 mx-auto mt-15 flex flex-row gap-18">
        <div className="w-[300px] border-2 h-72 mt-16 rounded-2xl border-[#E4E4E4] relative">
            <div className="size-20 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% absolute top-[-45px] right-27"></div>
            <h1 className="mr-10 mt-10 text-[20px]">محمدحسین بحرالعلومی</h1>
            <h6 className="mr-19 mt-1 text-[13px] text-gray-600">دکتری هوش مصنوعی</h6>
            <div className="flex flex-row justify-center mt-4  gap-2">
               <span className="  text-[20px]">4.1 </span> <span><img src={NoghreMedal} alt="" className="w-7 h-7" /></span>
            </div>
            <h6 className="text-[13px] mr-2 text-gray-500 mt-6"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</h6>
            <Link><h6 className="w-64 mx-auto mt-6 indent-20 text-white leading-8 h-10 bg-[#3772FF] rounded-2xl">صفحه استاد</h6></Link>
        </div>

        <div className="w-[350px] border-2 h-80  rounded-2xl border-[#E4E4E4] relative">
            <div className="size-22 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% absolute top-[-45px] right-32"></div>
            <h1 className="mr-20 mt-13 text-[20px]">محمدحسین بحرالعلومی</h1>
            <h6 className="mr-27 mt-1 text-[13px] text-gray-600">دکتری هوش مصنوعی</h6>
            <div className="flex flex-row justify-center mt-6 gap-2">
               <span className="  text-[20px] text-blue-500">4.2 </span> <span><img src={TalaMedal} alt="" className="w-8 h-8" /></span>
            </div>
            <h6 className="text-[14px] mr-4 mt-7 text-gray-500 "> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</h6>
            <Link><h6 className="w-72 mx-auto mt-7 indent-24 text-white leading-8 h-10 bg-[#3772FF] rounded-2xl">صفحه استاد</h6></Link>
        </div>

        <div className="w-[300px] border-2 h-72 mt-16 rounded-2xl border-[#E4E4E4] relative">
            <div className="size-20 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% absolute top-[-45px] right-27"></div>
            <h1 className="mr-10 mt-10 text-[20px]">محمدحسین بحرالعلومی</h1>
            <h6 className="mr-19 mt-1 text-[13px] text-gray-600">دکتری هوش مصنوعی</h6>
            <div className="flex gap-2 justify-center mt-4">
               <span className="  text-[20px]">4.0 </span> <span><img src={BoronzMedal} alt="" className="w-7 h-7"/></span>
            </div>
            <h6 className="text-[13px] mr-2 text-gray-500 mt-6"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</h6>
            <Link><h6 className="w-64 mx-auto mt-6 indent-20 text-white leading-8 h-10 bg-[#3772FF] rounded-2xl">صفحه استاد</h6></Link>
        </div>
      </div>
    </div>
  );
};

export default GoodTeacher;
