import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "نام دوره",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "عنوان",
    dataIndex: "title",
    key: "title",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "نظر",
    dataIndex: "describe",
    key: "describe",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "وضعیت",
    dataIndex: "accept",
    key: "accept",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "تاریخ ثبت",
    dataIndex: "insertDate",
    key: "insertDate",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "ویرایش",
    dataIndex: "edit",
    key: "edit",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
  },
];

const TableComp = ({ data }) => (
  <Table columns={columns} dataSource={data} style={{ color: "#000" }} />
);
export default TableComp;
