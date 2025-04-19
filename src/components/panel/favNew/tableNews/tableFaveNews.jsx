import React, { lazy, Suspense, useEffect, useState } from "react";
const BodyTableNews = lazy(() => import("./bodyTableNews"));
import defImg from "./../../../../assets/images/courses/courseimg.svg";
import ResponsivNews from "../responsivNews";
import { Spin } from "antd";
import PanelModal from "../../../common/panelModal/panelModal";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import toast from "react-hot-toast";
import DateComponent from "../../../common/date/dateComponent";
import { NavLink } from "react-router-dom";

const TableFaveNews = ({ data, isSuccess  }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  // const [selectedTitle, setSelectedTitle] = useState("");
  const [convertData, setConvertData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // console.log("nesData", data);
  const showDrawer = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };
  const onClose = () => {
    setSelectedCourse(null);
    setOpen(false);
  };

  const { mutate: mutateDeleteFavNews } = useMutation({
    mutationFn: async (id) => {
      return await http.delete("/News/DeleteFavoriteNews", {
        data: { deleteEntityId: id },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("favNewsPanel");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });
  useEffect(() => {
    if (isSuccess && data) {
      const newConverted = data.map((el) => {
        return {
          img: (
            <img
              src={
                !el.currentImageAddressTumb
                  ? defImg
                  : el.currentImageAddressTumb
              }
              alt={el.title}
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          ),
          name: (
            <NavLink to={`/news/newsdetail/${el.newsId}`}>{el.title}</NavLink>
          ),
          desc: el.newsData.detailsNewsDto.miniDescribe,
          teacher: el.newsData.detailsNewsDto.addUserFullName,
          date: (
            <DateComponent insertDate={el.newsData.detailsNewsDto.insertDate} />
          ),
          eye: (
            <div className="flex gap-2 items-center">
              <div
                onClick={() => showDrawer(el)}
                className="flex gap-5"
                style={{ cursor: "pointer" }}
              >
                <MdOutlineRemoveRedEye className="w-6 h-6 text-gray" />
              </div>
              <div onClick={() => mutateDeleteFavNews(el.favoriteId)}>
                <VscChromeClose className="w-5 h-5 text-red-400 dark:text-gray-400" />
              </div>
            </div>
          ),
        };
      });
      setConvertData(newConverted);
    }
  }, [isSuccess, data]);

  return (
    <div>
      <div className="bg-white w-full  rounded-2xl mt-5">
        <div className="w-full  hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <BodyTableNews data={convertData} />}
          </Suspense>
        </div>
      </div>
      <ResponsivNews showDrawer={showDrawer} data={data} />
      {selectedCourse && (
        <PanelModal
          isMyNews={true}
          onClose={onClose}
          open={open}
          title={selectedCourse.title}
          newsId={selectedCourse.newsId}
          lastUpdate={selectedCourse.newsData.detailsNewsDto.insertDate}
          describe={selectedCourse.newsData.detailsNewsDto.miniDescribe}
        />
      )}
    </div>
  );
};

export default TableFaveNews;
