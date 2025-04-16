import React, { lazy, Suspense, useEffect, useState } from "react";
const BodyTableNews = lazy(() => import("./bodyTableNews"));
import http from "./../../.././../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsivNews from "../responsivNews";

const TableFaveNews = ({ data, convertedData, setCovertedData, isSuccess }) => {

  const getFavNews = async () => {
    const res = await http.get(`/SharePanel/GetMyFavoriteNews`);
    return res;
  };
  const icons = (
    <div className="flex gap-5">
      <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
      <IoMdClose className="w-6 h-6 text-red-500" />
    </div>
  );
  const img = (
    <img
      src={
        data?.currentImageAddressTumb == null
          ? defImg
          : el.currentImageAddressTumb
      }
      alt=""
    />
  );

  useEffect(() => {
    if (isSuccess) {
      const newConverted  = data.myFavoriteNews.map((el) => {
        let newData = {};
        newData["img"] = img;
        newData["name"] = el.title;
        newData["desc"] =
          "آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های مفید برای یادگیری بهتر";
        newData["teacher"] = "محسن اسفندیاری";
        newData["date"] = "25 اردیبهشت 1403";
        newData["eye"] = icons;
        return newData;
      });
      setCovertedData(newConverted );
    }
  }, [data, isSuccess, setCovertedData]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className=" w-full h-auto  hidden sm:block">
          <Suspense fallback={<h1>loading...</h1>}>
            {isSuccess && <BodyTableNews data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <ResponsivNews data={data} />
    </div>
  );
};

export default TableFaveNews;
