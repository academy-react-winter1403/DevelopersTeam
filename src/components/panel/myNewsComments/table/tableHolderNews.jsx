import React, { lazy, Suspense, useEffect } from "react";
const TableCompNews = lazy(() => import("./tableCompNews"));
import { Spin } from "antd";
import ResponsiveReserveMyCourse from "../../myReserveCourse/responsiveReserveMyCourse";
import { TagsAccept, TagsNotAccept } from "../../tagStatus/tagStatus";
import DateComponent from "../../../common/date/dateComponent";

const TableHolderNews = ({
  data,
  isSuccess,
  convertedData,
  setCovertedData,
}) => {
  useEffect(() => {
    if (isSuccess && data) {
      const newData = data.myNewsCommetDtos.map((el) => {
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
        };
      });
      setCovertedData(newData);
    }
  }, [isSuccess, data]);
  console.log(data?.courseTitle);

  return (
    <div className=" h- ">
      <div className="bg-white w-full h- rounded-2xl mt-5">
        <div className=" w-full h- hidden sm:block">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Spin />
              </div>
            }
          >
            {isSuccess && <TableCompNews data={convertedData} />}
          </Suspense>
        </div>
      </div>
      <ResponsiveReserveMyCourse />
    </div>
  );
};

export default TableHolderNews;
