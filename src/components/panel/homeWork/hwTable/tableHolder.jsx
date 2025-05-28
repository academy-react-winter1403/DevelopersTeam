import React, { lazy, Suspense, useEffect, useState } from "react";
import { Spin } from "antd";
import DateComponent from "../../../common/date/dateComponent";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import AddHomeWork from "../addHomeWork/addHomeWork";
const TableComp = lazy(() => import("./tableComp"));

const HwTableHolder = ({ data, isSuccess, convertedData, setCovertedData }) => {
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
          hwTitle: el.hwTitle,
          hwDescribe: el.hwDescribe,
          sessionTitle: el.sessionTitle,
          groupName: el.groupName,
          homeWorkDate: <DateComponent insertDate={el.homeWorkDate} />,
          addHW: (
            <AddHomeWork
              courseStudentId={el.courseStudentId}
              homeWorkId={el.homeWorkId}
            />
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
    </div>
  );
};

export default HwTableHolder;
