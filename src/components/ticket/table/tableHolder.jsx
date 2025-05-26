import React, { lazy, Suspense, useEffect, useState } from "react";
import { Modal, Spin } from "antd";
const TableComp = lazy(() => import("./tableComp"));
import { CiEdit } from "react-icons/ci";
import DateComponent from "../../common/date/dateComponent";
import { TiMessage } from "react-icons/ti";
import { TagsAccept, TagsWaiting } from "../../panel/tagStatus/tagStatus";
import AnswersModal from "../answersModal/answersModal";
import { BsEye } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const TableHolder = ({
  data,
  isSuccess,
  convertedData,
  setCovertedData,
  answered,
  answeredIds,
}) => {
  // const [currentEditItem, setCurrentEditItem] = useState(null);

  // const showModal = (item) => {
  //   setCurrentEditItem(item);
  // };

  // const handleCancel = () => {

  //   setCurrentEditItem(null);
  // };

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data?.map((el) => {
        return {
          key: el.id,
          name: el.name,
          type: el.type,
          insertTime: <DateComponent insertDate={el.insertTime} />,
          status: answeredIds.has(el.id) ? (
            <TagsAccept text="پاسخ داده شده" />
          ) : (
            <TagsWaiting text="درحال انتظار" />
          ),
          answer: answeredIds.has(el.id) ? (
            <NavLink to={`/panel/ticket/${el.id}`}>
              <TiMessage className="w-7 h-7" />
            </NavLink>
          ) : (
            ""
          ),
        };
      });
      setCovertedData(newData);
    }
  }, [isSuccess, data, answeredIds]);

  return (
    <div className="">
      <div className="bg-white w-full  dark:bg-gray-800 rounded-2xl mt-5">
        <div className="w-full hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-32 flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <TableComp data={convertedData} />}
          </Suspense>
        </div>
      </div>
      {/* <ResponsiveCommentCourse  data={data} /> */}

      {/* {currentEditItem && (
        <EditModal
          isModalOpen={!!currentEditItem}
          handleCancel={handleCancel}
          data={currentEditItem}
        />
      )} */}
    </div>
  );
};

export default TableHolder;
