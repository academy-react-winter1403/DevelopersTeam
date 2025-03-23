
import React from "react";
import NoghreMedal from "./../../assets/images/noghre.png";
import TalaMedal from "./../../assets/images/tala.png";
import BoronzMedal from "./../../assets/images/boronz.png";
import { Link } from "react-router-dom";

const GoodTeacher = () => {
  return (
    <div className="container  mx-auto border-2  xl:mt-20 mt-[1400px] md:mt-[500px]">
      <div className="text-center border-2 border-red-500 ">
        <h1 className="text-xl md:text-center  font-bold">
          برترین اساتید هفته
        </h1>
        <h6 className="text-sm md:text-center  text-gray-700 mt-2">
          اساتیدی که با نظرسنجی در دوره ها به آنها بیشترین رای مثبت را دادند
        </h6>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-14  xl:mt-20 ">
        {/* Teacher Card 1 */}
        <div className="w-full md:w-[300px] border-2 rounded-2xl border-[#E4E4E4] relative flex flex-col items-center p-4 min-h-[200px]">
          <div className="size-16 md:size-20 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% absolute top-[-32px] md:top-[-45px] right-65  md:right-18 lg:right-25"></div>
          <h1 className="text-lg md:text-center mt-6 font-semibold">
            محمدحسین بحرالعلومی
          </h1>
          <h6 className="text-xs md:text-center text-gray-600">
            دکتری هوش مصنوعی
          </h6>
          <div className="flex flex-row justify-center items-center mt-2 gap-2">
            <span className="text-lg md:text-center">4.1</span>
            <span>
              <img src={NoghreMedal} alt="" className="w-6 h-6  md:w-7 md:h-7" />
            </span>
          </div>
          <h6 className="text-xs md:text-center text-gray-500 mt-4 text-center flex-grow">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </h6>
          <Link to="#">
            <h6 className="w-full md:w-48 mx-auto mt-4 text-white leading-8 h-10 bg-[#3772FF] rounded-2xl text-center">
              صفحه استاد
            </h6>
          </Link>
        </div>

        {/* Teacher Card 2 */}
        <div className="w-full lg:mt-[-20px] md:w-[350px] border-2 rounded-2xl border-[#E4E4E4] relative flex flex-col items-center p-4 min-h-[400px]">
          <div className="size-18 md:size-22 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% absolute top-[-36px] md:top-[-45px] right-65 md:right-22 lg:right-30"></div>
          <h1 className="text-lg md:text-center mt-6 font-semibold">
            محمدحسین بحرالعلومی
          </h1>
          <h6 className="text-xs md:text-[13px] text-gray-600">
            دکتری هوش مصنوعی
          </h6>
          <div className="flex flex-row justify-center items-center mt-2 gap-2">
            <span className="text-lg md:text-center text-blue-500">4.2</span>
            <span>
              <img src={TalaMedal} alt="" className="w-7 h-7 md:w-8 md:h-8" />
            </span>
          </div>
          <h6 className="text-xs md:text-center text-gray-500 mt-4 text-center flex-grow">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </h6>
          <Link to="#">
            <h6 className="w-full md:w-56 mx-auto mt-4 text-white leading-8 h-10 bg-[#3772FF] rounded-2xl text-center">
              صفحه استاد
            </h6>
          </Link>
        </div>

        {/* Teacher Card 3 */}
        <div className="w-full  md:w-[300px] border-2 rounded-2xl border-[#E4E4E4] relative flex flex-col items-center p-4 min-h-[400px]">
          <div className="size-16 md:size-20 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% absolute top-[-32px] md:top-[-45px] right-65 md:right-18 lg:right-25"></div>
          <h1 className="text-lg md:text-center mt-6 font-semibold">
            محمدحسین بحرالعلومی
          </h1>
          <h6 className="text-xs md:text-center text-gray-600">
            دکتری هوش مصنوعی
          </h6>
          <div className="flex flex-row justify-center items-center mt-2 gap-2">
            <span className="text-lg md:text-center">4.0</span>
            <span>
              <img src={BoronzMedal} alt="" className="w-6 h-6 md:w-7 md:h-7" />
            </span>
          </div>
          <h6 className="text-xs md:text-center text-gray-500 mt-4 text-center flex-grow">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </h6>
          <Link to="#">
            <h6 className="w-full md:w-48 mx-auto mt-4 text-white leading-8 h-10 bg-[#3772FF] rounded-2xl text-center">
              صفحه استاد
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoodTeacher;

