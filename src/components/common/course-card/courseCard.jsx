import React from "react";
import TeacherIcon from "./../../../assets/images/teacher-stroke-rounded 1.svg";
import CalenderIcon from "./../../../assets/images/calendar-03-stroke-rounded 1.svg";
import StudentIcon from "./../../../assets/images/students-stroke-rounded 1.svg";
import ThumbUp from "./../../../assets/images/thumbs-up-stroke-rounded 1.svg";
import thumbDown from "./../../../assets/images/thumb-down.svg";
import defaultImg from "./../../../assets/images/courses/courseimg.svg";

const CourseCard = (
  {
    // title,
    // img,
    // teacherName,
    // statusName,
    // describe,
    // student,
    // cost,
    // likeCount,
    // dissLikeCount,
  }
) => {
  const addDefaultImg = (e) => {
    e.target.src = StudentIcon;
  };

  return (
    <div 
    // className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/6 h-[370px] xl:h-[400px] border-2 border-[#E4E4E4] rounded-2xl bg-gray-50 flex flex-col"
    className="w-[337px] h-[450px] bg-lightGray flex flex-col overflow-hidden rounded-3xl"
    >
      <div className="w-full h-[200px]  bg-red-300 rounded-3xl">
        {/* <img
          src={defaultImg}
          alt="not set"
          className="w-96 h-96 object-cover rounded-2xl blur-[#54545417] shadow-md"
          onError={addDefaultImg}
        /> */}
      </div>
      <div className="p-2 mt-5 flex flex-col flex-grow hidden">
        <div>
          <h2 className="text-lg font-semibold text-gray- line-clamp-1">
            {/* {title} */}
            ری‌اکت جی‌اس
          </h2>
          <p className="text-[#787878] text-sm mt-2 line-clamp-2">
            {/* {describe} */}آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی
            ری‌اکت همراه تسک های م...
          </p>
        </div>
        <div className="mt-3">
          <div className="flex items-center gap-2  text-sm">
            <img src={TeacherIcon} alt="" className="h-5 w-5" />
            <span>
              {/* {teacherName} */}
              محسن اسفندیاری , مهدی اصغری
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm">
            {/* <img src={CalenderIcon} alt="" className="h-5 w-5" /> */}
            <span>
              {/* {statusName} */}
              20 اردیبهشت 1403
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm">
            {/* <img src={StudentIcon} alt="" className="h-5 w-5" /> */}
            <span className="text-md">
              {/* {student} */}
              دانشجو
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-around hidden p-2  ">
        <div>
          <span className="text-md font-bold">{/* {cost} */}</span>
          <span className="text-blue-400 text-[14px] line-clamp-1">تومان</span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            {/* <img src={ThumbUp} alt="" className="w-4 h-4" /> */}
            {/* <span>{likeCount}</span> */}
          </div>
          <div className="flex items-center gap-1">
            {/* <img src={thumbDown} alt="" className="w-3 h-4" /> */}
            {/* <span>{dissLikeCount}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
