import React, { lazy, Suspense, useEffect, useState } from "react";
import { Spin } from "antd";
import DateComponent from "../../../common/date/dateComponent";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import AddJob from "../addJob/addJob";
const TableComp = lazy(() => import("./tableComp"));

const TableHolderJobs = ({
  data,
  isSuccess,
  convertedData,
  setCovertedData,
}) => {
  const [currentEditItem, setCurrentEditItem] = useState(null);

  const showModal = (item) => {
    setCurrentEditItem(item);
  };

  const handleCancel = () => {
    setCurrentEditItem(null);
  };

  useEffect(() => {
    if (isSuccess && data) {
      const newData = data?.map((el) => {
        return {
          name: el.jobTitle,
          about: el.aboutJob,
          companyTitle: el.companyName,
          start: <DateComponent insertDate={el.workStartDate} />,
          end: <DateComponent insertDate={el.workEndDate} />,
          status: el.inWork ? (
            <TagsAccept text="در حال کار" />
          ) : (
            <TagsNotAccept text="پایان کار" />
          ),
          edit: <AddJob isEdit={true} el={el} />,
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

export default TableHolderJobs;
