import React, { lazy, Suspense, useEffect, useState } from "react";
import { Modal, Spin } from "antd";
const TableComp = lazy(() => import("./tableComp"));
import { CiEdit } from "react-icons/ci";
import DateComponent from "../../common/date/dateComponent";
import { TiMessage } from "react-icons/ti";
import { TagsAccept, TagsWaiting } from "../../panel/tagStatus/tagStatus";
import AnswersModal from "../answersModal/answersModal";
import AnswerColumn from "./answerColumn";
import AddTicket from "../addTicket/addTicket";
import AddTicketModal from "./addModal";

const AnswerTable = ({
  data,
  isSuccess,
  convertedData,
  setCovertedData,
  answeredIds,
}) => {
  useEffect(() => {
    if (isSuccess && data) {
      const newData = data?.map((el) => {
        return {
          text: el.text || "-",
          insertTime: <DateComponent insertDate={el.insertDate} />,
          response: <AddTicketModal id={el.id} />,
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
            {isSuccess && <AnswerColumn data={convertedData} />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AnswerTable;
