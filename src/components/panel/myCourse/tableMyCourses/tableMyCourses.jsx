import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: " ",
    dataIndex: "img",
    key: "img",
  },
  {
    title: "نام دوره",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "اساتید دوره",
    dataIndex: "teacher",
    key: "teacher",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " شروع دوره",
    dataIndex: "date",
    key: "date",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "قیمت دوره",
    dataIndex: "price",
    key: "price",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "وضعیت پرداختی",
    dataIndex: "pay",
    key: "pay",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: " ",
    dataIndex: "payModal",
    key: "payModal",
    ellipsis: {
      showTitle: false,
    },

    width: 80,
  },
  {
    title: " ",
    dataIndex: "eye",
    key: "eye",
    ellipsis: {
      showTitle: false,
    },

    width: 80,
  },
];

const TableMyCourses = ({ data }) => (
  <Table columns={columns} dataSource={data} style={{ color: "#000" }} />
);
export default TableMyCourses;
