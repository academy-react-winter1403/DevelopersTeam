import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "نام دوره",
    dataIndex: "name",
    key: "name",
    width: 150,
  },

  {
    title: "عنوان",
    dataIndex: "title",
    key: "title",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
  },
  {
    title: "نظر",
    dataIndex: "describe",
    key: "describe",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
  },
  {
    title: "وضعیت",
    dataIndex: "accept",
    key: "accept",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
  },
  {
    title: "تاریخ ثبت",
    dataIndex: "insertDate",
    key: "insertDate",
    ellipsis: {
      showTitle: false,
    },
    width: 150,
  },
];

const TableCompNews = ({ data }) => (
  <Table
    columns={columns}
    dataSource={data}
    style={{ color: "#000" }}
    rowHoverable={false}
  />
);
export default TableCompNews;
