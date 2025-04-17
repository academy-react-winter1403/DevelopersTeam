import React, { lazy, Suspense, useEffect, useState } from "react";
const BodyTableNews = lazy(() => import("./bodyTableNews"));
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsivNews from "../responsivNews";
import { Spin } from "antd";
import PanelModal from "../../../common/panelModal/panelModal";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const TableFaveNews = ({ data, convertedData, setCovertedData, isSuccess }) => {
  const [open, setOpen] = useState(false);

  const [selectedTitle, setSelectedTitle] = useState("");

  const showDrawer = () => {
    setSelectedTitle();
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newConverted = data.myFavoriteNews.map((el) => {
        return {
          img: (
            <img
              src={!el.currentImageAddressTumb ? defImg : el.currentImageAddressTumb}
              alt={el.title}
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          ),
          name: el.title,
          desc: "آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های مفید برای یادگیری بهتر",
          teacher: "محسن اسفندیاری",
          date: "25 اردیبهشت 1403",
          eye: (
            <div onClick={() => showDrawer(el.title)} className="flex gap-5" style={{ cursor: "pointer" }}>
              <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
            </div>
          ),
        };
      });
      setCovertedData(newConverted);
    }
  }, [isSuccess, data, setCovertedData]);

  return (
    <div>
      <div className="bg-white w-full h-auto rounded-2xl mt-5">
        <div className="w-full h-auto hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <BodyTableNews data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <ResponsivNews data={data} />
      {data?.myFavoriteNews.map((item) =>{
        return(
          
          <PanelModal isMyCourses={true} onClose={onClose} open={open}  title={item.title} />
        )
      })}
    </div>
  );
};

export default TableFaveNews;
