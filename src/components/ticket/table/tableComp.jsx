import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "عنوان تیکت",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "نوع",
    dataIndex: "type",
    key: "type",
    ellipsis: {
      showTitle: false,
    },
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
    title: "وضعیت پاسخ",
    dataIndex: "status",
    key: "status",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "مشاهده پاسخ",
    dataIndex: "answer",
    key: "answer",
    ellipsis: {
      showTitle: false,
    },
  },
];

const TableComp = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    style={{ color: "#000" }}
    rowHoverable={false}
  />
);
export default TableComp;
