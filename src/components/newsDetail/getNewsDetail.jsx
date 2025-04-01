import React, { useEffect, useState } from "react";
import http from "../../core/services/interceptor";
import { useParams } from "react-router-dom";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineStars } from "react-icons/md";
import DateComponent from "../../components/common/date/dateComponent";

const GetNewsDetailList = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  console.log("detail", id);
  const getDetail = async () => {
    const res = await http.get(`/News/${id}`);
    setDetail(res.detailsNewsDto);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="my-14 h-auto flex flex-col 2xl:flex-row justify-around ">
      <div className="border-4 w-[538px] h-[428px]  border-[#E4E4E4] rounded-4xl sticky top-5">
        <h2 className="text-3xl font-bold p-4  ">{detail?.title}</h2>

        <div className="flex gap-2 mt-28 space-x-2 space-y-5">
          <HiOutlineCalendarDateRange className="w-6 h-6 mr-2" />
          <span>
            <DateComponent insertDate={detail?.insertDate} />
          </span>
        </div>

        <div className="flex gap-2 items-center ">
          <IoEyeOutline className="w-6 h-6 mr-2" />
          <span>225</span>
        </div>

        <h2 className="mt-12 text-[#787878] p-4 font-semibold">منتشر کننده</h2>

        <div className="flex items-center justify-between gap-2 p-2 ">
          <div className="gap-2 flex items-center">
            <img
              src={detail?.addUserProfileImage}
              alt=""
              className="border border-[#E4E4E4] rounded-full w-14 h-14"
            />
            <span className="font-semibold text-lg">
              {detail?.addUserFullName}
            </span>
          </div>
          <div className="flex  justify-evenly gap-2 ">
            <div className="flex items-center justify-center border border-[#E4E4E4] rounded-full w-14 h-14">
              <MdOutlineBookmarkAdd className=" w-6 h-6 " />
            </div>
            <div className="flex items-center justify-center border border-[#E4E4E4] rounded-full w-14 h-14">
              <AiOutlineLike className=" w-6 h-6" />
            </div>
            <div className="flex items-center justify-center border border-[#E4E4E4] rounded-full w-14 h-14">
              <AiOutlineDislike className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[750px] border border-red-400 h-auto">
        <div className="w-[738px] h-[428px] border border-[#E4E4E4] rounded-4xl">
          <img src={detail?.addUserProfileImage} alt="" />
        </div>

        <div className="w-[738px] border-2 border-blue-500 h-auto ">
          <h2 className="mt-5 p-5">
            {detail?.miniDescribe} لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </h2>
        </div>
        <div className="border w-[738px] h-10 flex items-center gap-1 p-4 mt-20">
          <MdOutlineStars className="text-[#3772FF]" />
          <h2>امتیاز بدید:</h2>
          <div>{detail?.currentRate}</div>
        </div>

        <div className="border w-[750px] h-auto mt-20">
          <h2 className="font-bol text-3xl p-4">نظرات</h2>
          <div className="border border-[#E4E4E4] w-[738px] h-96 rounded-4xl">

          </div>
        </div>
      </div>
    </div>
  );
};

export default GetNewsDetailList;
