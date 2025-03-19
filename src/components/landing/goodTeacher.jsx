import React from "react";
import NoghreMedal from "./../../assets/images/noghre.svg";


const GoodTeacher = () => {
  return (
    <div>
      <div>
        <h1 className="text-[25px] border-2 w-[1100px] h-10 mx-auto indent-[440px]">برترین اساتید هفته</h1>
        <h6 className="text-[13px] border-2 w-[1100px] h-10 mx-auto indent-[350px] text-gray-700">
          اساتیدی که با نظرسنجی در دوره ها به آنها بیشترین رای مثبت را دادند
        </h6>
      </div>
      <div className="w-[1100px] h-72 border-2 mx-auto mt-20">
        <div>
            <h1>محمدحسین بحرالعلومی</h1>
            <h6>دکتری هوش مصنوعی</h6>
            <span>4.1 <img src={NoghreMedal} alt="" /></span>
        </div>
      </div>
    </div>
  );
};

export default GoodTeacher;
