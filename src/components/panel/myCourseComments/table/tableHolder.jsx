import React, { lazy, Suspense, useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import DateComponent from "../../../common/date/dateComponent";
const TableComp = lazy(() => import("./tableComp"));
import { CiEdit } from "react-icons/ci";
import EditModal from "../editModal";
import ResponsiveCommentCourse from "../responsiveCommentCourse";

const TableHolder = ({ data, isSuccess, convertedData, setCovertedData }) => {
  const [currentEditItem, setCurrentEditItem] = useState(null);

  const showModal = (item) => {
    setCurrentEditItem(item);
  };

  const handleCancel = () => {
    setCurrentEditItem(null);
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data.myCommentsDtos.map((el) => {
        return {
          name: el.courseTitle,
          title: el.title,
          describe: el.describe,
          accept: el.accept ? (
            <TagsAccept text="پذیرفته شده" />
          ) : (
            <TagsNotAccept text="پذیرفته نشده" />
          ),
          insertDate: <DateComponent insertDate={el.insertDate} />,
          edit: (
            <div>
              <CiEdit
                onClick={() => showModal(el)}
                className="w-5 h-5 text-gray cursor-pointer"
              />
            </div>
          ),
        };
      });
      setCovertedData(newData);
    }
  }, [isSuccess, data]);

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
      <ResponsiveCommentCourse  data={data} />

      {currentEditItem && (
        <EditModal
          isModalOpen={!!currentEditItem}
          handleCancel={handleCancel}
          data={currentEditItem}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default TableHolder;
