import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "عنوان تیکت",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "تاریخ ثبت",
    dataIndex: "insertTime",
    key: "insertTime",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " مشاهده پاسخ",
    dataIndex: "answer",
    key: "answer",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " اضافه کردن پاسخ",
    dataIndex: "response",
    key: "response",
    ellipsis: {
      showTitle: false,
    },
  },
];

const AnswerColumn = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    style={{ color: "#000" }}
    rowHoverable={false}
  />
);
export default AnswerColumn;
