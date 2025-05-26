import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "عنوان تیکت",
    dataIndex: "text",
    key: "text",
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
